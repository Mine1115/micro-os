basic.show_leds("""
    # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # . . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . .
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # . . . .
        # . . . .
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # . . . .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # . . # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # . # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # # . . #
        # . . . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # # . . #
        # # . . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # # . . #
        # # # . #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # # . . #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . . #
        # # . # #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # . # #
        # # . # #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
""")
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")
basic.clear_screen()
mineu_sleted = 1
# 0 = no
# 1 = yes

def on_forever():
    in_game = 0
    while in_game == 0:
        while mineu_sleted == 1:
            pass
basic.forever(on_forever)
