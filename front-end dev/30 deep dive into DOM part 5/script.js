let inventory = JSON.parse(localStorage.getItem("inventory")) || []

const form = document.getElementById("productForm")
const allData = document.querySelector(".all-data")

let editIndex = null


function saveToLocal(){
localStorage.setItem("inventory", JSON.stringify(inventory))
}


function printData(){

let sum = ""

inventory.forEach((item, index)=>{

sum += `
<div class="item">

<h3>${item.productName}</h3>

<h4>Category : <span>${item.category}</span></h4>

<h4>Price : ₹${item.price}</h4>

<h4>Stock : ${item.quantity}</h4>

<h4>Expiry : ${item.expiry}</h4>

<h4>Supplier : ${item.supplier}</h4>

<div>
<button onclick="editProduct(${index})">Edit</button>
<button onclick="deleteProduct(${index})">Remove</button>
</div>

</div>
`

})

allData.innerHTML = sum

}


form.addEventListener("submit",(e)=>{

e.preventDefault()

let product = {

productName: document.getElementById("name").value,
category: document.getElementById("category").value,
price: document.getElementById("price").value,
quantity: document.getElementById("quantity").value,
expiry: document.getElementById("expiry").value,
supplier: document.getElementById("supplier").value

}

if(editIndex === null){

inventory.push(product)

}else{

inventory[editIndex] = product
editIndex = null

}

saveToLocal()

form.reset()

printData()

})


function deleteProduct(index){

inventory.splice(index,1)

saveToLocal()

printData()

}


function editProduct(index){

let product = inventory[index]

document.getElementById("name").value = product.productName
document.getElementById("category").value = product.category
document.getElementById("price").value = product.price
document.getElementById("quantity").value = product.quantity
document.getElementById("expiry").value = product.expiry
document.getElementById("supplier").value = product.supplier

editIndex = index

}


printData()