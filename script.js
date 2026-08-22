let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let unlist = document.querySelector("#ultodo-list");
let taskCounter = document.querySelector("#para");
let activeBtn = document.querySelector("#active-btn");
let allliBtn = document.querySelector("#all-btn");
let compbtn = document.querySelector("#comp-btn");
let clearbtn = document.querySelector("#clear-btn");
let currfilter = "all";

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

const applyfilter = () => {
  let todoitems = document.querySelectorAll("li");
  for (let element of todoitems) {
    let taskcheckbox = element.querySelector("input");
    if (currfilter == "all") {
      element.style.display = "block";
    } else if (currfilter == "active") {
      if (taskcheckbox.checked) {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    } else if (currfilter == "completed") {
      if (taskcheckbox.checked) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  }
};

activeBtn.addEventListener("click", () => {
clearbtn.classList.add("hide")
  currfilter = "active";
  applyfilter();
});

compbtn.addEventListener("click", () => {
clearbtn.classList.remove("hide")
  currfilter = "completed";
  applyfilter();
});

allliBtn.addEventListener("click", () => {
clearbtn.classList.add("hide")
  currfilter = "all";
  applyfilter();
});

clearbtn.addEventListener("click",()=>{
  let todoitems=document.querySelectorAll("li")
  for(let element of todoitems){
    let taskckeckbox=element.querySelector("input")
    if(taskckeckbox.checked){
      element.remove()
    }
  }
      clearbtn.classList.add("hide")

})
let myTasks=[]
addbtn.addEventListener("click", () => {
  if (input.value == "") {
  } else {
    let addnewli = document.createElement("li");
    let editbtn = document.createElement("button");
    let inputspan = document.createElement("span");
    const dltbtn = document.createElement("button");
    const checkbox = document.createElement("input");
    let editabletask;
let obj={
  "text":input.value,
  "completed":false,
}
myTasks.push(obj)
    editbtn.innerText = "Edit";

    checkbox.type = "checkbox";
    dltbtn.innerText = "Delete";

    inputspan.innerText = input.value;

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

      applyfilter();

      taskcounting();
    });

    dltbtn.addEventListener("click", () => {
      addnewli.remove();
      taskcounting();
    });
    unlist.append(addnewli);
    applyfilter();

    taskcounting();

    input.value = "";
  }
});
