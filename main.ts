input.onPinPressed(TouchPin.P0, function () {
    switch2 = !(switch2)
})
let switch2 = false
switch2 = false
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        if (switch2 == true) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        switch2 = false
    }
})
