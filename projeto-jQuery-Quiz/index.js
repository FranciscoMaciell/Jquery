/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
var qtdPerguntas=3;
var perguntasFeitas=[];

// PERGUNTAS DO JOGO
let perguntas=[
    // PERGUNTA 0
    {
        pergunta: "Qual dessas linguagens não é considerada uma linguagem de programação?",
        respostas: ['PHP', 'JavaScript', 'C++', 'HTML'],
        correta: 'resp3'
    },
    // PERGUNTA 1
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        respostas: ['1548', '1500', '1575', '1828'],
        correta:'resp1'
    },
    // PERGUNTA 2
    {
        pergunta: 'O que significa a sigla HTML?',
        respostas: ['Hiper Tonto Maluco Legal', 'Hyper Text Markup Language', 'Hey Trade More Language', 'Hyper Text Mark Lang'],
        correta: 'resp1'
    },
    //PERGUNTA 3
    {
        pergunta: 'Quais dessas linguagens é considerada uma linguagem de marcação?',
        respostas: ['HTML', 'PHP', 'JavaScript', 'C++'],
        correta:'resp0'
    }
]

var qtdPerguntas=perguntas.length-1;
gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas){
    // GERAR UM NUMERO ALEATORIO
    let aleatorio=(Math.random()*maxPerguntas).toFixed();
    aleatorio=Number(aleatorio);
    console.log(`A perguta sorteada foi ${aleatorio}`)

    if(!perguntasFeitas.includes(aleatorio)){
        perguntasFeitas.push(aleatorio);
        var p_selecionada=perguntas[aleatorio].pergunta;
        $('#pergunta').html(p_selecionada);
        $('#pergunta').attr('data-indice', aleatorio);

        /*
        var resp0=perguntas[aleatorio].respostas[0];
        var resp1=perguntas[aleatorio].respostas[1];
        var resp2=perguntas[aleatorio].respostas[2];
        var resp3=perguntas[aleatorio].respostas[3];

        $('#resp0').html(resp0);
        $('#resp1').html(resp1);
        $('#resp2').html(resp2);
        $('#resp3').html(resp3);
        */

        for(var i=0; i<4; i++){
            $(`#resp${i}`).html(perguntas[aleatorio].respostas[i]);
        }

        var pai=$('#respostas');
        var botões=pai.children();
        for(var i=1; i<botões.length; i++){
            pai.append(botões.eq(Math.floor(Math.random()*botões.length)))
        }
    }else{
        console.log('A pergunta ja foi feita. Sorteando novamente...');
        if(perguntasFeitas.length<qtdPerguntas+1){
            return gerarPergunta(maxPerguntas);
        }else{
            console.log('Acabaram as perguntas');
        }
    }
}

$(document).ready(function(){
    $('.resposta').click(function(){
        $('.resposta').each(function(){
            if($(this).hasClass('selecionada')){
                $(this).removeClass('selecionada');
            }
        })
        $(this).addClass('selecionada');
    })

    $('#confirm').click(function(){
        var indice=$('#pergunta').attr('data-indice');
        var respCerta=perguntas[indice].correta;
        $('.resposta').each(function(){
            if($(this).hasClass('selecionada')){
                var respEscolhida=$(this).attr('id');


                if(respCerta==respEscolhida){
                    console.log('acertou!!!');
                    proximaPergunta();
                }else{
                    $(`#${respCerta}`).addClass('certa')
                    $(`#${respEscolhida}`).removeClass('selecionada');
                    $(`#${respEscolhida}`).addClass('errada');

                    setTimeout(function(){
                        //newGamer();
                        gameOver();
                    }, 4000);
                }
            }
        })
    })

    $('#novoJogo').click(function(){
        newGamer();
    })

    function resetBotões(){
        $('.resposta').each(function(){
            if($(this).hasClass('selecionada')){
                $(this).removeClass('selecionada');
            }

            if($(this).hasClass('certa')){
                $(this).removeClass('certa')
            }

            if($(this).hasClass('errada')){
                $(this).removeClass('errada');
            }
        })
    }
    
    function newGamer(){
        perguntasFeitas=[];
        resetBotões();
        gerarPergunta(qtdPerguntas);
        $('#quiz').removeClass('oculto');
        $('#status').addClass('oculto');
    }
    
    function proximaPergunta(){
        resetBotões();
        gerarPergunta(qtdPerguntas);
    }

    function gameOver(){
        $('#quiz').addClass('oculto');
        $('#status').removeClass('oculto')
    }
})

