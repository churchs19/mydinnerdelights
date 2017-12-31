$(document).ready(function() {
  var headerHeight = $("header").height();

  //Smooth Scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - headerHeight
            },
            1000
          );
          return false;
        }
      }
    });
  });

  // Main Menu
  $("#main-nav").affix({
    offset: {
      top: $("header").height()
    }
  });

  //Slider
  // $('.flexslider').flexslider({
  // 	animation: "fade",
  // 	directionNav: false,
  // 	pauseOnAction: false,
  // });

  // var containerPosition = $('.container').offset();
  // var positionPad = containerPosition.left + 15;

  // $('#slider').find('.caption').css({
  // 	left: positionPad + 'px',
  // 	marginTop: '-' + $('.caption').height() / 2 + 'px'
  // });

  // -------------------------------------------------------------
  //  Instagram Feed
  // -------------------------------------------------------------
  // https://api.instagram.com/v1/users/5881803151/media/recent?access_token=5881803151.24b61b7.56d72cab1f3942308e2f11abb30c7560
  $(document).ready(function() {
    if ($(".photos-section").length > 0) {
      var $grid = $(".photos-section .grid"),
        template = _.template(
          '<a class="photo-item" href="<%- link %>" target="_blank"><img src="<%- images.low_resolution.url %>" alt="<%- caption.text %>"/></a>'
        );
      $.ajax({
        url:
          "https://api.instagram.com/v1/users/5881803151/media/recent?access_token=5881803151.24b61b7.56d72cab1f3942308e2f11abb30c7560",
        crossDomain: true,
        dataType: "jsonp",
        cache: false,
        success: function(response) {
          $grid.append(template(response.data[0]));
          var photoItem = document.getElementsByClassName("photo-item")[0];
          var flexBasis = window
            .getComputedStyle(photoItem)
            .getPropertyValue("flex-basis");
          var divisor = 2;
          if (flexBasis.indexOf("33%") >= 0) {
            divisor = 3;
          } else if (flexBasis.indexOf("25%") >= 0) {
            divisor = 4;
          } else if (flexBasis.indexOf("20%") >= 0) {
            divisor = 5;
          }
          for (var i = 1; i < Math.min(12, response.data.length); i++) {
            var row = Math.floor(i / divisor);

            if (row < 2) {
              $grid.append(template(response.data[i]));
            }
          }
        }
      });
    }
  });
});
