//Head of the snake
container = document.getElementsByClassName("container")[0];
snakeHead = document.getElementsByClassName("snake-head")[0];
var previousTop;
var previousLeft;


/**
 * Listen the key event
 */
document.addEventListener("keydown", function (event) {


    let leftSnakeHead = getOffset(snakeHead).left;
    let topSnakeHead = getOffset(snakeHead).top;

    previousLeft = getOffset(snakeHead).left;
    previousTop = getOffset(snakeHead).top;

    if (event.key === "ArrowRight") {
        rightArrow(leftSnakeHead);
    } else if (event.key === "ArrowLeft") {
        leftArrow(leftSnakeHead);
    } else if (event.key === "ArrowDown") {
        downArrow(topSnakeHead);
    } else if (event.key === "ArrowUp") {
        topArrow(topSnakeHead);
    }

});

/**
 * Called when right arrow key is pressed
 */
function rightArrow(leftSnakeHead) {
    movePreviousElement();
    snakeHead.style.left = leftSnakeHead + 10 + "px";
}

/**
 * Called when Left arrow key is pressed
 */
function leftArrow(leftSnakeHead) {

    movePreviousElement();
    snakeHead.style.left = leftSnakeHead - 10 + "px";

}

/**
 * Called when Left arrow key is pressed
 */
function topArrow(leftSnakeHead) {

    movePreviousElement();
    snakeHead.style.top = leftSnakeHead - 10 + "px";
}

/**
 * Called when Left arrow key is pressed
 */
function downArrow(leftSnakeHead) {

    movePreviousElement();
    snakeHead.style.top = leftSnakeHead + 10 + "px";
}

/**
 * get the left of the element
 * @param {*} element 
 */
function getOffset(element) {
    return {
        left: element.offsetLeft,
        top: element.offsetTop,
    };
}

/**
 * Create Random div
 */
function createRandomDiv() {
        let newDiv = document.createElement("div");
        newDiv.classList.add("snake-head");
        container.insertBefore(newDiv, container.childNodes[0]);
}
createRandomDiv();
createRandomDiv();
createRandomDiv();

/**
 * Move the previous element
 */
function movePreviousElement() {
    snakeHeadMove = document.getElementsByClassName("snake-head");
    console.log(previousLeft, previousTop, snakeHeadMove)
    newSnakeHeadMove = [];
    for (let i = snakeHeadMove.length - 1; i <= 0; i--) {

        // snakeHeadMove[i-1].style.left = previousLeft + "px";
        // snakeHeadMove[i].style.top = previousTop + "px";
        if (i === length - 1) {
            newSnakeHeadMove[i].style.left = snakeHeadMove[i].style.left + 10 + "px";
        } else {
            newSnakeHeadMove[i].style.left = snakeHeadMove[i + 1].style.left + "px";
        }
    }
    snakeHeadMove = newSnakeHeadMove;



}