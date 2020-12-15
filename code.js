var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3e159d93-4928-4c8d-a27e-738a9da1fa9f","4e996591-988e-4adf-a9c1-9e2cf9ebc418","0dea56f3-e02a-4400-bdb6-774645e8ad62","6a434a45-6dbb-429a-b3bd-fe0282436690","1067fc09-6346-4819-8a1d-0748ab1bc884","f1897519-26f1-48e2-a9ab-94af6afe80b3","89ee2917-5bcf-4bba-a2ee-77ac32cbb754","610287c6-d4a0-4edd-9a9b-6f43e76cffa4","b7e7517b-81b1-4fe1-b716-96414fc1c1a4","794490a5-432a-490e-b0e9-ab8290f8bea4","81936389-c445-4701-b463-ab394894c6ac","fdda4388-51eb-4094-a9b2-eedea113e589","9ee1a58c-09ab-4024-b7ef-39fbfe21ead1","3afdaf1d-6bda-4125-a173-249910aab9d0","886e6e00-e2d4-4ef4-9a73-1a2b52808324","da56b1aa-5245-4627-ae8b-725f24cc44ee","2aa9417d-0c9c-4a65-b03c-46566385d328","0d246be0-4f2d-40f0-82b1-bcc28b0cd5b1"],"propsByKey":{"3e159d93-4928-4c8d-a27e-738a9da1fa9f":{"name":"kid_44_suit_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb/category_characters/kid_44_suit.png","frameSize":{"x":152,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb/category_characters/kid_44_suit.png"},"4e996591-988e-4adf-a9c1-9e2cf9ebc418":{"name":"alienBlue_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png"},"0dea56f3-e02a-4400-bdb6-774645e8ad62":{"name":"Green","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":12,"version":"T0WvpsZqTn0qkj6bdVP1W6_FWjK99FHQ","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":98},"rootRelativePath":"assets/0dea56f3-e02a-4400-bdb6-774645e8ad62.png"},"6a434a45-6dbb-429a-b3bd-fe0282436690":{"name":"alienGreen_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg/category_characters/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":45,"version":"gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg/category_characters/alienGreen_walk.png"},"1067fc09-6346-4819-8a1d-0748ab1bc884":{"name":"ghost_standing_1","sourceUrl":null,"frameSize":{"x":72,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"yeVEAyOmVq1fraHl14GzDgKyk1EpSyuR","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":158},"rootRelativePath":"assets/1067fc09-6346-4819-8a1d-0748ab1bc884.png"},"f1897519-26f1-48e2-a9ab-94af6afe80b3":{"name":"bunnywalk1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","categories":["animals","characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"89ee2917-5bcf-4bba-a2ee-77ac32cbb754":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"610287c6-d4a0-4edd-9a9b-6f43e76cffa4":{"name":"bee1","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"t7gaDHbgXpFgUjuk3rHpZgOUrf1m.cjW","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":50},"rootRelativePath":"assets/610287c6-d4a0-4edd-9a9b-6f43e76cffa4.png"},"b7e7517b-81b1-4fe1-b716-96414fc1c1a4":{"name":"bee2","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"rSCTgENBWXD1uSuO5Q3hkZaKayKWHlwn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":50},"rootRelativePath":"assets/b7e7517b-81b1-4fe1-b716-96414fc1c1a4.png"},"794490a5-432a-490e-b0e9-ab8290f8bea4":{"name":"cave1","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"81936389-c445-4701-b463-ab394894c6ac":{"name":"ufoblue","sourceUrl":"assets/api/v1/animation-library/gamelab/T0CBjWHIQsAN4upUHC2WntNdyzWhON48/category_gameplay/ufoBlue.png","frameSize":{"x":91,"y":91},"frameCount":1,"looping":true,"frameDelay":2,"version":"T0CBjWHIQsAN4upUHC2WntNdyzWhON48","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":91},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T0CBjWHIQsAN4upUHC2WntNdyzWhON48/category_gameplay/ufoBlue.png"},"fdda4388-51eb-4094-a9b2-eedea113e589":{"name":"coinsilver","sourceUrl":"assets/api/v1/animation-library/gamelab/OcRvbgIR3zbB.MSS_TJVmCNwaJDxEZa2/category_gameplay/coin_silver.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"OcRvbgIR3zbB.MSS_TJVmCNwaJDxEZa2","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OcRvbgIR3zbB.MSS_TJVmCNwaJDxEZa2/category_gameplay/coin_silver.png"},"9ee1a58c-09ab-4024-b7ef-39fbfe21ead1":{"name":"coingold","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"3afdaf1d-6bda-4125-a173-249910aab9d0":{"name":"spring","sourceUrl":null,"frameSize":{"x":147,"y":112},"frameCount":3,"looping":true,"frameDelay":15,"version":"Zw3zabOZF8k6erR9gidAz2hvpmhEl7n6","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":294,"y":224},"rootRelativePath":"assets/3afdaf1d-6bda-4125-a173-249910aab9d0.png"},"886e6e00-e2d4-4ef4-9a73-1a2b52808324":{"name":"spring2","sourceUrl":null,"frameSize":{"x":147,"y":112},"frameCount":3,"looping":true,"frameDelay":15,"version":"I74PXLrFhH1dyXgHK_ukrgHcu0prsG6l","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":294,"y":224},"rootRelativePath":"assets/886e6e00-e2d4-4ef4-9a73-1a2b52808324.png"},"da56b1aa-5245-4627-ae8b-725f24cc44ee":{"name":"spring3","sourceUrl":null,"frameSize":{"x":147,"y":112},"frameCount":3,"looping":true,"frameDelay":15,"version":"6Zgg_2ulsWHIHp6VYtbWwg.ZWIgX8agc","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":294,"y":224},"rootRelativePath":"assets/da56b1aa-5245-4627-ae8b-725f24cc44ee.png"},"2aa9417d-0c9c-4a65-b03c-46566385d328":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"},"0d246be0-4f2d-40f0-82b1-bcc28b0cd5b1":{"name":"cave","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"}}};
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

var wall1=createSprite(10,200,10,380);
wall1.shapeColor="red";
var wall2=createSprite(390,200,10,380);
wall2.shapeColor="red";
var wall3=createSprite(201,385,380,10);
wall3.shapeColor="red";
var wall4=createSprite(201,15,380,10);
wall4.shapeColor="red";
var wall5=createSprite(120,219,10,320);
wall5.shapeColor="blue";
var wall6=createSprite(255,181,10,320);
wall6.shapeColor="orange";
var block1=createSprite(94,219,40,10);
block1.shapeColor="green";
var block2=createSprite(35,150,40,10);
block2.shapeColor="green";
var block3=createSprite(35,280,40,10);
block3.shapeColor="green";
var block4=createSprite(94,80,40,10);
block4.shapeColor="green";
var wall11=createSprite(50,320,70,7); 
wall11.shapeColor="yellow";
var Green=createSprite(30,350,70,7);
Green.setAnimation("Green");
Green.scale = 0.6;
var bee1=createSprite(218,280,70,7);
bee1.setAnimation("bee1");
bee1.scale=0.6;
var bee2=createSprite(160,110,70,7);
bee2.setAnimation("bee2");
bee2.scale=0.6;
var ufoblue=createSprite(350,50,70,7);
ufoblue.setAnimation("ufoblue");
ufoblue.scale=0.6;
var spring=createSprite(370,215,70,7);
spring.setAnimation("spring");
spring.scale=0.6;
var spring2=createSprite(278,160,70,7);
spring2.setAnimation("spring2");
spring2.scale=0.6;
var spring3=createSprite(278,280,70,7);
spring3.setAnimation("spring3");
spring3.scale=0.6;


block1.velocityX =2;
block1.velocityY=0;
block2.velocityX=-2;
block2.velocityY=0;
block3.velocityY=0;
block3.velocityX =-2; 
block4.velocityY=0;
block4.velocityX =2;
  
bee1.velocityY=3;
bee1.velocityX=0;
bee2.velocityY=-3;
bee2.velocityX=0;

function draw(){
background("lightskyblue");

createEdgeSprites();

Green.bounceOff(wall11);
Green.bounceOff(wall6);
Green.bounceOff(wall5);
Green.bounceOff(wall4);
Green.bounceOff(wall3);
Green.bounceOff(wall2);
Green.bounceOff(wall1);
bee1.bounceOff(wall3);
bee1.bounceOff(wall4);
bee2.bounceOff(wall3);
bee2.bounceOff(wall4);
block1.bounceOff(wall1);
block1.bounceOff(wall5);
block2.bounceOff(wall1);
block2.bounceOff(wall5);
block3.bounceOff(wall1);
block3.bounceOff(wall5);
block4.bounceOff(wall1);
block4.bounceOff(wall5);

if (Green.isTouching(ufoblue)) {

textSize(30);
textFont("ALGERIAN");
text("YOU WIN!!", 44,46);
  
}
  
  if (keyDown("right")){
  Green.x =Green.x + 2;
playSound("assets/category_bell/quiet_belloctave_notification.mp3", false);
}

if (keyDown("left")){
 Green.x =Green.x -2;
 playSound("assets/category_bell/quiet_belloctave_notification.mp3", false);
}

if (keyDown("up")){
  Green.y = Green.y -2;
  playSound("assets/category_bell/quiet_belloctave_notification.mp3", false);
}

if (keyDown("down")){
 Green.y = Green.y + 2;
 playSound("assets/category_bell/quiet_belloctave_notification.mp3", false);
}

//reset the Green if it touches block1,block2,block3,block4,bee1,bee2,spring,spring2,spring3;
if (Green.isTouching(block1) || Green.isTouching(block2) || Green.isTouching(block3)  || Green.isTouching(bee1) || Green.isTouching(bee2) || Green.isTouching(spring) || Green.isTouching(spring2) ||Green.isTouching(spring3)) {

Green.x=30;
Green.y=350;

playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
}
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
