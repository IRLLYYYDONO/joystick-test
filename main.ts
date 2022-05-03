let x = 0
let y = 0
let x_con = 0
let y_con = 0
let cordinateX = 2
let cordinateY = 2
let num = 0

while (true){
    
    basic.pause(500)

    led.plot(cordinateX, cordinateY)

    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P0)
    num = pins.digitalReadPin(DigitalPin.P2)

    x_con = pins.map(x, 0, 1023, 0, 200)
    y_con = pins.map(y, 0, 1023, 0, 200)


    //if (x > 500){
    //    basic.clearScreen()
    //    cordinateX -= 1
    //    led.plot(cordinateX, cordinateY)
    //} else if (y > 500) {
    //    basic.clearScreen()
    //    cordinateY += 1
    //    led.plot(cordinateX, cordinateY)
    //} else if (x < 400) {
    //   basic.clearScreen()
    //    cordinateX += 1
    //    led.plot(cordinateX, cordinateY)
    //} else if (y < 400) {
    //    basic.clearScreen()
    //    cordinateY -= 1
    //    led.plot(cordinateX, cordinateY)
    //}

    basic.showNumber(num)

}

