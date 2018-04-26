$(document).ready(function() {

    var url = "/getcategory?cat="+cat;
    console.log(url);
    // This calls the database like an api, getting the information from each item within the category that was passed through from the categoriespage
    $.ajax({
      type: "GET",
      url: url,
      success: function(result)
      {
        console.log(result);
        //window.location.assign("/list");
        var divToFill = $('.container');
        var output ="<h2 class='categoryTitle'>" + result[0].category + "</h2><div class='panel-group'>";
        // This bit builds the string that forms the html of the page that we want to dynamically fill. It gets the name of each software item, as well as the image directory, description and link
        for (var i in result) {
          output += "<div class='panel panel-default'><div class='panel-heading'>" + result[i].name + "</div><div class='panel-body'><article><img class='thumbnail'";
          output += "src='" + result[i].img_url + ".jpg' alt='Placeholder Image'><div class='item-desc'>" + result[i].description + "<a href='" + result[i].url_link + "'>Download here.</a></div></article></div></div>";
        }
        output += "</div>";
        divToFill.html(output);
      }
    });

  });
