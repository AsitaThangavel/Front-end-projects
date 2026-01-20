let passwd=document.getElementById("passwd");

const length=12;

let copies=document.getElementById("copies");

let gen=document.getElementById("gen");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const spec="!@#$%^&*_+:?/|\;.<>,{}[]()";

const allchar=upperCase+lowercase+num+spec;

function genpass(){
    let newpass="";
    newpass+=upperCase[Math.floor(Math.random()*upperCase.length)];
    newpass+=lowercase[Math.floor(Math.random()*lowercase.length)];

    newpass+=num[Math.floor(Math.random()*num.length)];
// this Math.floor(Math.random()*spec.length) will generate intergers from 0 to length-1;
    newpass+=spec[Math.floor(Math.random()*spec.length)];

    while(length>newpass.length){
        newpass+=allchar[Math.floor(Math.random()*allchar.length)];

    }
    passwd.value=newpass;

}
 function copying(){
    if (passwd.value==""){
        alert("Generate the Password");
    }else{
        passwd.select();
        document.execCommand("copy");
        alert("Password Copied");

    }
    
 }


