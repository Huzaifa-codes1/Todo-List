let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let unlist = document.querySelector("#ultodo-list");

addbtn.addEventListener("click", () => {
  if (input.value == "") {
  } else {
    let addnewli = document.createElement("li");
   const  dltbtn = document.createElement("button")
        dltbtn.innerText="Delete"
    addnewli.innerText = input.value;
addnewli.append(dltbtn)
dltbtn.addEventListener("click",()=>{
addnewli.remove()
})
    unlist.append(addnewli);
    input.value=""
  }
});
