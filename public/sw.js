

self.addEventListener("install", function (event) {
    console.log("Service Worker Installed on: %s , event: %O", new Date(), event);
});

self.addEventListener("activate", function (event) {
    console.log("Service Worker activated on: %s , Event: %O", new Date(), event);
})


self.addEventListener("fetch", function (event) {
    console.log(event);
});