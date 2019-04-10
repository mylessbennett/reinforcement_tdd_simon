const echo = (phrase) => {
    return phrase;
};

const shout = (phrase) => {
    return phrase.toUpperCase();
};

const repeat = (phrase, count) => {
    let repeatedPhrase = '';
    for (let i = 0; i < count ; i++) {
        repeatedPhrase += phrase;
        if (i != (count - 1)) {
            repeatedPhrase += " ";
        }
    };
    return repeatedPhrase;
};

const startOfWord = (phrase, i) => {
    return phrase.slice(0, i);
};

const firstWord = (phrase) => {
    let splitPhrase = phrase.split(" ");
    console.log(splitPhrase);
    return splitPhrase[0];
};

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
