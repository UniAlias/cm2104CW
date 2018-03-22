$(document).ready(function () {
  $('.divButton').onclick(function() {
    $(this).parent().hide();
  });
});



$('.addeddiv').mouseenter(function() {
  $(this).children().show();
});

$('.addeddiv').mouseleave(function() {
  $(this).find("button").hide();
});

$('.divButton').onclick(function() {
  $(this).parent().hide();
});
