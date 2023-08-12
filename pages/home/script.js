// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Selecione o botão usando o ID
  const button = d3.select("#myButton");

  // Adicione um evento de clique ao botão
  button.on("click", function () {
    // Ação a ser executada quando o botão é clicado
    alert("Botão do Bootstrap clicado!");
  });
});
