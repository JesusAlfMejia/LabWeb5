addButton = document.getElementsByClassName("container")[0];
inputText = document.getElementById("inputText");
productList = document.getElementById("productList");

addButton.addEventListener("submit", addItem);

function addItem(event){
    event.preventDefault();

    const newLi = document.createElement("li");

    if(inputText.value.trim() != ""){
        newLi.innerHTML = `
            <div class = "box">
                <div class="productName">${inputText.value}</div>
                <button class="checkBtn" onclick="doButton(this)">
                    check
                </button>
                <button class="deleteBtn" onclick="doButton(this)">
                    delete
                </button>
            </div>`

        productList.appendChild(newLi);
    }
}

function doButton(btn){
    if(btn.className == "checkBtn"){
        const productText = btn.parentNode.childNodes[1];
        if(productText.style.textDecoration == "line-through"){
            productText.style.textDecoration = "";
        }else{
            productText.style.textDecoration = "line-through"
        }
    }else if(btn.className == "deleteBtn"){
        productList.removeChild(btn.parentNode.parentNode)
    }
}

