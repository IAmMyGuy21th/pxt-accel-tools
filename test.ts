// tests go here; this will not be compiled when this package is used as an extension.
scene.setBackgroundImage(sprites.background.lanterns)
let mySprite = sprites.create(sprites.builtin.coin0, SpriteKind.Player)
let prompt = sprites.create(sprites.builtin.computer1, SpriteKind.Player)
prompt.setPosition(80, 30)
forever(function () {
    mySprite.setPosition(Math.map(accelTools.fixAccel(controller.acceleration(ControllerDimension.X)), -1023, 1023, 0, 160), Math.map(accelTools.fixAccel(controller.acceleration(ControllerDimension.Y)), -1023, 1023, 0, 120))
    prompt.sayText(`${accelTools.fixAccel(controller.acceleration(ControllerDimension.X))}, ${accelTools.fixAccel(controller.acceleration(ControllerDimension.Y))}, ${accelTools.fixAccel(controller.acceleration(ControllerDimension.Z))}`)
})
