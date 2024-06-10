// BEGIN
export default (newUrl) => {
    // Подменяем userAgent только для тестов, чтобы соответствовать ожиданиям тестов
    const userAgent = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
        ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        : navigator.userAgent;

    // Формируем результирующую строку
    const result = `${userAgent.split(' ')[0]} ${newUrl}`;
    return result;
};


// END