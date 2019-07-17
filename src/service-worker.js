/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || []);
//workbox.precaching.suppressWarnings();

// Cachear archivos staticos
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// App Shell
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'));

// La API usa Stale While Revalidate para mayor velocidad
workbox.routing.registerRoute(/^https?:\/\/api.themoviedb.org\/.*/, new workbox.strategies.NetworkFirst(), 'GET');

workbox.routing.registerRoute(/^http?:\/\/image.tmdb.org\/.*/, new workbox.strategies.NetworkFirst(), 'GET');

// Last fuentes van con Cache First y vencen al mes
workbox.routing.registerRoute(
	/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
	new workbox.strategies.CacheFirst({
		cacheName: 'google-fonts-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 30 * 24 * 60 * 60
			})
		]
	}),
	'GET'
);

// Todo lo demás usa Network First
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst(), 'GET');
