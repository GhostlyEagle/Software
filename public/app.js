document.addEventListener("DOMContentLoaded", () => {
  const tarefaInput = document.getElementById("tarefaInput");
  const adicionarTarefaBtn = document.getElementById("adicionarTarefa");
  const listaTarefas = document.getElementById("listaTarefas");
  const fraseInput = document.getElementById("fraseInput");
  const adicionarFraseBtn = document.getElementById("adicionarFrase");
  const listaFrases = document.getElementById("listaFrases");
  const resultadoTestes = document.getElementById("resultadoTestes");
  
  const tarefas = [];
  
  // Perguntas fáceis
  const perguntas = [
      "Qual é a sua cor favorita?",
      "Qual animal você gostaria de ter como pet?",
      "Se você pudesse viajar para qualquer lugar do mundo, para onde iria?"
  ];
  
  // Fatos interessantes
  const fatos = [
      "O sol é uma estrela.",
      "As abelhas são responsáveis por polinizar 1/3 dos alimentos que consumimos.",
      "Os polvos têm três corações."
  ];

  // Renderizar tarefas
  function renderizarTarefas() {
      listaTarefas.innerHTML = "";
      tarefas.forEach((tarefa, index) => {
          const li = document.createElement("li");
          li.textContent = tarefa;
          li.appendChild(criarBotaoRemover(index));
          listaTarefas.appendChild(li);
      });
  }

  // Criar botão de remover
  function criarBotaoRemover(index) {
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.addEventListener("click", () => {
          tarefas.splice(index, 1);
          renderizarTarefas();
      });
      return botaoRemover;
  }

  // Adicionar tarefa do input
  adicionarTarefaBtn.addEventListener("click", () => {
      const tarefaNova = tarefaInput.value.trim();
      if (tarefaNova) {
          tarefas.push(tarefaNova);
          tarefaInput.value = "";
          renderizarTarefas();
      }
  });

  // Renderizar perguntas
  function renderizarPerguntas() {
      const perguntasDiv = document.getElementById("perguntas");
      perguntasDiv.innerHTML = "";
      perguntas.forEach((pergunta, index) => {
          const div = document.createElement("div");
          div.innerHTML = `<label>${pergunta}</label> <input type="text" id="resposta${index}" placeholder="Sua resposta...">`;
          perguntasDiv.appendChild(div);
      });
  }

  // Renderizar fatos interessantes
  function renderizarFatos() {
      const fatosDiv = document.getElementById("fatos");
      fatosDiv.innerHTML = "";
      fatos.forEach((fato, index) => {
          const div = document.createElement("div");
          div.innerHTML = `<input type="checkbox" id="fato${index}"> <label>${fato}</label>`;
          fatosDiv.appendChild(div);
      });
  }

  // Adicionar frase
  adicionarFraseBtn.addEventListener("click", () => {
      const fraseNova = fraseInput.value.trim();
      if (fraseNova) {
          const li = document.createElement("li");
          li.textContent = fraseNova;
          listaFrases.appendChild(li);
          fraseInput.value = "";
      }
  });

  // Testes
  document.getElementById("executarTestes").addEventListener("click", () => {
      executarTestes();
  });

  function executarTestes() {
      let resultados = [];
      let testesPassados = true;

      // Teste 1: Verificar tarefas iniciais
      if (tarefas.length === 0) {
          resultados.push("Teste 1: A lista de tarefas está vazia inicialmente.");
      } else {
          resultados.push("Teste 1: Falha - A lista de tarefas não está vazia.");
          testesPassados = false;
      }

      // Teste 2: Adicionar uma tarefa
      const tarefaTeste = "Nova Tarefa";
      tarefas.push(tarefaTeste);
      if (tarefas.includes(tarefaTeste)) {
          resultados.push("Teste 2: Adição de tarefa funciona.");
      } else {
          resultados.push("Teste 2: Falha - Tarefa não foi adicionada.");
          testesPassados = false;
      }

      // Teste 3: Remover uma tarefa
      tarefas.splice(0, 1); // Remove a primeira tarefa
      if (tarefas.length === 0) {
          resultados.push("Teste 3: Remoção de tarefa funciona.");
      } else {
          resultados.push("Teste 3: Falha - Tarefa não foi removida.");
          testesPassados = false;
      }

      // Exibir resultados
      resultadoTestes.innerHTML = resultados.join("<br>") + "<br><strong>" + (testesPassados ? "Todos os testes passaram!" : "Alguns testes falharam.") + "</strong>";
  }

  // Renderiza as tarefas e atividades iniciais
  renderizarTarefas();
  renderizarPerguntas();
  renderizarFatos();
});
