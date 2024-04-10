
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\u2764"
namespace iHuman {
    /**
     * Applying CPR to MarAI.ke
     */
    //% block
    export function CPR(): void {
        let heart = 0
        let time = 0
        let elapsed = 0
        let pause2 = 0
        input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
            heart += 1
        })
        basic.forever(function () {
            if (heart >= 2) {
                if (true) {
                    basic.showString("CPR active for 10 seconds")
                }
                for (let index = 0; index < 9; index++) {
                    time = input.runningTime()
                    basic.showIcon(IconNames.Heart)
                    music.playTone(494, music.beat(BeatFraction.Half))
                    elapsed = input.runningTime() - time
                    pause2 = 555 - elapsed
                    basic.pause(pause2)
                    time = input.runningTime()
                    basic.clearScreen()
                    elapsed = input.runningTime() - time
                    pause2 = 555 - elapsed
                    basic.pause(pause2)
                }
                basic.showIcon(IconNames.StickFigure, 1000)
                music.playMelody("E D G F B A C5 B ", 389)
                basic.pause(1000)
                basic.clearScreen()
                heart = 0
            }
        })
    }
}
