const CACHE = "app-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll([
        "/",
        "/attendance",
        "/login"
      ])
    )
  );
});