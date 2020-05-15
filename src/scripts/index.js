import $ from 'jquery';
import '@fancyapps/fancybox';

// Try to load all image as fancy box
$('[data-fancybox]').fancybox({ buttons: ['zoom', 'close'] });
