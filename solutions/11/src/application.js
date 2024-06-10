import 'whatwg-fetch';

const getAutoCompleteData = async (url, search) => {
    try {
        const response = await fetch(`${url}?search=${search}`);
        const data = await response.json();
        return data.length > 0 ? data : ['Nothing'];
    } catch (error) {
        console.error('Error fetching autocomplete data:', error);
        return ['Nothing'];
    }
};

const updateAutoCompleteList = (listElement, items) => {
    listElement.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
};

const setupAutoComplete = (inputElement, listElement, url) => {
    inputElement.addEventListener('input', async (e) => {
        const search = e.target.value.trim();
        const data = await getAutoCompleteData(url, search);
        updateAutoCompleteList(listElement, data);
    });
};

const run = () => {
    const autoCompletes = document.querySelectorAll('input[data-autocomplete]');

    autoCompletes.forEach((inputElement) => {
        const url = inputElement.getAttribute('data-autocomplete');
        const listName = inputElement.getAttribute('data-autocomplete-name');
        const listElement = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);

        setupAutoComplete(inputElement, listElement, url);
    });
};

export default run;
    // END

