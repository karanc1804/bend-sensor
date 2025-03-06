let current = 0
let frequency = 0
basic.forever(function () {
    current = pins.analogReadPin(AnalogPin.P0)
    frequency = Math.map(current, 0, 1023, 300, 1500)
    music.playTone(frequency, music.beat(BeatFraction.Sixteenth))
    led.plotBarGraph(
    current,
    1023
    )
    basic.pause(50)
})
