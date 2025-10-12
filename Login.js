const p=document.querySelector("#pw");
const p1=document.querySelector("#pw1");
const b=document.querySelector("#bn");
const b1=document.querySelector("#bn1");
var show=true;
const Showpassword=()=>{
  if(show){
    p.type="text";
    p1.type="text";
    b.innerHTML="Hide Password";
    b1.innerHTML="Hide Password";
  }
  else{
    p.type="password";
    p1.type="password";
    b.innerHTML="Show Password";
    b1.innerHTML="Show Password";
  }
  show=!show;
};
b.addEventListener("click",Showpassword);

const untext=document.querySelector("#un");
const pass=document.querySelector("#pw");
const btn=document.querySelector("#btn");
const submitcode=(e)=>{
  var namelen=untext.value.length
  if(namelen==0){
    alert("Name is Empty");
    e.preventDefault();
  }
  else if(namelen<3){
    alert("min 3 chars");
    e.preventDefault();
  }
  else if(namelen>10){
    alert("max 10 chars");
    e.preventDefault();
  }
  var pwlen=pass.value.length
  if(pwlen==0){
    alert("Password is Empty");
    e.preventDefault();
  }
  else if(pwlen<8){
    alert("Min 8 chars");
    e.preventDefault();
  }
  else if(pwlen>12){
    alert("Max 12 chars");
    e.preventDefault();
  }
}
btn.addEventListener("click",submitcode);