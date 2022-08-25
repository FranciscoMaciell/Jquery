$(document).ready(function(){
   // $('#botão').click(function(){
        //$('#texte').load('teste.txt')
   // })

    $('h1').mouseover(function(){
        //$('#texte').load('teste.txt')
    })
    /*
    $('#botão').click(function(){
        var valor=$('#cep').val();
        $.get(`https://viacep.com.br/ws/${valor}/json/`, function(dados, status){
            if(status=='success'){
                $('#cidade').html(`O nome da cidade é ${dados.localidade} e a UF é ${dados.uf}`);
            }else{
                alert('[ERRO], dados inesistentes');
            }
        })
    })
    */
    $('#botão').click(function(){
        var valor=$('#cep').val();
        if(valor.length!=8){
            alert('[ERROR], digite os dados novamente');
        }else{
            $.ajax({
                url:`https://viacep.com.br/ws/${valor}/json/`,
                type:'GET',
                success: function(dados, status){
                    $('#cidade').val(dados.localidade);
                    $('#uf').val(dados.uf);
                    $('#cidade').html(`O nome da cidade é ${dados.localidade} e a UF é ${dados.uf}`);
                },
                error: function(){
                    alert('[ERRO], dados inesistentes');
                }
            })
        }
   })
});