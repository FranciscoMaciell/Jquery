var jq=$.noConflict();
jq(document).ready(function(){
    jq('#botão').click(function(){
        jq('p').text('Adicionou texto com o botão')
    })
})