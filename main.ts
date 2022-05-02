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

    basic.showString("X =", 50)
    basic.showNumber(x, 50)

    basic.showString("Y = ", 50)
    basic.showNumber(y, 50)

    basic.clearScreen()
}
