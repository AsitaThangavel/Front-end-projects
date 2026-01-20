var p=document.getElementById("pass");
var t=document.getElementById("message");
var s=document.getElementById("stren");

p.addEventListener('input',()=>{
    if (p.value.length >0){
        t.style.display="block";
    }else{
        t.style.display="none";}

        
    if(p.value.length <4){
        s.innerHTML="weak";
        p.style.border="3px solid #eb8a44";

    }else if(p.value.length >4 && p.value.length<8){
        s.innerHTML="medium";
        t.style.color="#f9dc24";
        p.style.border="3px solid #f9dc24";
    }else if(p.value.length>8){
        s.innerHTML="strong";
        t.style.color="#8eba43";
        p.style.border="3px solid #8eba43";
    }
})




