let icon=document.getElementById("eye");
let passwd=document.getElementById("pass");

icon.onclick=function(){
    if(passwd.type=="password"){
        passwd.type="text";
        icon.src="eye-open.png";
    }else{
        passwd.type="password";
        icon.src="eye-close.png";
    }
}