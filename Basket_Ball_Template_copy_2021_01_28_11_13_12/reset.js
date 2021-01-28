function ballReset()
{
  ball.x=365;
  ball.y=215;
  ball.setVelocity(0,0);
  gameState = start;
  hoop.changeImage("hoop1",hoopImg1)
}