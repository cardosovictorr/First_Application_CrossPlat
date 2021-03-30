document.addEventListener('deviceready', onDeviceReady, false);

//Variables
// Creating the delete option ton the list. 
let listToDo = document.getElementsByTagName("LI");
var i;
// Here is the delete button actually working. The function above was just to show the "X". Here is a method that delete the item.
var deleting = document.getElementsByClassName("deleting");

//Functions
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    //login_btn
    $('#login_btn').click(login)

    //save function
    $('#save_btn').click(registerNewUser)

    //add function 
    $('#addBtn').click(addItem)

}


function registerNewUser() {
    let userName = $('#newUserName').val()
    let password = $('#newPassword').val()

    localStorage.setItem("userName", userName)
    localStorage.setItem("password", password)

    window.location.href = "#login"
}

function login() {

    let userName = $('#userName').val()
    let password = $('#password').val()

    if (userName == localStorage.getItem('userName') && password == localStorage.getItem('password')) {
        //home
        window.location.href = "#home"
        $('#author_msg').text('List author: ' + userName)
    } else {
        alert("invalid username or password, pleas try again!")
    }
}

//the following loop will go over every item of the list and create the delete option for the list
for (i = 0; i < listToDo.length; i++) {
    let elementSpan = document.createElement("SPAN");
    let text = document.createTextNode("X");
    elementSpan.className = "deleting";
    elementSpan.appendChild(text);
    listToDo[i].appendChild(elementSpan);
}


for (i = 0; i < deleting.length; i++) {
    deleting[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// The complete simbol click and mark as completed 
let myList = document.querySelector('ul');
myList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function addItem() {
    let listElement = document.createElement("LI");
    let inputItem = document.getElementById("item-to-add").value;
    let t = document.createTextNode(inputItem);
    listElement.appendChild(t);
    console.log(inputItem);
    if (inputItem === '') {
        alert("You must write something!");
    } else {
        document.getElementById("made-list").appendChild(listElement);
        console.log(inputItem);
    }
    document.getElementById("item-to-add").value = "";

    let elementSpan = document.createElement("SPAN");
    let text = document.createTextNode(" X");
    elementSpan.className = "deleting";
    elementSpan.appendChild(text);
    listElement.appendChild(elementSpan);

    for (i = 0; i < deleting.length; i++) {
        deleting[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}