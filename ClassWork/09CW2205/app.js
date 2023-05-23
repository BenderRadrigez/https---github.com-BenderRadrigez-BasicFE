function calc_area(){
    //извлечь радиус
    const radius = document.querySelector('#radius').value;

    // рассчет площади
    const result = Math.PI * radius ** 2;

    // вывод результата
    const result_area = document.querySelector('#result-area');
    result_area.textContent = result;
    // сокращенный вариант без объявления переменной
    // document.querySelector('#result-area').textContent = result;
}