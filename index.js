panel.plugin('junohamburg/reload-on-save', {
  created(Vue) {
    if (!'BroadcastChannel' in window) return;

    const bc = new BroadcastChannel(this.panel.$urls.site);

    Vue.$store.subscribeAction({
      after: (action, state) => {
        if (action.type === 'content/save') {
          bc.postMessage('content/saved');
        }
      }
    });
  }
});
