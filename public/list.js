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
        var divToFill = $('.container');
        var output = "";
        for (var i in result) {
          output += "<p>" + result[i].name + "</p>";
        }
        divToFill.html(output);
      }
    });

  });
