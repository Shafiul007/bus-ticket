const seats=document.getElementsByClassName("seat");
for (const seat of seats){
    seat.addEventListener("click", function(){
        console.log(seat.innerText);
        seat.style.backgroundColor ="green";
    })
}