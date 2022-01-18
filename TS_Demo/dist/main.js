"use strict";
window.onload = function () {
    let name = "Sebastian";
    let age = 40;
    let isMarried = true;
    console.log(name);
    console.log(isMarried);
    let sum = add(10, 20);
    console.log("Summan blev", sum);
    let person = {
        name: "Sebastian",
        age: 42,
        married: true,
    };
    let wife = {
        name: "Hanna",
        age: 41,
        married: true,
    };
    let daugther = {
        name: "Astrid",
        age: 11,
        married: false,
    };
    let numbers = [1, 1, 2, 3, 5, 8, 13, 21];
    let persons = [person, wife, daugther];
    for (let i = 0; i < persons.length; i++) {
        let container = document.createElement("div");
        let heading = document.createElement("h3");
        let span = document.createElement("span");
        heading.innerHTML = persons[i].name;
        span.innerHTML = persons[i].age.toString();
        container.appendChild(heading);
        container.appendChild(span);
        document.body.appendChild(container);
    }
};
function add(x, y) {
    return x + y;
}
