$('.nav-item').on("click", function () {
  $('.nav-item').removeClass("active");

  $(this).addClass("active");
});


// open and close nav bar 
function closeNav() {
  if ($(".navbar-collapse").css("left") < "0px"){
    $(".collapse").css("left","0px") 
    } else {
      $(".collapse").css("left", "-100%");
    };
}

$(".navbar-toggler").on("click", function () {
  if ($(".navbar-collapse").css("left") < "0px"){
    $(".collapse").css("left","0px") 
    } else {
      $(".collapse").css("left", "-100%");
    };
});



// sticky nav bar to top when scroll window
window.onscroll = function () {
 
}
window.onscroll = function () {
  
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $(".navbar").addClass("fixedToTop");
  } else {
    $(".navbar").removeClass("fixedToTop");
  }

  // if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  //   $(".navbar").addClass("fixedToTop");
  // } else {
  //   $(".navbar").removeClass("fixedToTop");
  // }
}

