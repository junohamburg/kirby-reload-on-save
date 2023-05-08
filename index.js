panel.plugin('junohamburg/reload-on-save', {
  created(Vue) {
    if (!'BroadcastChannel' in window) return;

    const bc = new BroadcastChannel(this.panel.$urls.site);
    let saveInProgress = false;

    Vue.$store.subscribeAction({
      after: (action, state) => {
        if (action.type === 'content/save') {
          saveInProgress = true;
        }

        if (action.type === 'notification/success' && saveInProgress) {
          saveInProgress = false;

          bc.postMessage('content/saved');
        }
      }
    });
  }
});
