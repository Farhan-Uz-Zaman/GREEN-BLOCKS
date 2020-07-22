function Ball() {
    this.x = 50;
    this.y = 150;
    this.w = 35;
    this.h = 35
    this.gravity = 1;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.w, this.h);
    }
    this.update = function () {
        this.y += this.gravity;
    }
    this.atbase = function () {
        if (this.y == 690) {
            return true;
        }
    }
}