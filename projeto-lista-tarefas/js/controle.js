let input=$('#inputTarefa');
let btAdd=$('#btn-add');
let main=$('#areaLista');
let del=$('.delete');
let cnt=0;



input.keyup(function(event){
    if(event.keyCode===13){
        event.preventDefault();
        addTarefa();
    }
})






/* --- DESENVOLVIMENTO DAS FUNÇÕES --- */
function addTarefa(){
    let inputText=input.val();
    if(inputText!==""&&inputText!==null&&inputText!==undefined){
        ++cnt;
        let novoItem=
        `<div id="${cnt}" class="item">
            <div class="item-icone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${inputText}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${cnt})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`

        main.append(novoItem);
        input.val('');
        input.focus();
    }
}

function deletar(id){
    let tarefa=document.getElementById(id);
    tarefa.remove();
}

