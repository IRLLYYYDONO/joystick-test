let x = 0
let y = 0
let x_con = 0
let y_con = 0
let cordinateX = 2
let cordinateY = 2

while (true){
    basic.pause(1000)

    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P0)

    x_con = pins.map(x, 0, 1023, 0, 200)
    y_con = pins.map(y, 0, 1023, 0, 200)

    if (x_con > 100) {
        led.unplot(cordinateX, cordinateY)
        cordinateX += 0.5
        led.plot(cordinateX, cordinateY)
    } else if (y_con > 100) {
        led.unplot(cordinateX, cordinateY)
        cordinateY += 0.5
        led.plot(cordinateX, cordinateY)
    } else if (x_con < 100) {
        led.unplot(cordinateX, cordinateY)
        cordinateX += 0.5
        led.plot(cordinateX, cordinateY)
    } else if (y_con < 100) {
        led.unplot(cordinateX, cordinateY)
        cordinateY += 0.5
        led.plot(cordinateX, cordinateY)
    } else{
        led.plot(cordinateX, cordinateY)
    }
}
