let colorbit_51bit2 = 0
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
basic.forever(function () {
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
})
basic.forever(function () {
    colorbit_51bit2 += 1
})
