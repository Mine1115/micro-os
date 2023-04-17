basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . . # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # # . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # # . . #
    # # . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # # . . #
    # # # . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # # . . #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . . #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
let mineu_sleted = 1
// 0 = no
// 1 = yes
basic.forever(function () {
    let in_game = 0
    while (in_game == 0) {
        if (mineu_sleted == 1) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                `)
            while (mineu_sleted == 1) {
                if (input.buttonIsPressed(Button.B)) {
                    mineu_sleted = 2
                }
            }
        }
        if (mineu_sleted == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                # . # . .
                . # . . .
                # . # . .
                . . . # .
                `)
            while (mineu_sleted == 2) {
                if (input.buttonIsPressed(Button.A)) {
                    mineu_sleted = 1
                }
            }
        }
    }
})
