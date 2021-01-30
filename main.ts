let strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
strip.setBrightness(30)
strip.show()
strip.showRainbow(1, 360)
basic.pause(1000)
strip.clear()
let sekunde = 0
let minute = 23
let stunde = 6
basic.forever(function () {
    sekunde += 1
    if (sekunde == 60) {
        sekunde = 0
        minute += 1
        if (minute == 60) {
            minute = 0
            stunde += 1
            if (stunde == 12) {
                stunde = 0
            }
        }
    }
    strip.clear()
    for (let Index = 0; Index <= 23; Index++) {
        strip.setPixelWhiteLED(Index, 10)
    }
    strip.setPixelColor(23 - stunde * 2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(23 - minute / 2.5, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(23 - sekunde / 2.5, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(100)
})
