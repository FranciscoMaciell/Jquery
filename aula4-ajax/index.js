$(document).ready(function(){
    // CARREGAR ARQUIVOS EXTERNOS
    $('#botão').click(function(){
        $('#teste').load('teste.txt')
    })

    $('h1').click(function(){
        $('#teste').load('teste.txt')
    })
    /*
    // METODO GET PARA PEGAR INFORMAÇÃO DE UMA PAGINA
    $('#cep').blur(function(){
        var valor=$(this).val();
        $.get(`https://viacep.com.br/ws/${valor}/json/`, function(dados, status){
            if(status=='success'){
                $('#cit').val(dados.localidade);
                $('#uf').val(dados.uf)
            }else{
                alert('Houve um problema na requisição')
            }
        })
    })
    */
    // METODO POST PARA PEGAR INFORMAÇÃO DE UMA PAGINA
    $('#cep').blur(function(){
        var valor=$(this).val();
        $.ajax({
            url:`https://viacep.com.br/ws/${valor}/json/`,
            type:"GET",
            success: function(dados, status){
                $('#cit').val(dados.localidade)
                $('#uf').val(dados.uf)
            },
            error: function(){
                alert('Deu erro na requisição')
            }
        })
    })
})