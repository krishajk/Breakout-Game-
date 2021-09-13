var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c8846922-425c-4318-8096-eadc69157faf","3c4300c9-02bc-4d73-9d8d-062eca2066a5","fc35d224-d880-49da-8b48-71ab9ab47850"],"propsByKey":{"c8846922-425c-4318-8096-eadc69157faf":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CA6eqTGSNeBUl25Dv4v6dvo3.2HlssOR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c8846922-425c-4318-8096-eadc69157faf.png"},"3c4300c9-02bc-4d73-9d8d-062eca2066a5":{"name":"tenny","categories":["sports"],"frameCount":1,"frameSize":{"x":393,"y":394},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:36:22 UTC","pngLastModified":"2021-01-05 19:36:31 UTC","version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","sourceSize":{"x":393,"y":394},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"},"fc35d224-d880-49da-8b48-71ab9ab47850":{"name":"tenny_copy_1","categories":["sports"],"frameCount":1,"frameSize":{"x":393,"y":394},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:36:22 UTC","pngLastModified":"2021-01-05 19:36:31 UTC","version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","sourceSize":{"x":393,"y":394},"loadedFromSource":true,"saved":false,"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="lightpink";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="lightyellow";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="lightpink";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="lightyellow";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="lightpink";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="lightyellow";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="lightpink";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="lightyellow";



var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="lightyellow";

var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="lightpink";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="lightyellow";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="lightpink";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="lightyellow";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="lightpink";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="lightyellow";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="lightpink";

paddle=createSprite(200,390,100,20)
paddle.shapeColor=("lightblue")
ball=createSprite(200,200,20,20)

ball.scale=0.9

background("green")

function draw() {


   
  background("white");
  paddle.x=mouseX;
 
 if (keyDown("space")) {
      ball.velocityX=2
      ball.velocityY=2
    }
    
  if (ball.isTouching(paddle)) {
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_5.mp3", false);
}
  createEdgeSprites()
ball.bounceOff(topEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge)
 ball.bounceOff(paddle)
  

  drawSprites();
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
