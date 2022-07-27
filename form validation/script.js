
   function sub1(){
   document.getElementById('a1').value=
   document.getElementById('a').value;
   document.getElementById('b1').value=
   document.getElementById('b').value;
  document.getElementById('c1').value=
   document.getElementById('c').value;
   document.getElementById('d1').value=
  document.getElementById('d').value;

        let btnclear=document.querySelector('#clear');
    let inputs=document.querySelectorAll('#a,#b,#c,#d');

     btnclear.addEventListener('click',() =>{
         inputs.forEach(input => input.value  = '' )
     });
     
 } 

// function validation_1()
// {
//     var email=document.getElementById("c").value;
//     var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

// }
const inputs =document.querySelectorAll('input');

const patterns = {
    telephone:/^\d{10}$/,
    Firstname:/^[a-zA-Z]{1,20}$/,
    Lastname:/^[a-zA-Z]{1,20}$/,
    Email: /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
};

//validate function
 function validate(field,regex){
 //console.log(regex.test(field.value));
 if(regex.test(field.value)){
     field.className='valid';
 }
//  }else if(regex.test!=(field.value)){
//     field.className ='invalid';
 
 else{
    field.className ='invalid';
 }
 }

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target,patterns[e.target.attributes.name.value])
    });
});
