function convertUSDToCNY(usd) {
    const exchangeRate = 7.12; // 1 USD to CNY exchange rate
    const cny = usd * exchangeRate;
    console.log(`${usd} USD is equivalent to ${cny} CNY.`);
}

let value = prompt("What's the value?")

value = Number(value);

convertUSDToCNY(value);


