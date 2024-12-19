/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Nov 2024
 * This program uses nested loops
*/

let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.B, function () {
    loopCounter1 = 0
    loopCounter2 = 0
    sprite = game.createSprite(0, 0)
    sprite.on()
    basic.pause(500)

    while (loopCounter1 < 4) {
        while (loopCounter2 < 5) {
            sprite.move(1)
            loopCounter2 = loopCounter2 + 1
            basic.pause(500)
        }
        sprite.turn(Direction.Right, 90)
        loopCounter1 = loopCounter1 + 1
        loopCounter2 = 0
    }
    basic.showIcon(IconNames.Happy)
})
