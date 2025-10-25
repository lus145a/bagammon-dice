input.onButtonPressed(Button.A, function () {
    nummer1 = randint(1, 6)
    nummer2 = randint(1, 6)
    OLED.writeStringNewLine("" + nummer1 + " +/og " + nummer2 + "=" + (nummer1 + nummer2))
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
})
let nummer2 = 0
let nummer1 = 0
nummer1 = 1
nummer2 = 0
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    if (nummer1 == nummer2) {
        OLED.newLine()
        OLED.writeStringNewLine("Du slog dobbelt!")
        nummer1 += 1
    }
})
