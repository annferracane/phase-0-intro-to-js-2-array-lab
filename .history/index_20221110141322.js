// Write your solution here!
let cats;

function cats() {
    cats = ["Milo", "Otis", "Garfield"];
    return cats;
}

function destructivelyAppendCat(name) {
    cats = cats().push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats = cats().upshift(name);
    return cats;
}