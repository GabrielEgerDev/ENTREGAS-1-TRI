const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.prepend(cloneModal)
})

container.addEventListener("click", (event) => {
    const btClose = event.target.closest(".bt-close");
    const btSave = event.target.closest(".bt-save");
    const modal = event.target.closest(".modal");
  
    if (btSave) {
      const formElement = modal.querySelector("form");
      const formData = new FormData(formElement);
      formData.forEach(console.log);
    }
  
    if (btClose) {
      modal.remove();
    }
  });

// Máscara

const maskElements = document.querySelectorAll("[data-mascara]")

const mascaras = {
    matricula: maskMatricula
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMaskara = mascaras[maskName]
    fnMaskara(el)
})

function maskMatricula(el) {
    el.addEventListener("keydown", ev => {
        const key = ev.key
        if (key != 1 && key != 2 && key != 3  && key != 4  && key != 5  && key != 6  && key != 7  && key != 8 && key != 9 && key != "ArrowLeft" && key != "ArrowRight" && key != "Backspace") {
            ev.preventDefault()
        }
    })
    
}