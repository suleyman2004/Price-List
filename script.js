let first_price=document.getElementById("first")
let second_price=document.getElementById("second")
let third_price=document.getElementById("third")
let fourth_price=document.getElementById("fourth")
let first_button=document.getElementById("button_first")
let second_button=document.getElementById("button_second")
let third_button=document.getElementById("button_third")
let fourth_button=document.getElementById("button_fourth")

function first(){
    first_price.style.display="block"
    second_price.style.display="none"
    third_price.style.display="none"
    fourth_price.style.display="none"
    first_button.style.backgroundColor="black"
    first_button.style.borderColor="black"
    second_button.style.backgroundColor="rgb(182, 180, 180)"
    second_button.style.borderColor="rgb(182, 180, 180)"
    third_button.style.backgroundColor="rgb(182, 180, 180)"
    third_button.style.borderColor="rgb(182, 180, 180)"
    fourth_button.style.backgroundColor="rgb(182, 180, 180)"
    fourth_button.style.borderColor="rgb(182, 180, 180)"
}
function second(){
    first_price.style.display="none"
    second_price.style.display="block"
    third_price.style.display="none"
    fourth_price.style.display="none"
    second_button.style.backgroundColor="black"
    second_button.style.borderColor="black"
    first_button.style.backgroundColor="rgb(182, 180, 180)"
    first_button.style.borderColor="rgb(182, 180, 180)"
    third_button.style.backgroundColor="rgb(182, 180, 180)"
    third_button.style.borderColor="rgb(182, 180, 180)"
    fourth_button.style.backgroundColor="rgb(182, 180, 180)"
    fourth_button.style.borderColor="rgb(182, 180, 180)"
}
function third(){
    first_price.style.display="none"
    second_price.style.display="none"
    third_price.style.display="block"
    fourth_price.style.display="none"
    third_button.style.backgroundColor="black"
    third_button.style.borderColor="black"
    second_button.style.backgroundColor="rgb(182, 180, 180)"
    second_button.style.borderColor="rgb(182, 180, 180)"
    first_button.style.backgroundColor="rgb(182, 180, 180)"
    first_button.style.borderColor="rgb(182, 180, 180)"
    fourth_button.style.backgroundColor="rgb(182, 180, 180)"
    fourth_button.style.borderColor="rgb(182, 180, 180)"
}
function fourth(){
    first_price.style.display="none"
    second_price.style.display="none"
    third_price.style.display="none"
    fourth_price.style.display="block"
    fourth_button.style.backgroundColor="black"
    fourth_button.style.borderColor="black"
    second_button.style.backgroundColor="rgb(182, 180, 180)"
    second_button.style.borderColor="rgb(182, 180, 180)"
    third_button.style.backgroundColor="rgb(182, 180, 180)"
    third_button.style.borderColor="rgb(182, 180, 180)"
    first_button.style.backgroundColor="rgb(182, 180, 180)"
    first_button.style.borderColor="rgb(182, 180, 180)"
}