function gameFruties() {
    const fruties = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    fruties = fruties.sort(() => Math.random() - 0.5);
    alert(`Запомни слова: ${fruties}`);

    const frutiesOne = prompt (`Каокое было первое слово?`);

    const frutiesTwo = prompt (`Какое было последнее слово?`);

    if (frutiesOne == list[0] && frutiesTwo === list[list.length-1]) {
        alert(`Угадал`)

    } else if (frutiesOne == list[0]) {
        alert(`Вы были близки к победе!`)

    } else if (frutiesTwo === list[list.length-1]) {
        alert(`Вы были близки к победе!`)

    } else {
        alert(`Не угадал`)
    }
}
