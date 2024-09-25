/**
 * @jest-environment jsdom
 */

const { addTask } = require('../public/app');

beforeEach(() => {
  document.body.innerHTML =
    '<input type="text" id="task-input">' +
    '<button id="add-task-btn"></button>' +
    '<ul id="task-list"></ul>';
});

test('adiciona uma tarefa à lista', () => {
  const input = document.getElementById('task-input');
  const button = document.getElementById('add-task-btn');
  input.value = 'Nova Tarefa';
  button.click();
  expect(document.querySelector('li').textContent).toBe('Nova TarefaRemover');
});

test('remove uma tarefa da lista', () => {
  // Adiciona uma tarefa
  addTask('Tarefa a ser removida');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  const taskItem = document.querySelector('li');
  taskItem.appendChild(removeButton);
  document.querySelector('button').click(); // Clique para remover
  expect(document.querySelector('li')).toBeNull();
});
