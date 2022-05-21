export class Ball {
  constructor(obj) {
    this.id = obj.id;
    this.color = obj.color;
    this.radius = obj.radius;
    this.cordX = obj.cordX;
    this.cordY = obj.cordY;
    this.velocityX = obj.velocityX;
    this.velocityY = obj.velocityY;
    this.directionX = obj.directionX;
    this.directionY = obj.directionY;
  }

  moveIt(fieldCords) {
    const elem = document.getElementById(this.id);

    if (this.cordX > fieldCords.width - this.radius || this.cordX < 0) {
      this.directionX = this.directionX * -1;
    }
    if (this.cordY > fieldCords.height - this.radius || this.cordY < 0) {
      this.directionY = this.directionY * -1;
    }

    this.cordX = this.cordX + this.velocityX * this.directionX;
    this.cordY = this.cordY + this.velocityY * this.directionY;
  }
}
