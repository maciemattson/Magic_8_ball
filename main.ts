let RandomNumber = 0
input.onGesture(Gesture.Shake, function () {
    basic.showString("WELCOME TO 8 BALL")
    basic.showString("ASK ME ANYTHING!")
    basic.showString("SHAKE ME TO GET AN ANSWER")
    RandomNumber = randint(0, 3)
    if (RandomNumber == 0) {
        basic.showString("UNCLEAR")
    } else if (RandomNumber == 1) {
        basic.showString("YES")
    } else if (RandomNumber == 2) {
        basic.showString("NO")
    } else if (RandomNumber == 3) {
        basic.showString("MAYBE SO")
    }
})
basic.forever(function () {
	
})
