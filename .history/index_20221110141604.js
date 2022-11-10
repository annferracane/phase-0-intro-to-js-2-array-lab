// Write your solution here!

function cats() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats;
}

function destructivelyAppendCat(name) {
    const cats = cats().push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cost cats = cats().unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cost cats = cats().pop();
}