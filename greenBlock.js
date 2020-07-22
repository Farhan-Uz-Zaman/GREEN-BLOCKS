function GreenBlock() {

    this.y = random(150, 650);
    this.h = random(40, 100);
    this.x = width;
    this.w = 40;
    this.speed = 3;

    this.show = function () {
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h);

    }
    this.update = function () {
        this.x -= this.speed;
    }
    this.hits = function (ball) {
        if (ball.x > this.x && ball.x < this.x + this.w) {
            if (ball.y > this.y && ball.y < this.y + this.h) {
                return true;
            }
        }
    }

}