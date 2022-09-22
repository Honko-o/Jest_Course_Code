function checkInput(string) {
    if (string === undefined || string.trim() === '') {
        string = 'Unknown';
    }

    if (string.startsWith(' ') || string.endsWith(' ')) {
        string = string.trim();
    }

    if (string.startsWith('_')) {
        string = string.slice(1);
    }

    if (string.endsWith('s')) {
        string = 'Saleh';
    }

    return string;
}

module.exports = checkInput;
