// Получаем кнопки "Заказать звонок" и "Сделать заказ"
const showFormButtons = document.querySelectorAll('.show-form-button');

// Получаем контейнер формы и оверлей
const contactFormContainer = document.getElementById('contactFormContainer');
const overlay = document.getElementById('overlay');

// Получаем кнопку для закрытия формы
const closeFormButton = document.getElementById('closeFormButton');

// Функция, которая открывает форму и отображает оверлей
function openForm() {
    contactFormContainer.style.display = 'block';
    overlay.style.display = 'block';
}

// Функция, которая закрывает форму и скрывает оверлей
function closeForm() {
    contactFormContainer.style.display = 'none';
    overlay.style.display = 'none';
}

// Прикрепляем обработчики событий к кнопкам
showFormButtons.forEach((button) => {
    button.addEventListener('click', openForm);
});

closeFormButton.addEventListener('click', closeForm);
