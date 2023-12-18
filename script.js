const inputBox=document.querySelector("#box");
const listContainer=document.querySelector("#list-container");

function newTask(){
    if(inputBox.value === ''){
        alert("Please enter your task!");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let editButton = document.createElement("span");
        editButton.className="edit"
        editButton.innerHTML = "\u270E";
        li.appendChild(editButton);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value='';
    saveTask()
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
     else if(e.target.className==='edit'){
        e.target.parentElement.textContent=inputBox.value
        saveTask()
    }
},false); 
function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()