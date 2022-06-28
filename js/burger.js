$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function myFunctionMain() {
    let x = document.getElementById("main");
    let y = document.getElementById("footer");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  }

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
    } else {
      $('.nav').removeClass('affix');
    }
  });