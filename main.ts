let myImage: Image = null
let lista: Image[] = []
input.onGesture(Gesture.Shake, function () {
    myImage = lista[randint(0, lista.length - 1)]
    myImage.showImage(0, 400)
})
basic.forever(function () {
    lista = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `),
    images.createImage(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    ]
})
