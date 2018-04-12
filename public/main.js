$(document).ready(function() {
  $(".categoryPicture").click(function(event) {
    var cat = event.target.id;
    console.log(cat);
    var url = "/getcategory?cat="+cat;

    $.ajax({
      type: "GET",
      url: url,
      success: function(result)
      {
        console.log(result);
      }
    });
  }
}
