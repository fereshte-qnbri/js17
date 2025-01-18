function todoList(todos) {
  // Write your code here...
  const ul = document.createElement('ul');

  todos.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.todo;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);