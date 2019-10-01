const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let binaryWords = expr.split('**********');
    for (let i = 0; i < binaryWords.length; i++) {
        // красивая регулярка, написал сам, но не подошла))
        // let binaryWordNoPadding = binaryWords[i].replace(/(?<=(10|11|^))0{2,}1/g, '1');
        let morzeWord = '';
        let letterLength = 0;
        for (let z = 1; z < binaryWords[i].length; z += 2) {
            let binaryUnit = binaryWords[i].charAt(z - 1) + binaryWords[i].charAt(z);
            if (binaryUnit == '10') {
                morzeWord += '.';
            } else if (binaryUnit == '11') {
                morzeWord += '-';
            }
            letterLength++;
            if (letterLength % 5 == 0 && morzeWord in MORSE_TABLE) {
                result += MORSE_TABLE[morzeWord];
                morzeWord = '';
            }
        }
        result += i != binaryWords.length - 1 ? ' ' : '';
    }
    return result;
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");

module.exports = {
    decode
}