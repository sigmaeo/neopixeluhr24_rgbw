let strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
strip.setBrightness(30)
strip.show()
strip.showRainbow(1, 360)
basic.pause(1000)
strip.clear()
let sekunde = 0
let minute = 0
let stunde = 0
basic.forever(function () {
    strip.clear()
    sekunde += 1
    if (sekunde == 60) {
        sekunde = 0
        minute += 1
        if (minute == 60) {
            minute = 0
            stunde += 1
            if (stunde == 24) {
                stunde = 0
            }
        }
    }
    strip.setPixelWhiteLED(23 - sekunde / 2.5, 100)
    strip.setPixelColor(23 - minute / 2.5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(23 - stunde, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1)
})
