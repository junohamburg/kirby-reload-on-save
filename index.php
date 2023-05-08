<?php

Kirby::plugin('junohamburg/reload-on-save', [
  'options' => [
    'active' => false
  ],
  'snippets' => [
    'reload-on-save/client' => __DIR__ . '/snippets/client.php',
  ],
  'hooks' => [
    'page.render:after' => function ($contentType, $data, $html, $page) {
      $html = str_replace('</head>', snippet('reload-on-save/client', [], true) . '</head>', $html);
      return $html;
    }
  ]
]);
