$(document).ready(function(){
    //var paragrafo=$('p').text()
    //alert(paragrafo)


    $('#c_text').blur(function(){
        //var texto=$(this).val();
        //alert(texto)
    })

    $('#botão10').click(function(){
        //var valor=$('#link').attr('href');
        //alert(`O valor é ${valor}`);
    })

    $('#botão').click(function(){
        //var val=$('img').attr('src');
        //alert(`O link é da imagem é ${val}`);
    })

    // ATRIBUIR VALORES 

    $('#botão1').click(function(){
        //$('h1').text('Manipulado com jQuery')
        //$('h1').append('<br>Adicionei este testo com <i>jQuery</i>')
        $('body').prepend('<div style="width: 100px; height: 100px; display: inline-block; background: red; margin: 2px"></div>')
    })

    $('#botão2').click(function(){
        $('h2').html('<b>Manipulado</b> com <i>jQuery</>')
    })

    $('#botão3').click(function(){
        $('#c_text').val('Dimitri Teixeira')
    })

    $('#botão4').click(function(){
        $('#link').text('Ir para programação web')
        $('#link').attr('href', 'https://programacaoweb.com.br')
    })

    $('#botão5').click(function(){
        $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrpeqdGxcdpZzd9Jwujs0eHikKIr5y9EuYwfeeEu4wv3Ig3bYuqvIN0-9vk4A66A5Zck&usqp=CAU')
    })

    // REMOVER ITENS DA PAGINA

    $('#botão6').click(function(){
        $('h1').remove();
    })

    $('#botão7').click(function(){
        $('#teste').empty();
    })

    $('#botão8').click(function(){
        //$('h1').css('color', 'blue')
        //$('body').css('background', 'yellow')
        $('#link').addClass('red');
    })

    $('#botão9').click(function(){
        $('#link').removeClass('red')
    })

    $('#botão10').click(function(){
        $('#link').toggleClass('red')
    })

    $('#botão11').click(function(){
        var largura=$('img').width();
        var altura=$('img').height();
        alert(`O tamanho da imagem é ${largura} x ${altura}`);
    })

    $('#botão12').click(function(){
        $('img').width('512')
        $('img').height('512')
    })
})