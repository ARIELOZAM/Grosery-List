$("#main-alert").hide();

function createListItems() {
	var identifier = "0123456789";
	var ramdomID = "";
	for (i = 0; i < 4; i++) ramdomID += identifier.charAt(Math.floor(Math.random() * identifier.length));
	//Generar Botones Editar
	var editBtns = {
		editBtn: document.createElement("button"),
		eraseBtn: document.createElement("button"),
	}
	var trContainer = document.createElement("tr");
	var thContentId = document.createElement("th");
	var tdContentName = document.createElement("td");
	var tdContentQuantity = document.createElement("td");
	var tdContentPrice = document.createElement("td");
	var tdContentEdit = document.createElement("td");
	var itemIdValue = ramdomID;
	var itemId = document.createTextNode(itemIdValue);
	var itemNameValue = document.getElementById("itemName").value;
	var itemName = document.createTextNode(itemNameValue);
	var itemQuantityValue = document.getElementById("itemQuantity").value;
	var itemQuantity = document.createTextNode(itemQuantityValue);
	var itemPriceValue = document.getElementById("itemPrice").value;
	var itemPrice = document.createTextNode(itemQuantityValue * itemPriceValue);
	var itemEditValue = editBtns.editBtn;
	var itemEdit = (itemEditValue);
	var containerListItems = document.getElementById("listItemContent");


	if (itemNameValue == '' && itemPriceValue == '') {
			$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
				$("#main-alert").slideUp(500);
			});
		document.getElementById("main-alert").setAttribute("class", "alert alert-danger text-center")
		document.getElementById("main-alert").innerHTML = "Add at Least an Item"
	} else {
					$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
				$("#main-alert").slideUp(500);
			});
		document.getElementById("main-alert").setAttribute("class", "alert alert-success text-center")
		document.getElementById("main-alert").innerHTML = "Item Added"
		containerListItems.appendChild(trContainer);
		trContainer.appendChild(thContentId);
		thContentId.setAttribute("scope", "row")
		trContainer.appendChild(thContentId);
		thContentId.appendChild(itemId)
		trContainer.appendChild(tdContentName);
		tdContentName.appendChild(itemName)
		trContainer.appendChild(tdContentQuantity);
		tdContentQuantity.appendChild(itemQuantity)
		trContainer.appendChild(tdContentPrice);
		tdContentPrice.appendChild(itemPrice);
		trContainer.appendChild(tdContentPrice);
		tdContentEdit.appendChild(itemEdit);
		trContainer.appendChild(tdContentEdit);
	}
}

//Create Lists Menu
var create
// JQ
$(document).ready(function () {
	$("#searchList").click(function () {
		$("#searchInput").toggleClass("not-shown");
	});
});