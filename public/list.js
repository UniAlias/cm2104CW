$(document).ready(function() {

    var url = "/getcategory?cat="+cat;
    console.log(url);

    $.ajax({
      type: "GET",
      url: url,
      success: function(result)
      {
        console.log(result);
        //window.location.assign("/list");
        console.log(result);
      }
    });

  });
