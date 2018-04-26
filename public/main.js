$(document).ready(function() {
  // This is the function that is activated when one of the pictures on the categories page is clicked
  $(".categoryPicture").click(function(event) {


    // console.log("Made it");
    // The category is taken from the id of each of the images. The id's are hard coded so that accessing the information was easier
    var cat = event.target.id;
    console.log(cat);

    // This redirects to the list page, passing through the category title
    window.location.href = "/list?cat="+cat;


  });
});
