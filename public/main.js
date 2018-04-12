$(document).ready(function() {
  $(".categoryPicture").click(function(event) {
    // console.log("Made it");
    var cat = event.target.id;
    console.log(cat);
    var url = "/getcategory?cat="+cat;
    console.log(url);

    $.ajax({
      type: "GET",
      url: url,
      // success: function(result)
      // {
      //   console.log(result);
      // }
    });

  });
});
