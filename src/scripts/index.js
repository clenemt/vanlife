import $ from 'jquery';
import '@fancyapps/fancybox';
import 'lazysizes';

// Try to load all image as fancy box
$('[data-fancybox]').fancybox({ buttons: ['zoom', 'close'] });

// Open mailto links in a new tab
$("a[href^='mailto:']").click(function (e) {
  e.preventDefault();
  window.open($(this).attr('href'));
});

// Simple tracking
const COOKIE = 'F_C_AGNES';
const $form = $('[data-form]');
if (
  $form.length &&
  !document.cookie.split(';').find((cookie) => cookie.startsWith(COOKIE))
) {
  $.post($form.attr('action'), $form.serialize()).then(() => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 10 * 365 * 24 * 60 * 60);
    document.cookie = `${COOKIE}=true; expires=${expires.toUTCString()}; path=/`;
  });
}
