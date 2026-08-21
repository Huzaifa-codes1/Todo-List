let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let unlist = document.querySelector("#ultodo-list");

addbtn.addEventListener("click", () => {
  if (input.value == "") {
  } else {
    let addnewli = document.createElement("li");
    let editbtn = document.createElement("button")
    let inputspan=document.createElement("span")
   const  dltbtn = document.createElement("button")
   const checkbox=document.createElement("input")

      let editabletask;


      editbtn.innerText="Edit"

   checkbox.type="checkbox"
        dltbtn.innerText="Delete"

    inputspan.innerText = input.value;

    addnewli.append(checkbox,inputspan,editbtn,dltbtn)

    editbtn.addEventListener("click",()=>{

      if(editbtn.innerText=="Edit"){
            editabletask=document.createElement("input")

         editbtn.innerText="save"

      editabletask.value=inputspan.innerText
     inputspan.replaceWith(editabletask)
      }
      else if(editbtn.innerText=="save"){
                inputspan.innerText=editabletask.value
                        editabletask.replaceWith(inputspan)


        editbtn.innerText="Edit"
      }
   

         
    })

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
