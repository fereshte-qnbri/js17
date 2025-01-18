function listOfColours(colours) {
  // Write your code here...
  const ul = document.createElement('ul');

  colours.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
