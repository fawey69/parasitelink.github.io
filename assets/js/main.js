!(function ($) {
  var $window = $(window),
    $banner = $("#banner"),
    $body = $("body");
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  }),
    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-preload");
      }, 100);
    }),
    $("#menu")
      .append('<a href="#menu" class="close"></a>')
      .appendTo($body)
      .panel({
        target: $body,
        visibleClass: "is-menu-visible",
        delay: 500,
        hideOnClick: !0,
        hideOnSwipe: !0,
        resetScroll: !0,
        resetForms: !0,
        side: "right",
      });
  // Get the modal
  var modal = document.getElementsByClassName("modal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  btn[0].onclick = function () {
    modal[0].style.display = "block";
  };
  btn[1].onclick = function () {
    modal[1].style.display = "block";
  };
  btn[2].onclick = function () {
    modal[2].style.display = "block";
  };
  btn[3].onclick = function () {
    modal[3].style.display = "block";
  };
  btn[4].onclick = function () {
    modal[4].style.display = "block";
  };
  btn[5].onclick = function () {
    modal[5].style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span[0].onclick = function () {
    modal[0].style.display = "none";
  };
  span[1].onclick = function () {
    modal[1].style.display = "none";
  };
  span[2].onclick = function () {
    modal[2].style.display = "none";
  };
  span[3].onclick = function () {
    modal[3].style.display = "none";
  };
  span[4].onclick = function () {
    modal[4].style.display = "none";
  };
  span[5].onclick = function () {
    modal[5].style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})(jQuery);
