$(document).ready(function(){
    $('#busca').on('keyup', function(){
        var valor=$(this).val().toLowerCase();

        $('#MinhaTabela tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
        })
    })

    $('#busca2').keyup(function(){
        var valor=$(this).val().toLowerCase();

        $('#list li').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor)>-1);
        })
    });
})