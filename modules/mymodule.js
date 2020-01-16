function appendToElem(elem, text) {
    elem.innerHTML += text;
}

export function addHTML(selector, text) {
    appendToElem(document.querySelector(selector), text);
}
