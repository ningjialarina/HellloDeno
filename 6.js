let firstName = prompt("Enter the first name:");
let lastName = prompt ("Enter the last name:");


let randomName = Math.random();

if (randomName < 0.5) {
    console.log(firstName);
} else {
    console.log(lastName);
}