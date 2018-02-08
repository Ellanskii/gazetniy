/* eslint-disable */
import './../styles/variables-bulma.sass'
import './../styles/main.scss'
import './../styles/slick-carousel/slick/slick.scss';
import './../styles/slick-carousel/slick/slick-theme.scss';

import $ from 'jquery'
import slick from 'slick-carousel'

$('#slider').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
});
$('#overview-slider').slick();

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
