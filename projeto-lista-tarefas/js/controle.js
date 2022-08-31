let cnt=0; 

$(document).ready(function () {

    let botao=$('#btn-add');
    let inputText=$('#inputTarefa');
    let Deletar=$('.item-botao');

    botao.click(function () {
        addTarefa();
    })

    inputText.keyup(function(event){
        if(event.keyCode===13){
            event.preventDefault();
            addTarefa()
        }
    })


})




/* --- DESENVOLVIMENTO DE FUNÇÕES --- */
function addTarefa() {
    let valorInput = $('#inputTarefa').val();
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        ++cnt;
        let novoItem =
            `<div id="${cnt}"class="item">
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

        $('#inputTarefa').val('');
        $('#inputTarefa').focus();

        $('.delete').click(function(){
            apaga($('.item').attr('id'))
        })
    }
}

function apaga(id){
    let apagar=id;
    apagar.remove();
}

