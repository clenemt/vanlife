import $ from 'jquery';
import '@fancyapps/fancybox';
import 'lazysizes';

// Try to load all image as fancy box
$('[data-fancybox]').fancybox({ buttons: ['zoom', 'close'] });
