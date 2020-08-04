// Hide Alert (Success / Danger)
$("#main-alert").hide();
// Global Variables

// Create List Item Lists
function createSaveList() {
	var lisTitle = document.getElementById("listitleinput").value;
	var listBody = document.getElementById("sideMenuList");
	var createList = {
		mainDiv: document.createElement('a'),
		mainDivAttr: mainDiv.setAttribute('class', 'list-group-item list-group-item-action'),
		listTitle: document.getElementById('listitleinput').value,
	}
	if(listTitle === "") {
		 console.log("Wrong!");
		 }
	else {
		createList.mainDiv.appendChild();
}
}


// Create List Item
function createListItems() {
	var identifier = "0123456789";
	var ramdomID = "";
	for (i = 0; i < 4; i++) ramdomID += identifier.charAt(Math.floor(Math.random() * identifier.length));
	//Generar Botones Editar
	var editBtns = {
		editBtn: document.createElement("button"),
		eraseBtn: document.createElement("button"),
	};
	editBtns.editBtn.setAttribute("class", "btn btn-primary");
	editBtns.editBtn.innerText = "Edit";
	editBtns.eraseBtn.setAttribute("class", "btn btn-danger");
	editBtns.eraseBtn.innerText = "Delete";

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
	var itemEraseValue = editBtns.eraseBtn;
	var itemEdit = (itemEditValue);
	var itemErase = (itemEraseValue);
	var containerListItems = document.getElementById("listItemContent");
	var nameItems = [];
	var itemsId = [];
	var totalPrice = [];
	var getTotalPrice = itemPriceValue * itemQuantityValue;
	var getTotalContainer = document.getElementById("totalPrice");
	var sumaPrice = 0;

	if (itemNameValue == '') {
			$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
				$("#main-alert").slideUp(500);
			});
		document.getElementById("main-alert").setAttribute("class", "alert alert-danger text-center")
		document.getElementById("main-alert").innerHTML = "Add at Least an Item"
	}

	else if (itemQuantityValue === "0") {
		$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
			$("#main-alert").slideUp(500);
		});
	document.getElementById("main-alert").setAttribute("class", "alert alert-danger text-center")
	document.getElementById("main-alert").innerHTML = "Select a Number"
	}

	else if (itemPriceValue == '') {
		$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
			$("#main-alert").slideUp(500);
		});
	document.getElementById("main-alert").setAttribute("class", "alert alert-danger text-center")
	document.getElementById("main-alert").innerHTML = "Need to Put a Price"
	}

	else {
					$("#main-alert").fadeTo(2000, 500).slideDown(1000, function () {
				$("#main-alert").slideUp(500);
			});
		document.getElementById("main-alert").setAttribute("class", "alert alert-success text-center")
		document.getElementById("main-alert").innerHTML = "Item Added"

		// Creating Data Listing
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
		tdContentPrice.setAttribute("class", "pricingProduct");
		tdContentEdit.setAttribute("id", "editButtons");
		tdContentEdit.appendChild(itemEdit);
		tdContentEdit.appendChild(itemErase);
		trContainer.appendChild(tdContentEdit);
		nameItems.push(itemNameValue);
		totalPrice.push(getTotalPrice);
		$('.pricingProduct').each(function()
		{
		    sumaPrice += parseFloat($(this).text());
		});
		document.getElementById("totalPrice").innerText = "$" + sumaPrice;
		}
		console.log(sumaPrice);
	}



//Create Lists Menu
var create;
// JQ
$(document).ready(function () {
	$("#searchList").click(function () {
		$("#searchInput").toggleClass("not-shown");
	});
});
