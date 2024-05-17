const dollarExRate=26;

let resultString=`1 \t $ = ${dollarExRate} \t грн.\n`;

for (let i = 10; i <= 100; i += 10) {
    resultString += `${i}\t $ = ${i * dollarExRate} \t грн.\n`;
}

console.log(resultString);

