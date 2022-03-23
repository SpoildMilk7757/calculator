input.onPinPressed(TouchPin.P0, function () {
    Number_2 = Number_1
    Number_1 = 0
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("AC")
    Number_1 = 0
    Number_2 = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Number_2)
    basic.showString("+")
    basic.showNumber(Number_1)
    basic.showString("=")
    basic.showNumber(Number_2 + Number_1)
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Number_2)
    basic.showString("-")
    basic.showNumber(Number_1)
    basic.showString("=")
    basic.showNumber(Number_2 - Number_1)
})
let Number_2 = 0
let Number_1 = 0
music.playTone(196, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Quarter))
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
Number_1 = 0
Number_2 = 0
