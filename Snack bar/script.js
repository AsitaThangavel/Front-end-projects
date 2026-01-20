let toastbox=document.getElementById("toastbox");

let sm="✅ Successfully Submitted";
let em="🚫 Please fix the Error";

let im="⁉️ Invalid input,check again";


function showtoast(x){
    let toast=document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML=x;
    toastbox.appendChild(toast);

    if (x.includes("Error")){
        toast.classList.add("Error");
    }
    if (x.includes("Invalid")){
        toast.classList.add("Invalid");
    }
    setTimeout(()=>{
        toast.remove();
    },6000);
}
