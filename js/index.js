// create number
function generatePin(){
    const random=Math.random()*10000
    const round=Math.round(random)
    return round
}
function fixedPin(){
   const pin= generatePin()
   const pinString=pin+""
   if(pinString.length===4){
    return pin
   }
   else{
    return fixedPin()
   }

}

// set number in input field 

document.getElementById("generate-btn").addEventListener('click', function(){
 const updatePin=fixedPin()
 const input=document.getElementById("generate-input")
 input.value=updatePin
})

// clear input field 

document.getElementById("generate-input").addEventListener("dblclick",  function(){
document.getElementById("generate-input").value=""

})

//  show number input field by click number button

document.getElementById("calculator").addEventListener("click", function(event){
    const number=event.target.innerText
    const numberInput=document.getElementById("number-input")
    const currentNumber= numberInput.value
    if(isNaN(number)){
      if(number==="C"){
        numberInput.value=""
      }
     else if(number==="<"){
       const split=currentNumber.split("")
       split.pop()
       const remaining=split.join("")
       numberInput.value=remaining
     }
    }
    else{
        
        
        const newNumber= currentNumber+number
      numberInput.value=newNumber
    }
})

//  clear input field option 2

// document.getElementById("to-clear").addEventListener("click", function(){
//     document.getElementById("number-input").value=""
// })

// submit 
document.getElementById("submit-btn").addEventListener("click",function(){
    const generate=document.getElementById("generate-input");
    const generateValue=generate.value
    const number=document.getElementById("number-input");
    const numberValue=number.value
    const pMessage= document.getElementById("positive");
    const nMessage = document.getElementById("error");
    if( generateValue===numberValue){
    // const pinMatch=document.getElementById("review");
    //  const p=document.createElement("p")
    //  p.innerText="✅ Pin Matched... Secret door is opening for you"
    //  pinMatch.appendChild(p)
   
    pMessage.style.display="block"   ;
    nMessage.style.display="none";
    }

   else{
    // const pinMatch=document.getElementById("review");
    // const p=document.createElement("p")
    // p.innerText="❌ Pin Didn't Match, Please try again"
    // pinMatch.appendChild(p)
    
    nMessage.style.display="block";
    pMessage.style.display="none";
   }
})

