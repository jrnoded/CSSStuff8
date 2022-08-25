const path = document.getElementById("pathtext");
const keyboard = document.getElementsByClassName("key");

function clicked(s) {
  
    path.innerHTML = getSelected();
    switch (s) {
        case "clear":
            path.innerHTML = "";
            break;
        case "left":
        case "right":
        case "up":
        case "down":
        case "select":
            // let p = "";
            // if (path.innerHTML === "") {
            //     p = s;
            // } else {
            //     p = "," + s;
            // }
            // path.innerHTML += p;
            break;
    }
}

function getSelected() {
    for (const k of keyboard) {
        if (k.classList.contains("selected")) {
           console.log(k.dataset.chr)
            return k.dataset.chr;
        }
    }
    return "what";
}
function clearSelected() {
    for (const k of keyboard) {
        k.classList.remove("selected");
        if (k.dataset.chr === "d") {
            k.classList.add("selected");
        }
    }
}

let ta = new Array();

const keys = {
    q: { x: 0, y: 0 },
    w: { x: 0, y: 1 },
    e: { x: 0, y: 2 },
    r: { x: 0, y: 3 },
    t: { x: 0, y: 4 },
    y: { x: 0, y: 5 },
    u: { x: 0, y: 6 },
    i: { x: 0, y: 7 },
    o: { x: 0, y: 8 },
    p: { x: 0, y: 9 },
    a: { x: 1, y: 0 },
    s: { x: 1, y: 1 },
    d: { x: 1, y: 2 },
    f: { x: 1, y: 3 },
    g: { x: 1, y: 4 },
    h: { x: 1, y: 5 },
    j: { x: 1, y: 6 },
    k: { x: 1, y: 7 },
    z: { x: 2, y: 0 },
    x: { x: 2, y: 1 },
    c: { x: 2, y: 2 },
    v: { x: 2, y: 3 },
    b: { x: 2, y: 4 },
    n: { x: 2, y: 5 },
    m: { x: 2, y: 6 },
};

let word = "car";
currentkey = keys["q"];

for (let c of word) {
    let key = keys[c];

    let vertical = key.x - currentkey.x;
    let horizontal = key.y - currentkey.y;
    let vert = "down";
    let horz = "right";
    if (vertical < 0) vert = "up";
    if (horizontal < 0) horz = "left";
    vertical = Math.abs(vertical);
    while (vertical > 0) {
        ta.push(vert);
        vertical--;
    }
    horizontal = Math.abs(horizontal);
    while (horizontal > 0) {
        ta.push(horz);
        horizontal--;
    }
    currentkey = key;
    ta.push("Select");
}
path.innerHTML = word + " " + String(ta.join(", ")).toLowerCase();
