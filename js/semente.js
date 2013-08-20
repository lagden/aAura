'use strict';

requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});

define(['jquery', '../js/helpers/Loading', '../bower_components/gsap/src/uncompressed/TweenMax'], function($, Loading) {

    // vars
    var l = new Loading(),
        wait = false,
        $frutos = $('#frutos');

    // config ajax
    $.ajaxSetup({
        type: 'GET',
        dataType: 'json',
        cache: true,
        beforeSend: function(xhr) {
            if (!wait) {
                l.show();
                wait = true;
            } else
                return false;
        },
        complete: function(xhr, status) {
            wait = false;
            l.hide();
        }
    });

    // ajax

    function semente(v) {
        $.ajax({
            url: 'http://randomuser.me/g/',
            data: {
                "seed": v
            },
            success: function(r) {
                if (r.user) {
                    $frutos.append(template(r.user));
                }
            }
        });
    };

    // template

    function template(u) {
        return '\
<li>\
    <div class="media">\
        <img class="media__img" src="' + u.picture + '" alt="' + u.name.last + '">\
        <div class="media__body">\
            <b>' + String(u.name.first + ' ' + u.name.last).toUpperCase() + '</b><br>\
            <a href="mailto:' + u.email + '">' + u.email + '</a>\
        </div>\
    </div>\
</li>';
    }

    // trigger
    $('#gerador').on('submit', function(ev) {
        ev.preventDefault();
        semente(this[0].value);
        this.reset();
    });
});