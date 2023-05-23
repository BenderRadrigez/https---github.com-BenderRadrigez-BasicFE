function example(){
    // создать новый элемент
    const newElement = document.createElement('h3');
    // добавить содержимое в элемент
    newElement.textContent = 'example works';
    // добавить элемент в документ
    document.body.appendChild(newElement);
}