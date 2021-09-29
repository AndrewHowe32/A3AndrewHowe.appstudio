let products = ["Crocheted Dog Toy $10.00", "Slow Feeder Bowl $14.00", "Pawz Grey Treat Jar $20.00", "Blue Sweet Dreams Thermal Pajamas $30.00", "Checker Chewy Vuiton Bowl $32.00", "Red Heart Sweater Dress $27.00",
"Velvet Hair Bow - Sun Kissed $12.00", "Into the Wild Leash, $27.00"]

btnProducts.onclick=function(){
let show = lblPrice.value
lblPrice.value = products
}

let wish = []

btnAddWish.onclick=function(){
let newAdd = inptWish.value
wish.push(inptWish.value)
lblWish.value = wish
}