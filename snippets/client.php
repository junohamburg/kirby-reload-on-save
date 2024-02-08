<?php
  use Kirby\Cms\App as Kirby;

  if (option('junohamburg.reload-on-save.active') !== true) return;

  $mediaUrl = Kirby::plugin('junohamburg/reload-on-save')->mediaUrl();
?>

<script
  type="module"
  src="<?= $mediaUrl ?>/client.js"
  data-reload-on-save-client
  data-url="<?= $kirby->url() ?>"
>
</script>
