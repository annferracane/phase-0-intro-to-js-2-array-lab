// Write your solution here!
function cats() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats;
}

function destructivelyAppendCat(name) {
    const cats = cats().push(name);
    return cats;
}
