let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let unlist = document.querySelector("#ultodo-list");

addbtn.addEventListener("click", () => {
  if (input.value == "") {
  } else {
    let addnewli = document.createElement("li");
    let inputspan=document.createElement("span")
   const  dltbtn = document.createElement("button")
   const checkbox=document.createElement("input")

   checkbox.type="checkbox"
        dltbtn.innerText="Delete"

    inputspan.innerText = input.value;

    addnewli.append(checkbox,inputspan,dltbtn)

     checkbox.addEventListener("click",()=>{
          
           if(checkbox.checked){
            console.log("true")
            inputspan.style.color="grey"
            inputspan.style.textDecoration="line-through"
           }else{
                        inputspan.style.color="black"

            inputspan.style.textDecoration="none"
           }
     })

dltbtn.addEventListener("click",()=>{
addnewli.remove()
})
    unlist.append(addnewli);
    input.value=""
  }
});
