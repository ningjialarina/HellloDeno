function convertUSDToCNY(usd) {
    const exchangeRate = 7.12; 
    const cny = usd * exchangeRate;
    console.log(`${usd} USD is equivalent to ${cny} CNY.`);
}


let value = prompt("What's the value in USD?");

value = Number(value);

convertUSDToCNY(value);
