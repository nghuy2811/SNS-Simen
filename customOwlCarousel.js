$(document).ready(function () {
  $("#most-viewed .owl-carousel").owlCarousel();
  $("#suggest-collection .owl-carousel").owlCarousel();
  $(".latest-post__carousel").owlCarousel();
  $(".brands-carousel").owlCarousel();
});
$("#most-viewed .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".latest-post__carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".brands-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

$("#suggest-collection .owl-carousel").owlCarousel({
  loop: true,
  margin: 24,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

var owlLatestPosts = $(".latest-post__carousel");
owlLatestPosts.owlCarousel();
$(".control-btn--right-lp").click(function () {
  owlLatestPosts.trigger("next.owl.carousel");
});
// Go to the previous item
$(".control-btn--left-lp").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owlLatestPosts.trigger("prev.owl.carousel");
});

var owlMostViewed = $("#most-viewed .owl-carousel");
owlMostViewed.owlCarousel();
$(".control-btn--right-mv").click(function () {
  owlMostViewed.trigger("next.owl.carousel");
});
// Go to the previous item
$(".control-btn--left-mv").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owlMostViewed.trigger("prev.owl.carousel");
});

var owlSuggestCollection = $("#suggest-collection .owl-carousel");
owlSuggestCollection.owlCarousel();
// Go to the next item
$(".control-btn--right-sc").click(function () {
  owlSuggestCollection.trigger("next.owl.carousel");
});
// Go to the previous item
$(".control-btn--left-sc").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owlSuggestCollection.trigger("prev.owl.carousel");
});
