document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // TESTING GIT ADD AND PUSH

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
