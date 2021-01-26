const moku=document.createElement("div");
const btn = document.createElement("BUTTON");
moku.setAttribute("id", "moku");
moku.innerText="Valio pavyko";
moku.classList.add("dizainas");
btn.innerText="spaudaliukas";
document.body.append(moku);
document.body.append(btn);

btn.addEventListener("click", function(){
    this.classList.add("hide");
    moku.classList.add("hide");
})
