panel.plugin('junohamburg/reload-on-save', {
  created(Vue) {
    if (!'BroadcastChannel' in window) return;

    const bc = new BroadcastChannel(this.panel.urls.site);

    // Kirby 4
    if (Vue.$store) {
      Vue.$store.subscribeAction({
        after: (action, state) => {
          if (action.type === 'content/save') {
            bc.postMessage('content/saved');
          }
        }
      });
    }
    // Kirby 5
    else {
      window.panel.events.on('model.update', () => {
        bc.postMessage('content/saved');
      });
    }
  }
});
