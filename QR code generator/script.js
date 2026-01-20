let userinput=document.getElementById("userinput");
let gen=document.getElementById("gen");

let box=document.getElementById("box");
let qrimg=document.getElementById("qrimg");


function generate(){
    if (userinput.value==""){
        alert("Enter Text or URL");
    }else{
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userinput.value;
        
    }
    

}

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example