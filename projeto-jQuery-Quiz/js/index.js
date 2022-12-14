let perguntasFeitas=[];

const perguntas=[
    // PERGUNTA 0
    {
        pergunta: "A que grupo pertence o empresa Assaí Atacadista?",
        respostas: ['Mergê', 'Boris', 'Casino', 'BoriSul'],
        correta: 'resp2'
    },
    // PERGUNTA 1
    {
        pergunta: "Trata-se da única empresa do segmento listada na Bolsa de Valores de São Paulo (B3) sob o ticker ______. Além disso, é negociada também na bolsa de _______ .",
        respostas: ['ASSAI3, Nova York', 'ASAI3,  Nova York ', 'ASSAI4, Nova York', 'ASAI4, Nova York'],
        correta:'resp1'
    },
    // PERGUNTA 2
    {
        pergunta: 'O Assaí une preço justo, variedade e qualidade para atender os pequenos e médios comerciantes e o _______.',
        respostas: ['Mercado final', 'As metas finais', 'Conjunto final', 'Cliente final'],
        correta: 'resp3'
    },
    //PERGUNTA 3
    {
        pergunta: 'Por loja, são comercializados mais de _______ mil itens, entre alimentos, bebidas, itens de higiene pessoal e limpeza, bazar, linha automotiva, linha pet e eletroportáteis, além de embalagens e descartáveis. <br>Escolha a opção mais proxima da correta',
        respostas: ['9', '10', '5', '15'],
        correta:'resp0'
    },
    //PERGUNTA 4
    {
        pergunta: ' O cliente tem a opção de fazer sua compra pagando o preço de atacado ______________.',
        respostas: ['ao adquirir volumes maiores de um mesmo item', 'Quando um cliente compra uma certa quantia em volumes variados', 'O Assaí é legal e dá desconto para qualquer valor', 'nenhuma das opções'],
        correta:'resp0'
    },
    //PERGUNTA 5
    {
        pergunta: 'Acontecimento muito relevante para o Assaí em 2017',
        respostas: ['O Assaí torna-se o maior SuperMercado do Brasil', 'Torna-se a maior marca no ramo atacadista sendo reconhecida mundialmente', 'Torna-se a maior marca do grupo onde entá inserida', 'nenhuma das opções'],
        correta:'resp2'
    },
    // PERGUNTA 6
    {
        pergunta: 'Assaí em numeros: Lojas:______, Centros de distribuição:_______ e Escritórios Regionais:________',
        respostas: ['210, 40, 40', '250, 50, 60', '230, 5, 6', '221, 12, 11'],
        correta:'resp3'
    },
    // PERGUNTA 7
    {
        pergunta: 'O Assaí está raqueado como: ',
        respostas: ['como o 1<sup>o</sup> maior varejista do Brasil', 'como o 2<sup>o</sup> maior varejista do Brasil', 'como o 3<sup>o</sup> maior varejista do Brasil', 'como o 4<sup>o</sup> maior varejista do Brasil'],
        correta:'resp1'
    },
    // PERGUNTA 8
    {
        pergunta: 'Quando e onde nasceu o primeiro Assaí?',
        respostas: ['1970, em São Paulo', '1974, em São Paulo', '1975, no Rio de Janeira', '1974, Rio de Janeiro'],
        correta:'resp1'
    },
    // PERGUNTA 9
    {
        pergunta: 'O GPA adquire 60% da companhia, um marco para a entrada no segmento atacado de autosserviço, que apresentava fortes sinais de crescimento no país. <br>Qual o ano deste acontecimento',
        respostas: ['ano 2000', 'ano de 2007', 'ano de 2008', 'ano de 2005'],
        correta:'resp1'
    }, 
    // PERGUNTA 10
    {
        pergunta: 'Em que ano o Assaí chegou a Fortaleza?',
        respostas: ['ano 2000', 'ano de 2007', 'ano de 2008', 'ano de 2005'],
        correta:'resp2'
    },
    // PERGUNTA 11
    {
        pergunta: 'Buscando estruturar e otimizar os processos, o Assaí inaugura seu primeiro Centro de Distribuição, no estado: ',
        respostas: ['Rio de Janeiro/RJ', 'Ipanema/RJ', 'São Paulo/SP', 'Osasco/SP'],
        correta:'resp3'
    },
    //PERGUNTA 12
    {
        pergunta: 'A modernização das lojas, criando um novo formato caracterizado pela maior quantidade de produtos e melhor ambiente (que inclui estacionamento coberto, Wi-Fi, ar-condicionado e iluminação natural na loja).<br>Em que ano começaram a ocorrer essas reformas?',
        respostas: ['ano 2010', 'ano de 2015', 'ano de 2012', 'ano de 2011'],
        correta:'resp3'
    },
]

let qtdPerguntas=perguntas.length-1;
var cntcerto=0;
var cnterrado=0;
gerarPergunta(qtdPerguntas);

$('.resposta').click(function(){
    resetBotoes();
    $(this).addClass('selecionada');
})

$('#confirm').click(function(){
    var indice=$('#pergunta').attr('data-indice');
    var respCerta=perguntas[indice].correta;

    $('.resposta').each(function(){
        if($(this).hasClass('selecionada')){
            var respEscolhida=$(this).attr('id');

            if(respCerta==respEscolhida){
                cntcerto+=1;
                proximaPergunta();
                console.log(cntcerto);
                if(cntcerto>=5){
                    venceu();
                }
            }else{
                $(`#${respCerta}`).addClass('certa');
                $(`#${respEscolhida}`).removeClass('selecionada');
                $(`#${respEscolhida}`).addClass('errada');
                $('#confirm').addClass('hide');
                cnterrado+=1;
                console.log(cnterrado);
                if(cnterrado>=3){
                    setTimeout(function(){
                        gameOver();
                    },2000);
                }else{
                    setTimeout(function(){
                        proximaPergunta();
                    },2000)
                }
            }
        }
    })
})

$('#pros').click(function(){
    $('#cabeca').addClass('hide');
    $('#quiz').removeClass('hide');
})

$('#newGamer').click(function(){
    $('#quiz').removeClass('hide');
    $('#status').addClass('hide');
    newGame();
})

$('#venceu').click(function(){
    $('#quiz').removeClass('hide');
    $('#win').addClass('hide');
    newGame();
})

/* --- DESENVOLVIMENTO DE FUNÇÕES --- */
function gerarPergunta(maxPerguntas){
    let aleatorio=(Math.random()*maxPerguntas).toFixed();
    aleatorio=Number(aleatorio);
    if(!perguntasFeitas.includes(aleatorio)){
        perguntasFeitas.push(aleatorio);
        let p_selecionada=perguntas[aleatorio].pergunta;
        $(document).ready(function(){
            $('#pergunta').html(p_selecionada);
            $('#pergunta').attr('data-indice', aleatorio);
        })

        for(var i=0; i<4; i++){
            $(`#resp${i}`).html(perguntas[aleatorio].respostas[i])
        }

        var pai=$('#respostas');
        var botoes=pai.children();

        for(var i=1; i<botoes.length; i++){
            pai.append(botoes.eq(Math.floor(Math.random()*botoes.length)))
        }
    }else{
        console.log('A pergunta ja foi feita, sorteando novamente');
        if(perguntasFeitas.length<qtdPerguntas){
            gerarPergunta(maxPerguntas);
        }else{
            console.log('Acabaram as perguntas')
        }
        
    }
}

function proximaPergunta(){
    gerarPergunta(qtdPerguntas);
    resetBotoes();
}

function resetBotoes(){
    $('.resposta').each(function(){
        if($(this).hasClass('selecionada')){
            $(this).removeClass('selecionada')
        }

        if($(this).hasClass('certa')){
            $(this).removeClass('certa');
        }

        if($(this).hasClass('errada')){
            $(this).removeClass('errada');
        }

        if($('#confirm').hasClass('hide')){
            $('#confirm').removeClass('hide');
        }
    })
}

function newGame(){
    perguntasFeitas=[];
    cntcerto=0;
    cnterrado=0;
    resetBotoes();
    gerarPergunta(qtdPerguntas);
}

function gameOver(){
    $('#quiz').addClass('hide');
    $('#status').removeClass('hide');
    $('#tot_acertos').append(cntcerto);
    $('#tot_erros').append(cnterrado);
}

function venceu(){
    $('#quiz').addClass('hide');
    $('#win').removeClass('hide');
    $('#tot_acertos').append(cntcerto);
    $('#tot_erros').append(cnterrado);
}