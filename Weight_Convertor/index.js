let input=document.getElementById('innum');
let upperselect=document.getElementById('upper');
let convert=document.getElementById('convert');
let output=document.getElementById('otnum');
let belowselect=document.getElementById('below');
const result=input.value*1000;
console.log(result);
console.log(upperselect.value);
 convert.addEventListener('click', conversion);

 function conversion(e){
    if(upperselect.value==belowselect.value){
        output.value=input.value;
        } 
    if((upperselect.value=="Kilograms")&&(belowselect.value=="Grams"))
     {
         const result=input.value*1000;
         output.value=result;
    }
     else if((upperselect.value=="Grams")&&(belowselect.value=="Kilograms"))
     {
         const result=input.value/1000;
         output.value=result;
    }
    if((upperselect.value=="Kilograms")&&(belowselect.value=="Pounds"))
     {
         const result=input.value*2.20462;
         output.value=result;
    }
     else if((upperselect.value=="Pounds")&&(belowselect.value=="Kilograms"))
     {
         const result=input.value/2.20462;
         output.value=result;
    }
    if((upperselect.value=="Pounds")&&(belowselect.value=="Grams"))
     {
         const result=input.value*453.592;
         output.value=result;
    }
     else if((upperselect.value=="Grams")&&(belowselect.value=="Pounds"))
     {
         const result=input.value/453.592;
         output.value=result;
    }
}
