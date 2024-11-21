function pesquisar() {
  let boxResultados = document.querySelector(".resultados-pesquisa");
  boxResultados.innerHTML = "";

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  if (campoPesquisa == "") {
    boxResultados.innerHTML = "<p>Nada foi encontrado</p>";
    return; // Sai da função
  }

  let nome = "";
  let tags = "";
  let descricao = "";

  campoPesquisa = campoPesquisa.toLowerCase();
  for (atleta of atletas) {
    nome = atleta.nome.toLowerCase();
    tags = atleta.tags.toLowerCase();
    descricao = atleta.descricao.toLowerCase();

    if (
      nome.includes(campoPesquisa) ||
      tags.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa)
    ) {
      boxResultados.innerHTML += `
      <div class="item-resultado">
      <h2>${atleta.nome}</h2>
      <p class="descricao-meta">${atleta.descricao}</p>
      <a ${atleta.link}" target="_blank">Mais informações</a>
    </div>`;
    }
  }

  if (!boxResultados.innerHTML) {
    console.log("teste");
    boxResultados.innerHTML = "<p>Nada foi encontrado</p>";
  }

  return boxResultados; // sai da função e boxResultados é retornado pro HTML
}
