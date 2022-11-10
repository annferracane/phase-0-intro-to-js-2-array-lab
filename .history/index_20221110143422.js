// Write your solution here!

let cats; 

function cats() {
    cats = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendCat(name) {
    cats = cats().push(name);
}

function destructivelyPrependCat(name) {
    cats = cats().unshift(name);
}

function destructivelyRemoveLastCat() {
    cats = cats().pop();
}

function destructivelyRemoveFirstCat() {
    cats = cats().shift();
}

function appendCat(name) {
    const catsNew = [...cats, name]
    return catsNew;
}

function prependCat(name) {
    const catsNew = [name, ...cats]
    return catsNew;
}