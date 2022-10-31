let cacheData = "appV1"
this.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(cacheData).then((cache) => {
			cache.addAll([
				'/static/js/main.chunk.js',
				'/static/js/bundle.js',
				'/static/js/vendors~main.chunk.js',
				'/index.html',
				'/manifest.json',
				'/'


			])
		})
	)
})


// Cache data for offline mode

this.addEventListener("fetch", (event) => {


	// console.warn("url",event.request.url)


	if (!navigator.onLine) {
		event.respondWith(
			caches.match(event.request).then((resp) => {
				if (resp) {
					return resp
				}
				let requestUrl = event.request.clone();
				fetch(requestUrl)
			})
		)
	}
}) 