let heart = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    heart += 1
})
basic.forever(function () {
    if (heart >= 2) {
        if (true) {
            basic.showString("CPR active for 10 seconds")
        }
        for (let index = 0; index <= 8; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            music.playTone(494, music.beat(BeatFraction.Whole))
            basic.pause(555)
            basic.clearScreen()
            basic.pause(555)
        }
        basic.showLeds(`
            . . . . .
            . # . . .
            # . # . #
            . . . # .
            . . . . .
            `)
        music.playMelody("E D G F B A C5 B ", 389)
        basic.pause(1000)
        basic.clearScreen()
        heart = 0
    }
})
