const container = document.getElementById("container");
const toDoListUlAddInput = document.createElement("input");
toDoListUlAddInput.setAttribute("type", "text");
toDoListUlAddInput.setAttribute("placeholder", "Add new to do");
toDoListUlAddInput.setAttribute("id", "input_for_add_to_do");
toDoListUlAddInput.setAttribute("class", "form-control");
const addToDoSomethingBtn = document.createElement("button");
addToDoSomethingBtn.setAttribute("class", "btn btn-success");
addToDoSomethingBtn.setAttribute("id", "add_btn");
addToDoSomethingBtn.innerText = "Add";
const inputAndBtnBlock = document.createElement("div");
inputAndBtnBlock.setAttribute("class", "input_and_btn_block");
container.appendChild(inputAndBtnBlock);
inputAndBtnBlock.appendChild(toDoListUlAddInput);
inputAndBtnBlock.appendChild(addToDoSomethingBtn);

const listOfDoingSection = document.createElement("div");
listOfDoingSection.setAttribute("class", "list_of_to_do");
container.appendChild(listOfDoingSection);

const toDoListUl = document.createElement("ul");
toDoListUl.setAttribute("class", "list-group");
listOfDoingSection.appendChild(toDoListUl);

addToDoSomethingBtn.addEventListener("click", addNewWorkOnDataList);

function addNewWorkOnDataList() {
    let value = toDoListUlAddInput.value;
    let ulChildLi = document.createElement("li");
    ulChildLi.setAttribute("class", "list-group-item");
    ulChildLi.addEventListener("click", checkedWork);

    let checkContainer = document.createElement("div");
    checkContainer.setAttribute("class", "check_container");

    let checkBtn = document.createElement("button");
    checkBtn.setAttribute("class", "check_btn");

    let checkIcon = document.createElement("i");
    checkIcon.setAttribute("class", "fas fa-minus-circle");

    let toDoListText = document.createElement("span");
    toDoListText.setAttribute("class", "to_do_text");

    checkBtn.appendChild(checkIcon);
    checkContainer.appendChild(checkBtn);
    checkContainer.appendChild(toDoListText);

    ulChildLi.appendChild(checkContainer);

    let trashBtn = document.createElement("button");
    trashBtn.setAttribute("class", "trash_btn");
    trashBtn.addEventListener("click", removeFromList);

    const trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fas fa-trash-alt");

    toDoListText.innerHTML = value;
    trashBtn.appendChild(trashIcon);
    ulChildLi.appendChild(trashBtn);
    toDoListUl.appendChild(ulChildLi);
    toDoListUlAddInput.value = "";
}

function removeFromList() {
    let thisListItem = this.parentElement;
    thisListItem.remove();
}

function checkedWork() {
    let textDecorateThrow = this.firstChild.lastChild;
    let thisCheckBtn = this.firstChild.childNodes[0];
    let thisTrashBtn = this.lastChild.childNodes[0];
    let checkIcon = thisCheckBtn.lastChild;
    if (this.classList.contains("active_list") &&
        thisCheckBtn.classList.contains("white_color") &&
        thisTrashBtn.classList.contains("white_color") &&
        checkIcon.classList.contains("fa-check-circle")
    ){
        this.classList.remove("active_list");
        textDecorateThrow.style.textDecoration = "none";
        thisCheckBtn.classList.remove("white_color");
        thisTrashBtn.classList.remove("white_color");
        checkIcon.classList = "fas fa-minus-circle";


    }else {
        this.classList.add("active_list");
        textDecorateThrow.style.textDecoration = "line-through";
        thisCheckBtn.classList.add("white_color");
        thisTrashBtn.classList.add("white_color");
        checkIcon.classList = "far fa-check-circle";
    }
}

