const inputElement = document.getElementById('todoText');
const buttonElement = document.getElementById('addTodo');

buttonElement.addEventListener('click', () => {
    const currentText = inputElement.value;

    console.log(currentText);
    alert("The text inside is " + currentText);
});

