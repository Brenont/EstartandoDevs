const aprovadosArr = [
  "Ana Carolina Dos Santos Coelho",
  "Ana Kamille Marques Ilha Bezerra",
  "Ana Valéria Tavares Santos",
  "Ana Vitória Oliveira da Motta",
  "Anna Carolina Nunes de Oliveira",
  "Camila Ribeiro Martins",
  "Carlos  Eduardo Moreira Mendes da Silva",
  "Daniel Martins Ferreira",
  "Daniel Oliveira da Silva",
  "Danyel da Silva Coelho",
  "Elizabeth da Chagas Gomes",
  "Felipe Lopes Silva",
  "Gabriely Carris mota",
  "Gisele de jesus alves da Silva",
  "Gustavo Olivera Alves",
  "Ian Da Silva Santana",
  "Italo Vitor da Silva Almeida",
  "Jakeise karla do nascimento",
  "Juliana Da Silva Nunes",
  "Kauã Mateus de Góes",
  "Lara Helena de Menezes Barboza",
  "Laiane pereira da costa",
  "Larissa Guerrenho de Melo",
  "Layssa Mendes de Lima",
  "Luiz Felipe Gomes Cordeiro da Silva",
  "Lívia de Souza Corrêa",
  // "MARIA EDUARDA DE ANDRADE VIEIRA",
  "Maria Eduardo de Andrade Vieira",
  "Marcelo Gonçalves",
  "Matheus Martins de Neris",
  "Matheus Trajano da Silva Manhães",
  "Mylena Ilha Deniz de Alcantara",
  "Nairton Estevam Alves da Silva",
  "Pedro Augusto Fernandes Leite",
  "Rayara Dos Santos Ramos Duarte",
  "Samuel dos Santos de Almeida",
  "Thayllon Marcelo Galdino de mello",
  "Weslley Caetano Alves de Souza",
  // "YAGO BRITO GONÇALVES DA SILVA",
  "Yago Brito Gonçalves da Silva",
  "Yhago Vieira Mendes Vila Nova",
  "Yuri De Souza Moraes",
];

aprovadosArr.forEach(function (aprovado, index) {
  console.log(aprovado, index);
  const container = document.querySelector(".lista-aprovados");

  var aprovadoElem = document.createElement("ol")
  aprovadoElem.textContent = aprovado;
  aprovadoElem.classList.add("aprovado-name");

  container.appendChild(aprovadoElem)
});