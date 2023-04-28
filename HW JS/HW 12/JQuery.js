$(document).ready(function() {
    var interval = 15000;
      var slider = $('.slider');
      var images = slider.find('.slider-img');
      var currentIndex = 0;

      setInterval(function() {
        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        var currentImage = slider.find('.first');
        var nextImageIndex = currentIndex;
        var nextImage = images.eq(nextImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('first');

        nextImage.fadeIn(1000);
        nextImage.addClass('first');
      }, interval);


    $('.butt-next').click(function() {
      var currentImage = $('.slider-img.first');
      var currentImageIndex = $('.slider-img.first').index();
      var nextImageIndex = currentImageIndex + 1;
      var nextImage = $('.slider-img').eq(nextImageIndex);
      currentImage.fadeOut(1000);
      currentImage.removeClass('first');
  
      if(nextImageIndex == ($('.slider-img:last').index()+1)) {
        $('.slider-img').eq(0).fadeIn(1000);
        $('.slider-img').eq(0).addClass('first');
      } else {
        nextImage.fadeIn(1000);
        nextImage.addClass('first');
      }
    });

    $('.butt-prev').click(function() {
      var currentImage = $('.slider-img.first');
      var currentImageIndex = $('.slider-img.first').index();
      var prevImageIndex = currentImageIndex - 1;
      var prevImage = $('.slider-img').eq(prevImageIndex);

      currentImage.fadeOut(1000);
      currentImage.removeClass('first');
      prevImage.fadeIn(1000);
      prevImage.addClass('first')
    });
});