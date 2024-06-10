// BEGIN
export default function prettify(document) {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        const newChildren = [];
        div.childNodes.forEach(child => {
            if (child instanceof Text) {
                const p = document.createElement('p');
                p.textContent = child.textContent.trim();
                newChildren.push(p);
            } else {
                newChildren.push(child);
            }
        });
        div.innerHTML = '';
        newChildren.forEach(newChild => div.appendChild(newChild));
    });
}

// END