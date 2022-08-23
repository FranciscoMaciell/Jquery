$(document).ready(function(){
    $('#name').blur(function(){
        var valor=$(this).val();
        //alert(`Foi digitado ${valor}`)
    })

    $('#botão').click(function(){
        var link=$('#link').attr('href');
        alert(`O link é ${link}`)
    })

    $('#botão1').click(function(){
        $('h1').text('Mudei o texto o JQuery')
    })

    $('#botão2').click(function(){
        $('h2').html('<b>Mudei o h2</b> com <i>jQuery</i>');
    })

    $('#botão3').click(function(){
        $('#name').val('Dimitri Teixeira')
    })
    
    $('#botão4').click(function(){
        $('#link').text('Ir para programação web');
        $('#link').attr('href', 'https://programacaoweb.com.br')
    })

    $('#botão5').click(function(){
        $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCKykHw1CDuIgycmYIecL67tmlZUpwUtsIQ&usqp=CAU')
    })
})