
function extractData(root) {
    // Находим все элементы <p>
    const paragraphs = root.getElementsByTagName('p');


    const result = [];
    for (const paragraph of paragraphs) {
        const text = paragraph.textContent.trim();
        if (text) {  // Добавляем только непустые строки
            result.push(text);
        }
    }

    return result;
}


export default extractData;

// END