$(document).ready(function() {

  $(".categoryPicture").click(function(event) {


    // console.log("Made it");
    var cat = event.target.id;
    console.log(cat);

    window.location.href = "/list?cat="+cat;


  });
});
