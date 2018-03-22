function addCategory() {
  var categoryName = document.getElementById('addbox').value;
  var currentCategories = document.getElementById('expandableId').innerHTML;

  document.getElementById('expandableId').innerHTML = currentCategories + "<div class='addedDiv'><img src='computer-background-design_1300-36.jpg' alt='' class='categoryPicture'><h3 class='category-heading'>" + categoryName + "</h3></div>";
}

function addElement() {
    var categoryName = document.getElementById('addbox').value;
    var parent = document.getElementById('expandableId');
    var newElement = document.createElement('div');
    newElement.setAtrribute('id', 'new1');
<<<<<<< HEAD
    newElement.innerHTML = "<div class='addedDiv'><img src='computer-background-design_1300-36.jpg' alt='' class='categoryPicture'><h3 class='category-heading'>" + categoryName + "</h3></div>";
    parent.appendChild(newElement);
}
=======
    newElement.innerHTML = "<div class='addedDiv'><div class='divButton'><button type='button' name='button'></div><img src='computer-background-design_1300-36.jpg' alt='' class='categoryPicture'><h3 class='category-heading'>" + categoryName + "</h3></div>";
    parent.appendChild(newElement);
}



$(document).ready(function () {
    $(document).on('mouseenter', '.addedDiv', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.addedDiv', function () {
        $(this).find(":button").hide();
    });
});
>>>>>>> 7727026d746306834cb7cc8321205e695f98fa85
