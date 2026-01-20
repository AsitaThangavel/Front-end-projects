let x=document.getElementById("items");

var s=document.getElementById("sel");

var opt=document.querySelectorAll(".options");

for(option of opt){
    option.onclick=function(){
        s.innerHTML=this.textContent;
    }
}

function option_view() {
    const list = document.querySelector(".lis");
    list.style.display = (list.style.display === "none" || list.style.display === "") ? "block" : "none";
}
