let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";

    delBtn.classList.add("button");
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(delBtn)
    inp.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listPar = event.target.parentElement;
        listPar.remove();
        console.log("deleted");
    }
})

