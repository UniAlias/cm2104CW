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
    newElement.innerHTML = "<div class='addedDiv'><img src='computer-background-design_1300-36.jpg' alt='' class='categoryPicture'><h3 class='category-heading'>" + categoryName + "</h3></div>";
    parent.appendChild(newElement);
}
