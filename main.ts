let beat = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    beat += 1
})
basic.forever(function () {
    if (beat >= 2) {
        for (let index = 0; index <= 3; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        beat = 0
    }
})
