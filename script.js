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
const apply=document.getElementById("apply");
const coupon=document.getElementById("coupon-code");
let sum=0;
let totalPrice=document.getElementById("total-price");
let grandTotal=document.getElementById("grand-total");
let disc=document.getElementById("discount");
const email=document.getElementById("email");
const name=document.getElementById("name");
const number=document.getElementById("number");
let count=0;
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
        seatAvailable.innerText=seatAv;
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
        count++;
        
        
        for (let money of totalMoney.children){
            sum=550*count;
            console.log(sum);
        }
        totalPrice.innerText=sum;
        const disc=grandTotal*0.15;
        let grandPrice=grandTotal.innerText.toLowerCase();
        grandTotal.innerText=sum;
    
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
    document.getElementById("buyTicket").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
}
function previus(){
    document.getElementById("buyTicket").classList.remove("hidden");
    document.getElementById("success").classList.add("hidden");
}


