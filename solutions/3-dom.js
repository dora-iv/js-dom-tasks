// BEGIN
function wrapLinesInParagraphs() {

    const bodyContent = document.body.innerHTML.trim();


    const lines = bodyContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);


    const wrappedLines = lines.map(line => `<p>${line}</p>`).join('');


    document.body.innerHTML = wrappedLines;
}

wrapLinesInParagraphs();
// END