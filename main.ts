namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
function game_information () {
    enemyHP = 3
    info.player4.setScore(1000)
    xvelocity = 150
    yvelocity = 0
    equipgun = true
    info.setLife(3)
    pacifist = true
    info.startCountdown(180)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (xvelocity == 150 && yvelocity == 0) {
        xvelocity = 0
        yvelocity = -150
    } else if (xvelocity == 0 && yvelocity == -150) {
        xvelocity = -150
        yvelocity = 0
    } else if (xvelocity == -150 && yvelocity == 0) {
        xvelocity = 0
        yvelocity = 150
    } else if (xvelocity == 0 && yvelocity == 150) {
        xvelocity = 150
        yvelocity = 0
    } else if (xvelocity == 0 && yvelocity == 0) {
        xvelocity = 150
        yvelocity = 0
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite2) {
    if (canJump == false) {
        mySprite.vy = 0
        double_jump = true
    }
    if (equipgun == true) {
        if (xvelocity == 150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . c . . . . 
. . . . . . f f f f . 1 c . . . 
. . . . . f f f f f 1 . e . . . 
. . . . . f f f f f f . e . . . 
. . . . f . f f f f 1 . c . . . 
. . . . . . f f f f . c . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (xvelocity == -150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . c . . . . . . . . . . . 
. . . c 1 . f f f f . . . . . . 
. . . e . 1 f f f f f . . . . . 
. . . e . f f f f f f . . . . . 
. . . c . 1 f f f f . f . . . . 
. . . . c . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (yvelocity == -150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c e e c . . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (yvelocity == 150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 1 f f . . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . . c e e c . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    pacifist = false
    if (projectile) {
        sprite.destroy()
        enemyHP += -1
        if (enemyHP == 2) {
            otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f . f f f f . . . . 
. . . . . . . f f f f f . . . . 
. . . . . . f . f 1 f . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f . f f f . . . . 
. . . . . . f f f . f f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`)
        }
        if (enemyHP == 1) {
            otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . f f . . . . . 
. . . . . . f . f . . f . . . . 
. . . . . . . f f f . f . . . . 
. . . . . . f . f 1 f . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f . . f f . . . . . 
. . . . . . f . f . f f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`)
        }
        if (enemyHP <= 0) {
            sprite.destroy()
            otherSprite.destroy()
            enemyHP = 3
        }
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    if (pacifist == true) {
        game.splash("Pacifist award")
    }
    if (game.runtime() <= 60000) {
        game.splash("<1 minute award")
    }
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.player4.score() >= 1) {
        if (equipgun == true) {
            info.player4.changeScoreBy(-1)
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . f 1 1 f . . . . . . 
. . . . . . f 1 1 f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, xvelocity, yvelocity)
            projectile.ay = 30
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . f f f f c . 1 . . . 
. . . . . f f f f f f . 1 . . . 
. . . . f c f f f f . f . . . . 
. . . . c . f f f f 1 f . . . . 
. . . . c . f f f f . . . . . . 
. . . . . 1 f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    } else if (info.player4.score() >= 1) {
        if (equipgun == true) {
            mySprite.say("no arrow", 500)
        }
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 28))
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    game.splash("nice try")
    game.reset()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.ashes, 100)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f . . . . . . f . . . . 
. . . . f . f f f f . f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . f . . . . . . . 
`)
    if (canJump == true) {
        if (mySprite.vy == 0) {
            mySprite.vy = -150
            pause(30)
            mySprite.vy = 0
            double_jump = true
        }
    } else {
        if (double_jump == true) {
            double_jump = false
            pause(30)
            mySprite.vy = -150
        }
    }
})
info.player1.onLifeZero(function () {
    game.reset()
})
let projectile: Sprite = null
let double_jump = false
let canJump = false
let pacifist = false
let equipgun = false
let yvelocity = 0
let xvelocity = 0
let enemyHP = 0
let enemi: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
`, SpriteKind.Player)
mySprite.ay = 350
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b a f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b a f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b a f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b f b b a f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b 2 2 2 2 2 f 
f 2 2 2 2 b b b b 2 2 2 2 2 2 2 2 b b b 2 b b b f b b 2 2 2 2 2 2 2 2 f 
f 2 2 2 b b b b b b 2 2 b 2 2 2 2 4 f 4 2 f b b b b b b b 2 2 2 2 2 2 f 
f 2 2 2 b b b b b b 2 b b b 2 2 2 b b b 2 b b b b b b b b f 2 2 2 2 2 f 
f 2 2 b b b b b 4 b b b b b 2 2 2 b b b 2 b b b b 2 f b b f 2 2 2 2 2 f 
f 2 2 b b b b b f b b b b b 2 b 2 f b f 2 2 b b 2 2 2 b b f 2 2 2 2 2 f 
f 2 2 b f b b b b b b b b b b b 2 4 b 4 2 2 2 b 2 2 2 b b f 2 2 2 2 2 f 
f 2 2 b b b b 2 b b b b f b b b b b f b 2 2 2 2 2 2 2 b b f 2 2 2 2 2 f 
f 2 2 b b b b 2 2 b b b b b b f b b b b b 2 2 2 2 2 f b b 2 2 2 2 2 2 f 
f 2 2 b b b b 2 2 2 2 2 2 2 2 2 b b b b b b 2 2 2 2 f b b 2 2 2 2 2 2 f 
f 2 2 b f b b f 2 b b b b b b b b f f f b b 2 2 2 2 2 b b 2 2 2 2 2 2 f 
f 2 2 b f b 4 f b b b b b b b b b f 2 2 f b b f 2 f b b b 2 2 2 2 2 2 f 
f 2 b b f 4 b f b b b b b b f b b 2 2 2 2 f b b b b b b b 2 2 2 2 2 2 f 
f 2 b b f b b f b b b b b b b 2 2 2 2 2 2 2 b b b b b b f 2 2 2 2 2 2 f 
f 2 b b f b b f b b f b b b 2 2 2 2 2 2 2 2 f b f b f b 2 2 2 2 2 2 2 f 
f 2 b b f b b f b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b b 4 b 4 f b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b 4 4 f b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c 3 c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c 3 c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
scene.setTile(4, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f 1 f f f f 1 f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(10, img`
5 f f f f f f f f f f f f f f 5 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
5 f f f f f f f f f f f f f f 5 
`, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 28))
for (let value of scene.getTilesByType(4)) {
    enemi = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f 1 f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.place(value, enemi)
    enemi.vx = 100
    enemi.setFlag(SpriteFlag.BounceOnWall, true)
}
game_information()
game.onUpdate(function () {
    if (equipgun == false) {
        if (mySprite.vx > 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . f . . . . . . 
`],
            20,
            true
            )
        } else if (mySprite.vx == 0) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    }
})
game.onUpdate(function () {
    if (equipgun == true) {
        if (xvelocity == 150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . c . . . . 
. . . . . . f f f f . 1 c . . . 
. . . . . f f f f f 1 . e . . . 
. . . . . f f f f f f . e . . . 
. . . . f . f f f f 1 . c . . . 
. . . . . . f f f f . c . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (xvelocity == -150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . c . . . . . . . . . . . 
. . . c 1 . f f f f . . . . . . 
. . . e . 1 f f f f f . . . . . 
. . . e . f f f f f f . . . . . 
. . . c . 1 f f f f . f . . . . 
. . . . c . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (yvelocity == -150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c e e c . . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        } else if (yvelocity == 150) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f 1 1 f f . . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . . c f f f f c . . . . . 
. . . . . . c e e c . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    }
})
