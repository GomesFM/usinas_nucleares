function pesquisar() {
  // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa inserido pelo usuário
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Exibe uma mensagem de erro caso o campo esteja vazio
    section.innerHTML = "<p>Sem resultado! Por favor digite um país na busca.</p>"
    return; // Interrompe a função
  }

  // Converte o termo de pesquisa para minúsculas para facilitar a comparação
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
  let resultados = "";

  // Itera sobre cada país no array de países com usinas nucleares
  for (let pais of paisesUsinas) {
    // Converte as tags do país para minúsculas para facilitar a comparação
    tags = pais.tags.toLowerCase();

    // Verifica se as tags do país incluem o termo de pesquisa
    if (tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2>${pais.pais}</h2>
          <p class="descricao-meta">${pais.descricao}</p>
          <a href=${pais.fonte} target="_blank"><br><br>Fonte dos dados<br><br></a>
          <button onclick="reatores()">Para saber mais sobre os tipos de reatores</button>
        </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    // Exibe uma mensagem indicando que não foram encontrados resultados
    resultados = "<p>Este país não possui usinas nucleares.</p>";
  }

  // Atualiza o conteúdo da seção de resultados com o HTML gerado
  section.innerHTML = resultados;
}

function reatores() {
  // Seleciona a seção HTML onde os resultados sobre os tipos de reatores serão exibidos
  let reator = document.getElementById("tipo-reatores");

  // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
  let resultados = "";

  // Itera sobre cada tipo de reator
  for (let tipo of tipoReatores) {
    // Constrói o HTML para cada tipo de reator
    resultados += `
      <div class="tipo-reatores">
        <p>${tipo.sigla} em português significa ${tipo.tipo}. ${tipo.descricao}</p>
      </div>`;
  }

  // Atualiza o conteúdo da seção de resultados com o HTML gerado
  reator.innerHTML = resultados;
}

