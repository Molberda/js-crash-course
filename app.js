let cash = 54
let price = 30
let storeOpen = true
if (cash >= price && storeOpen === true) {
    console.log (`here you go  ${cash - price} dollars in change`)
}

else if (cash === price) {
    console.log ('no change')
}

else {
    console.log ('you still owe ' + (price - cash) + ' please')
}