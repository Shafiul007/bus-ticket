const seats=document.getElementsByClassName("seat");
const ul1=document.getElementById("ul1");
const ul2=document.getElementById("ul2");
const ul3=document.getElementById("ul3");
let totalMoney=document.getElementById("ul3");
let chooseSeat=0;
for (const seat of seats){
    seat.addEventListener("click", function(){
        chooseSeat++;
        if (chooseSeat > 4){
            alert("you can't choose more than 4 seat");
        }
       else{
        console.log(seat.innerText);
        seat.style.backgroundColor ="green";
        let li=document.createElement("li");
        li.innerText=seat.innerText;
        let li1=document.createElement("li");
        let li2=document.createElement("li");
        li1.innerText="Economic";
        li2.innerText=550;
        let money=parseInt(li2.innerText);
        ul1.appendChild(li);
        ul2.appendChild(li1);
        ul3.appendChild(li2);
        let totalPrice=document.getElementById("total-price");
        let sum=0;
        for (let money of totalMoney.children){
            console.log(money.innerText);
            let amount =parseInt(money.innerText);
            console.log(typeof amount);
            sum += amount;
            console.log(sum);
        }
        totalPrice.innerText=sum;
       }
    })
}

