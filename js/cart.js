var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
const decreaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
console.log( itemprice.innerHTML);

// console.log(itemval.value);

if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
itemval.style.background = '#fff';
itemval.style.color = '#000';
itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 1999;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 1999;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}
const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);

// console.log(itemval.value);

if(itemval.value >= 5){
itemval.value = 5;
alert('max 5 allowed');
itemval.style.background = 'red';
itemval.style.color = '#fff';
}else{
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 1999;
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 1999;
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}



// For Second Cart Item //

const decreaseNumber1 = (incdec, itemprice) => {
  var itemval1 = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  console.log( itemprice.innerHTML);




if(itemval1.value <= 0){
  itemval1.value = 0;
  alert('Negative quantity not allowed');
  }else{
  itemval1.value = parseInt(itemval1.value) - 1;
  itemval1.style.background = '#fff';
  itemval1.style.color = '#000';
  itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 1199;
  product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 1199;
  total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }}
  
  const increaseNumber1 = (incdec, itemprice) => {
  var itemval1 = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  
  // console.log(itemval1.value);
  
  if(itemval1.value >= 5){
  itemval1.value = 5;
  alert('max 5 allowed');
  itemval1.style.background = 'red';
  itemval1.style.color = '#fff';
  }else{
  itemval1.value = parseInt(itemval1.value) + 1;
  itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 1199;
  product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 1199;
  total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }}