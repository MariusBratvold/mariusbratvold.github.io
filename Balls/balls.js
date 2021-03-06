//@ts-check

function setup() {
    let divBoard = document.getElementById("board");
    let divMain = document.getElementById("main");
    let btnStart = document.getElementById("start");
    btnStart.addEventListener("click", startSpillet);

    function startSpillet(e) {
        divBoard.removeChild(btnStart);
        let baller = [];
        for (let i = 0; i < 5; i++) {
            let ball = document.createElement("div");
            ball.className = "ball";
            let x = Math.random() * 520;
            let y = Math.random() * 520;
            let vx = Math.random() * 10 - 5;
            let vy = Math.random() * 10 - 5;
            ball.dataset.vx = String(vx);
            ball.dataset.vy = String(vy);
            ball.dataset.x = String(x);
            ball.dataset.y = String(y);
            ball.style.left = x + "px";
            ball.style.top = y + "px";
            divBoard.appendChild(ball);
            baller.push(ball);
        }

        setInterval(animering, 50);

        function animering() {
            for (let i = 0; i < 5; i++) {
                let ball = baller[i];
                ball.dataset.x = +ball.dataset.x + +ball.dataset.vx;
                ball.dataset.y = +ball.dataset.y + +ball.dataset.vy;
                ball.style.left = ball.dataset.x + "px";
                ball.style.top = ball.dataset.y + "px";
                if (+ball.dataset.x > 510) {
                    ball.dataset.vx = -ball.dataset.vx;
                }
                if (+ball.dataset.y > 510) {
                    ball.dataset.vy = -ball.dataset.vy;
                }
                if (+ball.dataset.x < 0) {
                    ball.dataset.vx = -ball.dataset.vx;
                }
                if (+ball.dataset.y < 0) {
                    ball.dataset.vy = -ball.dataset.vy;
                }
            }
        }
    }

}