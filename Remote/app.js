const path = document.getElementById("pathtext");

function clicked(s) {
    switch (s) {
        case "clear":
            path.innerHTML = "";
            break;
        case "left":
        case "right":
        case "up":
        case "down":
        case "select":
            let p = "";
            if (path.innerHTML === "") {
                p = s;
            } else {
                p = "," + s;
            }
            path.innerHTML += p;
            break;
    }
}
