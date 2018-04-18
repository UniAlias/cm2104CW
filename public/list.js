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
        var output ="<h2>" + result[0].category + "</h2><div class='panel-group'>";
        for (var i in result) {
          output += "<div class='panel panel-default'><div class='panel-heading'>" + result[i].name + "</div><div class='panel-body'><article><img class='thumbnail'";
          output += "src='placeholderImage.png' alt='Placeholder Image'><div class='item-desc'>" + result[i].description + "</div></article></div></div>";
        }
        output += "</div>";
        divToFill.html(output);
      }
    });

  });
