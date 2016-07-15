/**
 * Created by Aluno on 01/07/2016.
 */
var dadosTurmaDetalhes = [
    {
        "nome": "Pedro Rocha",
        "media": "8.8",
        "frequencia": "5%"
    }
];

function getListaTurmaDetalhes(){
    var listaMontada = "";

    //CRIAR ID NA TABELA PARA EXIBIR OS DADOS
    $("#listaTurmaDetalhes").html('');

    /*
     CHAMADA AJAX
     */

    $.each(dadosTurmaDetalhes, function (key, informacoes) {
        listaMontada += "<tr>";
        listaMontada += "<td>" + informacoes.nome + "</td>";
        listaMontada += "<td>" + informacoes.media + "</td>";
        listaMontada += "<td>" + informacoes.frequencia + "</td>";
        listaMontada += "<td><a href='professor-turmas-aluno-detalhes.html'><span class='glyphicon glyphicon-th-large' aria-hidden='true'></span></a></td>";
        listaMontada += "</tr>";
    });

    $("#listaTurmaDetalhes").html(listaMontada);
}


