const inputbox=document.getElementById("inp");
const liscon=document.getElementById("lis");

function addtask(){
    if (inputbox.value==''){
        alert("You must enter a task...");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        liscon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    savedata()

}

liscon.addEventListener("click",function(a){
    if(a.target.tagName==="LI"){
        a.target.classList.toggle("check");
        savedata()
    }
    else if(a.target.tagName==="SPAN"){
        a.target.parentElement.remove();
        savedata()
    }


})

function savedata(){
    localStorage.setItem("data",liscon.innerHTML);

}

function showlis(){
    liscon.innerHTML=localStorage.getItem("data");
}
showlis();