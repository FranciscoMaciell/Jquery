$(document).ready(function(){
    // PEGAR O SELETO H1

    //var textH1=$('h1').html();
    //alert(textH1);


    // PEGAR O SELETOR P
    var textP=$('p').text();
    //alert(textP);

    $('#texto').blur(function(){
        var valor=$(this).val();
        //alert(valor);
    })

    // PEGANDO LINKS
    $('#botão1').click(function(){
        $('#link').css('color', 'red')
        var link=$('#link').attr('href');
        alert(`O link vai para ${link}`);
    })

    $('#botão8').click(function(){
        $('h1').append('<br>texto inserido com append')
    })

    $('#botão9').click(function(){
        $('h1').prepend('texto inserido com prepend<br>')
    })

    $('#botão2').click(function(){
        var ima=$('#imag').attr('src');
        alert(`O link da imagem é ${ima}`);
    })

    $('#botão3').click(function(){
        $('h1').html('Texto alterado com <i>jQuery</i>');
    })

    $('#botão4').click(function(){
        $('h2').text('Mudei o h2 com jQuery');
    })

    $('#botão5').click(function(){
        $('#texto').val('Dimitri');
    })

    $('#botão6').click(function(){
        $('#link').text('Link para programação web')
        $('#link').attr('href', 'https://programacaoweb.com.br')
    })

    $('#botão7').click(function(){
        $('#imag').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRve76pqYmnpmje5YlmKk36Dhl6rGLHDorRIT-NCQesCRRIvpydoSIrWqAbarnEJIVSYIw&usqp=CAU')
    })

    $('#botão10').click(function(){
        $('body').prepend('<div style="width: 100px; height: 100px; display: inline-block; background: red; margin: 2px"></div>')
    })


    // REMOVENDO ITENS DA PAGINA
    $('#botão11').click(function(){
        $('h1').remove();
    })

    $('#botão12').click(function(){
        $('#texte1').empty();
    })

    $('#botão13').click(function(){
        $('body').css('background', 'blue');
        $('h1').css('color', 'white');
    })

    $('#botão14').click(function(){
        $('body').addClass('red');
    })

    $('#botão15').click(function(){
        $('body').removeClass('red');
    })

    $('#botão16').click(function(){
        $('body').toggleClass('red');
    })

    $('#botão17').click(function(){
        var largura=$('#imag').width();
        var altura=$('#imag').height();
        alert(`O tamanho da imagem é ${largura} x ${altura}`)
    })
})
