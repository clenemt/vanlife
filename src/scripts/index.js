import $ from 'jquery';
import '@fancyapps/fancybox';
import 'lazysizes';

// Try to load all image as fancy box
$('[data-fancybox]').fancybox({ buttons: ['zoom', 'close'] });

// Open mailto links in a new tab
$("a[href^='mailto:']").click(function(e) {
  e.preventDefault();
  window.open($(this).attr('href'));
});
