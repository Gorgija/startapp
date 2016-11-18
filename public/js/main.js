

function myController($appml) {
    if ($appml.message == "ready") {
        $appml.title = "Simple App";
        $appml.today = new Date();
        $appml.copyright = "GeoSun 2016 on";
    }
}
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js").then(console.log("Service Worker Registered on: %O", new Date()));
}