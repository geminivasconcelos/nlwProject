//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField(){
    //Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = "0"
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
   
}