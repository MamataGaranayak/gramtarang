/*==================================
Edubin theme activation scripts  
====================================*/
(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // === Sticky header
    $(function() {
        var header = $(".is-header-sticky"),
            yOffset = 0,
            triggerPoint = 220;
        $(window).on('scroll', function() {
            yOffset = $(window).scrollTop();
            if (yOffset >= triggerPoint) {
                header.addClass("sticky-active animated slideInDown");
            } else {
                header.removeClass("sticky-active animated slideInDown");
            }
        });
    });

    //===== Count Down
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="count-down-time"><div class="single-count"><span class="number">%D :</span><span class="title">Days</span></div><div class="single-count"><span class="number">%H :</span><span class="title">Hours</span></div><div class="single-count"><span class="number">%M :</span><span class="title">Minuets</span></div><div class="single-count"><span class="number">%S</span><span class="title">Seconds</span></div></div>'));
        });
    });



    //===== Search
    $('#search').on('click', function() {
        $(".edubin-search-box").fadeIn(600);
    });
    $('.edubin-closebtn').on('click', function() {
        $(".edubin-search-box").fadeOut(600);
    });
    
})(jQuery);