const inputBox=document.querySelector("#box");
const listContainer=document.querySelector("#list-container");

function newTask(){
    if(inputBox.value === ''){
        alert("Please enter your task!");
    }
    else{
        let li=document.createElement("li")
        let listText=document.createElement("p")
       
        listText.innerHTML=inputBox.value
        listText.classList.add("editable","customPara")
        li.appendChild(listText)

        //create edit button
        let editButton = document.createElement("span");
        editButton.className="edit"
        editButton.innerHTML = "\u270E";
        li.appendChild(editButton);

        //create delete button
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        span.className="deleteBtn"
        li.appendChild(span)

        listContainer.appendChild(li)
    }
    inputBox.value='';
    saveTask()
}

listContainer.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask()
    }

    else if(e.target.className==="deleteBtn"){
        e.target.parentElement.remove();
        saveTask()
    } 

    else if(e.target.className==="edit"){
        let listItem=e.target.parentElement
        let listText=listItem.querySelector(".editable")

       listText.contentEditable=!listText.isContentEditable
        if(listText.contentEditable){
            e.target.innerText="save"
          
            e.target.style.fontSize='12px'
            listText.focus()
        }
        else{
            saveTask()
            e.target.innerText = "\u270E"
            
        }
    }      
},false); 


function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()
