window.addEventListener("load", init)
function ID(item) {
    return document.getElementById(item)
}
function $(item) {
    return document.querySelectorAll(item) //kell egy index neki, mert tömböt csinál
}
function Class(item) {
    return document.getElementsByClassName(item)
}
function init() {
    drawChessBoard()
    colorDivs()
    for (let i = 0; i < 65; i++) {
        $("article div")[i].addEventListener("click", putChessPiece)
    }
}
function putChessPiece() {
    event.target.innerHTML = "<p>&#x2654;</p>"
}
function drawChessBoard() {
    var txt = ''
    for (let i = 0; i < 65; i++) {
        txt += `<div id="${i}"></div>`
    }
    ID("container").innerHTML += txt

}
function colorDivs() {
    toColorDivs = $("article div")
    var j = 0
    for (let i = 1; i < toColorDivs.length; i++) {
        //var articleWidth = window.getComputedStyle("article").width
        //toColorDivs[i].style.height(articleWidth/8)
        //toColorDivs[i].style.width(articleWidth/8)
        if (Math.floor((i - 1) / 8) % 2 === 0) {
            if (i % 2 == 0) {
                toColorDivs[i].className = "evenColor square"
            } else {
                toColorDivs[i].className = "oddColor square"
            }
        }
        else {
            if (i % 2 == 0) {
                toColorDivs[i].className = "oddColor square"
            } else {
                toColorDivs[i].className = "evenColor square"
            }
        }
    }
}