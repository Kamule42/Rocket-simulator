import {Actor, Color, CollisionType} from 'excalibur';

export class Earth extends Actor{
  constructor(x, y){
    super(x, y, 500, 500);
    this.color = Color.Blue;
    this.collisionType = CollisionType.Fixed;
    this.draw = this.doDraw
  }

  private doDraw(ctx, delta){
    ctx.fillStyle = this.color.toString()
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.width, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}