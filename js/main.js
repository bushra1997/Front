$(document).ready(function () {
  $(".click1").click(function () {
    $("#description1").fadeIn(2000);
    $("#description2").hide();
    $("#description3").hide();
    $(this).addClass("active");
    $(".click2").removeClass("active");
    $(".click3").removeClass("active");
    $(".blue-industry").hide();
    $(".white-industry").show();
    $(".blue-hospital").show();
    $(".white-hospital").hide();
    $(".blue-drug").show();
    $(".white-drug").hide();
  });
  $(".click2").click(function () {
    $("#description1").hide();
    $("#description2").fadeIn(2000);
    $("#description3").hide();
    $(this).addClass("active");
    $(".click1").removeClass("active");
    $(".click3").removeClass("active");
    $(".blue-industry").show();
    $(".white-industry").hide();
    $(".blue-hospital").hide();
    $(".white-hospital").show();
    $(".blue-drug").show();
    $(".white-drug").hide();
  });
  $(".click3").click(function () {
    $("#description1").hide();
    $("#description2").hide();
    $("#description3").fadeIn(2000);
    $(this).addClass("active");
    $(".click1").removeClass("active");
    $(".click2").removeClass("active");
    $(".blue-industry").show();
    $(".white-industry").hide();
    $(".blue-hospital").show();
    $(".white-hospital").hide();
    $(".blue-drug").hide();
    $(".white-drug").show();
  });
  $(".click4").click(function () {
    $("#description4").fadeIn(2000);
    $("#description5").hide();
    $("#description6").hide();
    $(this).addClass("active");
    $(".click5").removeClass("active");
    $(".click6").removeClass("active");
    $(".white-news").show();
    $(".blue-news").hide();
    $(".blue-training").show();
    $(".white-training").hide();
    $(".white-insight").hide();
    $(".blue-insight").show();
  });
  $(".click5").click(function () {
    $("#description5").fadeIn(2000);
    $("#description4").hide();
    $("#description6").hide();
    $(this).addClass("active");
    $(".click4").removeClass("active");
    $(".click6").removeClass("active");
    $(".white-news").hide();
    $(".blue-news").show();
    $(".blue-training").hide();
    $(".white-training").show();
    $(".white-insight").hide();
    $(".blue-insight").show();
  });
  $(".click6").click(function () {
    $("#description6").fadeIn(2000);
    $("#description4").hide();
    $("#description5").hide();
    $(this).addClass("active");
    $(".click4").removeClass("active");
    $(".click5").removeClass("active");
    $(".white-news").hide();
    $(".blue-news").show();
    $(".blue-training").show();
    $(".white-training").hide();
    $(".white-insight").show();
    $(".blue-insight").hide();
  });

  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
  });
});
