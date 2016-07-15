/**
 * Created by Aluno on 01/07/2016.
 */
var dadosFrequencia = [
    {
        "mes": "Janeiro / 2016",
        "presenca": "33%",
        "falta": "5%"
    },
    {
        "mes": "Fevereiro / 2016",
        "presenca": "23%",
        "falta": "15%"
    },
    {
        "mes": "Março / 2016",
        "presenca": "43%",
        "falta": "2%"
    },
    {
        "mes": "Abril / 2016",
        "presenca": "63%",
        "falta": "15%"
    },
];

function getListaFrequencia(){
    var listaMontada = "";

    //CRIAR ID NA TABELA PARA EXIBIR OS DADOS
    $("#listaFrequencia").html('');

    /*
     CHAMADA AJAX
     */

    $.each(dadosFrequencia, function (key, informacoes) {
        listaMontada += "<tr>";
        listaMontada += "<td>" + informacoes.mes + "</td>";
        listaMontada += "<td>" + informacoes.presenca + "</td>";
        listaMontada += "<td>" + informacoes.falta + "</td>";
        listaMontada += "<td><a href='professor-turmas-aluno-mes.html'><span class='glyphicon glyphicon-th-large' aria-hidden='true'></span></a></td>";
        listaMontada += "</tr>";
    });

    $("#listaFrequencia").html(listaMontada);
}


