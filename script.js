const seats=document.getElementsByClassName("seat");
const ul1=document.getElementById("ul1");
const ul2=document.getElementById("ul2");
const ul3=document.getElementById("ul3");
let totalMoney=document.getElementById("ul3");
let chooseSeat=0;
let seatAvailable=document.getElementById("seat-avail");
let seatAv=parseInt(seatAvailable.innerText);
let sit=document.getElementById("seat-select");
let seatSelect=parseInt(sit.innerText);
console.log(seatSelect);
console.log(seatAv);
const apply=document.getElementById("apply");
const coupon=document.getElementById("coupon-code");
let sum=0;
let totalPrice=document.getElementById("total-price");
let grandTotal=document.getElementById("grand-total");
let disc=document.getElementById("discount");
for (const seat of seats){
    seat.addEventListener("click", function(){
        chooseSeat++;
        if (chooseSeat > 4){
            alert("you can't choose more than 4 seat");
        }
       else{
        seatSelect++;
        sit.innerText=seatSelect;
        seatAv--;
        console.log(seatAv);
        seatAvailable.innerText=seatAv;
        console.log(seat.innerText);
        seat.style.backgroundColor ="green";
        let li=document.createElement("li");
        li.innerText=seat.innerText;
        let li1=document.createElement("li");
        let li2=document.createElement("li");
        li1.innerText="Economy";
        li2.innerText=550;
        let money=parseInt(li2.innerText);
        ul1.appendChild(li);
        ul2.appendChild(li1);
        ul3.appendChild(li2); 
        for (let money of totalMoney.children){
            console.log(money.innerText);
            let amount =parseInt(money.innerText);
            console.log(typeof amount);
            sum += amount;
            console.log(sum);
        }
        totalPrice.innerText=sum;
        const disc=grandTotal*0.15;
        let grandPrice=grandTotal.innerText.toLowerCase();
    
       }
       
       const code=coupon.value.toLowerCase();
       apply.addEventListener("click",function(){
        if (code==="new15"){
            grandTotal.innerText=sum*0.85;
            disc.innerText="Discount : "+sum*0.15;
            

        }
        else if(code==="couple20"){
            grandTotal.innerText=sum*0.80;
            disc.innerText="Discount : "+sum*0.20;
        }
        else{
            grandTotal.innerText=sum;
            disc.innerText="Discount : "+sum*0;
            
        }
                
                console.log(grandTotal.innerText);
            })
        // if (code==="new15"){
        //     apply.addEventListener("click",function(){
        //         grandTotal.innerText=sum*0.85;
        //         console.log(grandTotal.innerText);
        //     })
        //     console.log("matching1")
            
        // }
        // else if(code==="couple20"){
        //     console.log("matching2");
        //     apply.addEventListener("click",function(){
        //         grandTotal.innerText=sum*0.80;

        // })
        // }
        // else{
        //     console.log("no match")
        //     apply.addEventListener("click",function(){
        //         grandTotal.innerText=sum;
        //         console.log(grandTotal.innerText);
        //     })
        // }
       
    })
}
function next(){
    document.getElementById("selling").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
}
function previus(){
    document.getElementById("selling").classList.remove("hidden");
    document.getElementById("success").classList.add("hidden");
}


