const nota=[
    { body: "Note 1" }
]

const cardNotas = document.querySelector(".notes-continer")
const form = document.querySelector("form");
//const crearNota = document.querySelector("#create")
const entrada =  document.querySelector("#entrada")

document.addEventListener("DOMContentLoaded",()=>{
    form.addEventListener("submit", insertar)
})

function deleteNote(note){
    const indexId = nota.indexOf(note)
    nota.splice(indexId, 1);
   leer()
}

function createNota(note){
    const div = document.createElement("div")
    div.className="new-notes full__media"

    const p = document.createElement("p")
    p.textContent=note.body
  
    const divbuton = document.createElement("div");
   divbuton.className="flex__btn"
    const button = document.createElement("button");
    divbuton.appendChild(button)

    button.className="btn btn-danger mb-3"
    button.textContent = "Delete";
    button.addEventListener("click", (_event) => deleteNote(note))

    div.append(p,divbuton)
    return div
}


const leer = () =>{
    cardNotas.innerHTML="";

    nota.forEach((newNota) => {
        
       const cardNota = createNota(newNota)
       cardNotas.append(cardNota)
    });
}

 const createNotas = (body) =>{
    if(entrada.value === ""){
        
         const alert = document.createElement("p")
         alert.className="alerta-danger"
         alert.textContent="the field must not be empty"
         document.querySelector(".lista-alert").appendChild(alert)
         const alerta =document.querySelector(".lista-alert p")
         
         setTimeout(() => {
            document.querySelector(".lista-alert").removeChild(alerta)
         }, 2000);
    }else{
       const alerta =document.querySelector(".lista-alert p")
        if(alerta){
            document.querySelector(".lista-alert").removeChild(alerta)
            
        }
        const alertsucess = document.createElement("p")
        alertsucess.className="alerta-success"
        alertsucess.textContent="it was created successfully"
        document.querySelector(".lista-alert").appendChild(alertsucess)       
        
        setTimeout(() => {
            document.querySelector(".lista-alert").removeChild(alertsucess)
        }, 2000);
        nota.push({body})

    }
    
}
const insertar = (e) =>{
    e.preventDefault();
   
    const body = entrada.value;
    createNotas(body)
    leer()
    form.reset();
    
}

leer()






 