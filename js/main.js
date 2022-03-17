var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBtn");
var productContainer;

if (localStorage.getItem("products") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("products"));
    displayProduct(productContainer);
}
var updateIndex;
function addProduct() {

    products = {
        pName: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    if (mainBtn.innerHTML = "Update Product") 
    {
        productContainer.splice(updateIndex,1,products)

    }
    else 
    {
        productContainer.push(products);

    }
    localStorage.setItem("products", JSON.stringify(productContainer));
    displayProduct(productContainer);
    clearProduct()
}

function displayProduct(productList) {
    var box = ``;
    for (var i = 0; i < productList.length; i++) {
        box +=
            `<tr>
            <td>${i}</td>
            <td>${productList[i].pName}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <!--<i class="far fa-edit"></i>--->
            <td><button onclick="updateProduct(${i})"  class="btn btn-warning">Update</button></td>
            <!--<i class="far fa-trash-alt"></i>-->
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("tableRow").innerHTML = box;
}

function clearProduct() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProduct(productContainer);
}


function searchProduct(term) {
    var searchProductList = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].pName.toLowerCase().includes(term.toLowerCase()) == true) {
            searchProductList.push(productContainer[i]);
        }
    }
    displayProduct(searchProductList);
}

function updateProduct(index) {
    productNameInput.value = productContainer[index].pName;
    productPriceInput.value = productContainer[index].price;
    productCategoryInput.value = productContainer[index].category;
    productDescInput.value = productContainer[index].desc;
    mainBtn.innerHTML = "Update Product";
    updateIndex=index;
}