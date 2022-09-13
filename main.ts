input.onButtonPressed(Button.A, function () {
    RandomNumber = randint(0, 1)
    if (RandomNumber == 0) {
        basic.showString("TRUTH")
    } else if (RandomNumber == 1) {
        basic.showString("DARE")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    ARROW_VARIABLE = randint(0, 3)
    if (ARROW_VARIABLE == 0) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (ARROW_VARIABLE == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (ARROW_VARIABLE == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (ARROW_VARIABLE == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
let ARROW_VARIABLE = 0
let RandomNumber = 0
basic.showString("TRUTH OR DARE")
