let body = document.querySelector(`body`)
let boxx = document.querySelector(`.box-body`)
let listTask = document.querySelector(`#listall`)
let inputTask = document.querySelector(`#input-task`)
// --------------------------------------------------ajouter ligne 
let ajouter = document.querySelector(`#add-task`)
ajouter.addEventListener(`click`,(el)=>{
  el.preventDefault() 

  let divbox = document.createElement(`div`)
      divbox.setAttribute(`ondrop`,"drop_handler(event)")
      divbox.setAttribute(`ondragover`,"dragover_handler(event)")
      body.appendChild(divbox)
      
  let task = document.createElement(`li`)
      task.id =`maligne`
      task.classList = "row m-2 p-3 rounded bg-light"
      task.setAttribute(`draggable`,true)
      task.setAttribute(`ondragstart`,"dragstart_handler(event)")
      divbox.appendChild(task)

  let div1 = document.createElement(`div`)
      div1.classList =`col-2`
      div1.innerHTML = `<p id="taskName" >${inputTask.value}</p>`
      inputTask.value=``

  let div2 = document.createElement(`div`)
      div2.classList = `col`

  let div3 = document.createElement(`div`)
      div3.classList =`col-2`
      // ------------------------------------------------------------------les bouttons
      let btn1 =document.createElement(`button`)
          btn1.id = `btn1`
          btn1.classList = `border-0 bg-transparent`
          btn1.innerHTML =`<i class="far fa-check-square text-primary"></i>`
          btn1.value = `ON`
          btn1.addEventListener(`click`,()=>{
            switch(btn1.value)
     {
          case "ON":
              task.classList = "row m-2 p-3 rounded bg-success"
            // div1.classList.add('bg-success')
               btn1.value = "OFF";
               break;
          case "OFF":
              task.classList = "row m-2 p-3 rounded bg-light"
            // div1.classList.add('bg-light')
               btn1.value = "ON";
               break;
     }
        })

      let btn2 =document.createElement(`button`)
          btn2.id = `btn2`
          btn2.classList = `border-0 bg-transparent`
          btn2.innerHTML =`<i class="fas fa-edit text-warning"></i>`
          btn2.addEventListener(`click`,()=>{ 
            div1.innerHTML = `<input id="savein" type="text">${inputTask.value}</input>`
            let saveit = document.createElement(`button`)
                saveit.id = "saveit"
                saveit.classList ="border-0 bg-transparent mx-auto"
                saveit.innerHTML =`<i class="fas fa-save text-warning"></i>`
                saveit.addEventListener(`click`,()=>{
                  div3.innerHTML=``
                  div3.append(btn1,btn2,btn3)
                  div1.innerHTML = `${savein.value}`
                })
            div3.innerHTML =``
            div3.appendChild(saveit)
          })

      let btn3 =document.createElement(`button`)
          btn3.id =` btn3`
          btn3.classList = `border-0 bg-transparent`
          btn3.innerHTML =`<i class="fas fa-trash text-danger"></i>`
          btn3.addEventListener(`click`,()=>{
            task.remove(this)
            return `deleted`
        })

      listTask.appendChild(task)
      task.append(div1,div2,div3)
      div3.append(btn1,btn2,btn3)
// ----------------------------------------------------------------les filtres
let todo = document.querySelector(`#todo`)
    todo.addEventListener(`click`,()=>{
      if(task.getAttribute('class') === "row m-2 p-3 rounded bg-light"){
        task.style.display =``
      }
       else {
        task.style.display =`none`
      }
    })
let done = document.querySelector(`#done`)
    done.addEventListener(`click`,()=>{
      if(task.getAttribute('class') === "row m-2 p-3 rounded bg-light"){
        task.style.display =`none`
      } else {
        task.style.display =``
      }
    })
let all = document.querySelector(`#all`)
    all.addEventListener(`click`,()=>{
        task.style.display =``
    })
  })

// ---------------------------------------Drag&Drop 


