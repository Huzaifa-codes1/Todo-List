let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let unlist = document.querySelector("#ultodo-list");
let taskCounter = document.querySelector("#para");
let activeBtn = document.querySelector("#active-btn");
let allliBtn = document.querySelector("#all-btn");
let compbtn = document.querySelector("#comp-btn");
let currfilter="all"

activeBtn.addEventListener("click", () => {
  currfilter="active"
  console.log(currfilter)
  let todoitems = document.querySelectorAll("li");
  for (let element of todoitems) {
    let taskcheckbox = element.querySelector("input");
    if (!taskcheckbox.checked) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});

compbtn.addEventListener("click", () => {
  currfilter="completed"
    console.log(currfilter)

  let todoitems = document.querySelectorAll("li");
for(let element of todoitems){
  let taskchekbox=element.querySelector("input")
  if(taskchekbox.checked){
    element.style.display="block"
  }else{
    element.style.display="none"
  }
}
});

allliBtn.addEventListener("click",()=>{
  currfilter="all"
    console.log(currfilter)

  let todoitems=document.querySelectorAll("li")
   for(let element of todoitems){
    // let alllist=element.querySelector("li")
    element.style.display="block"
   }
})

const taskcounting = () => {
  let count = 0;
  let todoitems = document.querySelectorAll("li");

  for (let element of todoitems) {
    let taskcheckbox = element.querySelector("input");

    if (!taskcheckbox.checked) {
      count++;
    }
  }
  taskCounter.innerText = `Tasks Remaining: ${count}`;
};

addbtn.addEventListener("click", () => {
  if (input.value == "") {
  } else {
    let addnewli = document.createElement("li");
    let editbtn = document.createElement("button");
    let inputspan = document.createElement("span");
    const dltbtn = document.createElement("button");
    const checkbox = document.createElement("input");
    let editabletask;

    editbtn.innerText = "Edit";

    checkbox.type = "checkbox";
    dltbtn.innerText = "Delete";

    inputspan.innerText = input.value;
if(currfilter=="completed"){
  addnewli.style.display="none"
}else{
  addnewli.style.display="block"
}
    addnewli.append(checkbox, inputspan, editbtn, dltbtn);

    editbtn.addEventListener("click", () => {
      if (editbtn.innerText == "Edit") {
        editabletask = document.createElement("input");

        editbtn.innerText = "save";

        editabletask.value = inputspan.innerText;
        inputspan.replaceWith(editabletask);
      } else if (editbtn.innerText == "save") {
        inputspan.innerText = editabletask.value;
        editabletask.replaceWith(inputspan);

        editbtn.innerText = "Edit";
      }
    });

    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        inputspan.style.color = "grey";
        inputspan.style.textDecoration = "line-through";
      } else {
        inputspan.style.color = "black";

        inputspan.style.textDecoration = "none";
      }

      taskcounting();
    });

    dltbtn.addEventListener("click", () => {
      addnewli.remove();
      taskcounting();
    });
    unlist.append(addnewli);
    taskcounting();

    input.value = "";
  }
});
