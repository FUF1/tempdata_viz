let temperatur = 0
let variation = 0
serial.redirectToUSB()
loops.everyInterval(500, function () {
    variation = Math.trunc(randint(-81, 75)) / 100
    temperatur = input.temperature() + variation
    serial.writeLine("" + (temperatur))
})
basic.forever(function () {
	
})
