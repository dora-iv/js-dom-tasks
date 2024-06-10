export default () => {
    // BEGIN
    // Находим кнопку по идентификатору
    const button = document.getElementById('alert-generator');
    // Находим контейнер алертов
    const alertsContainer = document.querySelector('.alerts');

    // Устанавливаем обработчик события click на кнопке
    button.addEventListener('click', () => {
        // Создаем новый элемент алерта
        const newAlert = document.createElement('div');
        newAlert.classList.add('alert', 'alert-primary');

        // Определяем количество уже существующих алертов
        const existingAlertsCount = alertsContainer.querySelectorAll('.alert').length;

        // Задаем текст для нового алерта
        newAlert.textContent = `Alert ${existingAlertsCount + 1}`;

        // Добавляем новый алерт в начало контейнера
        alertsContainer.prepend(newAlert);
    });
    // END
};
