let userinput=document.getElementById("userinput");
let gen=document.getElementById("gen");

let box=document.getElementById("box");
let qrimg=document.getElementById("qrimg");


function generate(){
    if (userinput.value==""){
        alert("Enter Text or URL");
    }else{
        qrimg.src=""+userinput.value;
        
    }
    

}

