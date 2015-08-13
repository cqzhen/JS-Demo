angular.module('slide', [])
  .controller('slideController', ['$interval',function($interval) {
    var slide = this;
    slide.list = [
      './images/1.jpg',
      './images/2.jpg',
      './images/3.jpg'
    ];

    slide.locate = [1, 2, 3];

    slide.offset = 0;
    var scale = 600;
    slide.active = 1;

    var changeOffset = $interval(function () {
      slide.offset === -scale * (slide.list.length-1) ? slide.offset = 0 : slide.offset -= scale;
      slide.active = slide.offset / -scale + 1;
    }, 3000);

    slide.toggle = function(index) {
      slide.offset = index * -scale;
      slide.active = index + 1;
    }

    slide.isActive = function(item) {
      return item  === slide.active;
    }

  }]);
