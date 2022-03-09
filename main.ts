let Temperatura = 0
music.setVolume(37)
basic.forever(function () {
    Temperatura = input.temperature()
    basic.showNumber(Temperatura + 0)
    if (Temperatura < 30) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (Temperatura > 30) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (Temperatura < 30) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    if (Temperatura > 30) {
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
})
