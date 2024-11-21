function pesquisar() {
  let boxResultados = document.querySelector(".resultados-pesquisa");

  for (atleta of atletas) {
    boxResultados.innerHTML += `
    <div class="item-resultado">
      <h2>${atleta.nome}</h2>
      <p class="descricao-meta">${atleta.descricao}</p>
      <a ${atleta.link}" target="_blank">Mais informações</a>
    </div>`;
  }
}
