function init() {
  if (!'BroadcastChannel' in window) return;

  const script = document.querySelector('script[data-reload-on-save-client]');
  const bc = new BroadcastChannel(script.dataset.url);

  bc.onmessage = e => {
    if (e.data === 'content/saved') window.location.reload();
  };
}

init();
