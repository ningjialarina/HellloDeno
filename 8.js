
function test(temperature){
    if (temperature < 33) {
        console.log("cold");
    }
    else if (temperature >= 34 && temperature <= 66) {
        console.log("warm");
    }
    else if (temperature >= 67 && temperature <= 99) {
        console.log("hot");
    } 
}


for (let i=0; i<99 ; i++ ) {

    let temperature = prompt("What's the temperature?:");
    temperature = Number(temperature);
    test(temperature);

}

