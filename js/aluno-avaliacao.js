/**
 * Created by Aluno on 01/07/2016.
 */
var dadosAvaliacao = [
    {
        "tipo_avaliacao": "Av1",
        "media": "5.0"
    },
    {
        "tipo_avaliacao": "Av2",
        "media": "4.0"
    },
    {
        "tipo_avaliacao": "Av3",
        "media": "8.0"
    },
    {
        "tipo_avaliacao": "Av4",
        "media": "9.0"
    }
];

function getListaAvaliacao(){
    var listaMontada = "";

    //CRIAR ID NA TABELA PARA EXIBIR OS DADOS
    $("#listaAvaliacao").html('');

    /*
        CHAMADA AJAX
     */

    $.each(dadosAvaliacao, function (key, informacoes) {
        listaMontada += "<tr>";
        listaMontada += "<td>" + informacoes.tipo_avaliacao + "</td>";
        listaMontada += "<td>" + informacoes.media + "</td>";
        listaMontada += "</tr>";
    });

    $("#listaAvaliacao").html(listaMontada);
}


