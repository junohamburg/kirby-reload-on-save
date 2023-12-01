# Kirby Reload On Save

This plugin for Kirby 3 and Kirby 4 automatically reloads the frontend when content changes are saved in the panel.

It uses the [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) to communicate between panel and frontend. There is no build tool or `npm install` necessary, so the plugin can be used both in your local development and your production environment.

https://github.com/junohamburg/kirby-reload-on-save/assets/77532479/769d44b9-cdd7-47f7-b1f0-b4c260393cfd

Clicking "Save" or using CMD+S / CTRL+S saves the content and reloads the frontend.

## Installation

### Download

Download and copy this repository to `/site/plugins/kirby-reload-on-save`.

### Composer

```
composer require junohamburg/kirby-reload-on-save
```

### Git submodule

```
git submodule add https://github.com/junohamburg/kirby-reload-on-save.git site/plugins/kirby-reload-on-save
```

## Setup

Enable the plugin in your config using in the `ready` [option](https://getkirby.com/docs/reference/system/options/ready) shown below. That way, the plugin is only active when the user is logged in and it does not interfere with the Kirby cache.

**site/config/config.php**

```php
<?php

return [
  'ready' => function ($kirby) {
    return [
      'junohamburg.reload-on-save' => [
        'active' => $kirby->user() !== null
      ]
    ];
  }
];

```

Tip: If you only want to enable the plugin in your local development environment, use domain/environment specific config files: [Kirby docs](https://getkirby.com/docs/guide/configuration#multi-environment-setup)

## How it works

The plugin uses the [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) to communicate between tabs: One Broadcast Channel is added in the panel, another one is added in the frontend using a `page.render:after` hook.
When the user saves content changes in the panel, the Broadcast Channel in the panel sends a message to the frontend to reload the page.

## Limitations

1. This plugin will reload any open page in your frontend. There is no distinction which page (or file or user) was saved in the panel – only if the page belongs to the same site.
2. Uploading files, adding new pages, changing the page title or other actions that do not trigger a `content/save` action in the panel will not reload the frontend automatically.
3. The Broadcast Channel API is supported by any modern browser, except Safari 15.3 and older: [Can I Use](https://caniuse.com/broadcastchannel)

## License

MIT

## Credits

- [JUNO](https://juno-hamburg.com)
