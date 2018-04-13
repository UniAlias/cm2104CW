// This function is accessed when the 'addCategory' button is clicked
function addCategory() {
  var categoryName = document.getElementById('addbox').value;
  var currentCategories = document.getElementById('expandableId').innerHTML;

  document.getElementById('expandableId').innerHTML = currentCategories + "<div class='addedDiv'><div class='divButton'><button class='catbtn' type='button' name='button' onclick='removePlease()'>Remove</button></div><img src='computer-background-design_1300-36.jpg' alt='' class='categoryPicture'><h3 class='category-heading'>" + categoryName + "</h3></div>";

}

//  This is the method that is called when the remove button in each div is clicked
function removePlease() {
  console.log(event);
  console.log("should be working");
    // This commented out code represents what would be used with jquery
    // $(this).parent().parent().hide();
    event.path[2].hidden = true;
}

$(document).ready(function () {
    $(document).on('mouseenter', '.addedDiv', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.addedDiv', function () {
        $(this).find(":button").hide();
    });




//
// $('.catbtn').click(function(){
//   console.log("should be working");
//     $(this).parent().parent().hide();
// });




});
