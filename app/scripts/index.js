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

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

//modals
$('.js-modal-open').click(function () {
    $('#callback').addClass('is-active')
});
$('.js-modal-close').click(function () {
    $('#callback').removeClass('is-active')
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                    ;
                });
            }
        }
    });


$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        var formData = $(form).serialize();

        $("#submit-btn").addClass('is-loading');

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('is-error');
            $(formMessages).addClass('is-success');

            // Set the message text.
            $(formMessages).text("Мы скоро Вам перезвоним!").parent().show();

            $("#submit-btn").removeClass('is-loading');

            // Clear the form.
            $('#name').val('');
            $('#phone').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('is-success');
            $(formMessages).addClass('is-error');

            $("#submit-btn").removeClass('is-loading');

            // Set the message text.

            $(formMessages).text('Что-то пошло не так. Попробуйте ещё раз!');

        });
    });
});






if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
