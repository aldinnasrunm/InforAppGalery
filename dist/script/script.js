$(document).ready(function() {
    let angle = 0;

    function rotateCarousel() {
        $('.carousel').css('transform', 'rotateY(' + angle + 'deg)');
    }

    $('.carousel').on('swipeleft', function() {
        angle -= 60;
        rotateCarousel();
    });

    $('.carousel').on('swiperight', function() {
        angle += 60;
        rotateCarousel();
    });

    let startX;

    $('.carousel').on('mousedown touchstart', function(e) {
        startX = e.pageX || e.originalEvent.touches[0].pageX;
    });

    $('.carousel').on('mouseup touchend', function(e) {
        let endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        let deltaX = endX - startX;
        
        if (deltaX > 0) {
            angle -= 60;
        } else {
            angle += 60;
        }

        rotateCarousel();
    });
});
