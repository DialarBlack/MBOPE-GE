self.addEventListener('fetch', event => {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response('<h1>Service unavailable</h1>', {
          status:  503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/html'
          })
        });
      })
    );
  });