$(document).ready(function(){
    $('#btn-add').click(function(){
       addTarefa();
    })

    valorInput.keyup(function(event){
        if(event.keyCode===13){
            event.preventDefault();
            addTarefa();
        }
    })
})




/* --- DESENVOLVIMENTO DE FUNÇÕES --- */
function addTarefa(){
    let valorInput=$('#inputTarefa').val();
    if(valorInput!==""&&valorInput!==null&&valorInput!==undefined){
        let novoItem=
        `<div class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`

        $('#areaLista').append(novoItem);

        valorInput.val('');
        valorInput.focus();
    }
}