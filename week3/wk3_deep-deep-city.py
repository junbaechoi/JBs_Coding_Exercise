# an object describing our player
player = { 
    "name": "p1", 
    "score": 0,
    "items" : ["milk"],
    "friends" : [],
    "location" : "start"
}

rooms = {
    "room1" : "a city subway",
    "room2" : "a city path",
    "room3" : "an alternate path"
}

import random # random numbers
import sys # system stuff for exiting

def rollDice(minNum, maxNum, difficulty):
    # any time a chance of something might happen, let's roll a die
    result = random.randint(minNum,maxNum)
    print("You roll a: " + str(result) + " out of " + str(maxNum))

    if result <= difficulty:
        print("trying again....")
        
        input("press enter >")
        rollDice(minNum, maxNum, difficulty)

    return result

def printGraphic(name):
    if (name == "mouse"):
       
        print('  (q\_/p)       ')
        print('   /. .\        ')
        print('  =\_t_/=   __  ')
        print('   /   \   (    ')
        print('  ((   ))   )   ')
        print('  /\) (/\  /    ')
        print('  \  Y  /-"     ')
        print('   nn^nn        ')

    if (name == "coin"):
        print(  '       ▓▓▓▓▓▓▓▓▓▓       ')
        print(  '     ▓▓          ▓▓     ')
        print(  '   ▓▓    ░░▓▓░░░░░░▓▓   ')
        print(  ' ▓▓    ░░▓▓▓▓▓▓░░░░░░▓▓ ')
        print(  ' ▓▓  ░░░░▓▓░░░░░░░░░░▓▓ ')
        print(  ' ▓▓  ░░░░░░▓▓░░░░░░░░▓▓ ')
        print(  ' ▓▓  ░░░░░░░░▓▓░░░░░░▓▓ ')
        print(  ' ▓▓  ░░░░▓▓▓▓▓▓░░░░░░▓▓ ')
        print(  '   ▓▓  ░░░░▓▓░░░░░░▓▓   ')
        print(  '     ▓▓░░░░░░░░░░▓▓     ')
        print(  '       ▓▓▓▓▓▓▓▓▓▓       ')
        print(  '                        ')
        print(  '        the coin        ')

    if (name == "flower"):
        print( '              ')
        print( '    /\^/`\    ')
        print( '   | \/   |   ')
        print( '   | |    |   ')
        print( '    \ \  /   ')
        print( '     \\//     ')
        print( '      ||      ')
        print( '      ||      ')
        print( '      ||      ')
        print( '      ||      ')
        print( '  |\  ||  |\  ')
        print( '  | | ||  | | ')
        print( '  | | || / /  ')
        print( '   \ \||/ /   ')
        print( '    `\\//`    ')
        print( '   ^^^^^^^^   ')
        print( 'it is a flower') # this one is escaped!



    if (name == "vampire"):
        print( '                 __.......__                ')
        print( '               .-:::::::::::::-.            ')
        print( '            .::::::::::::::::.              ')
        print( '          .:::      `:::      `:::.         ')
        print( '     .:\  ::    ^^^  `::  ^^^   :::  /`.    ')
        print( '    :   \ ::   _.__       __._   :: /   ;   ')
        print( '   :     \`: .: ___\     /___ `. ::/     ;  ')
        print( '  :       /\   (_|_)\   /(_|_)   /\       ; ')
        print( '  :      / .\   __.: ) ( `.__   /. \      ; ')
        print( '  :      \ (        {   }        ) /      ; ')
        print( '   :      `-(     .  ^"^  .     )-"      ;  ')
        print( '    `.       \  . <`-._.-> .  /       ."    ')
        print( '      `.      \    \;`.";/    /      ."     ')
        print( '        `._    `-._       _.-"    _."       ')
        print( '         ."`-.__ ."`-._.-"`. __.-"`.        ')
        print( '       .:       `.         .:       `.      ')
        print( '     .:           `-.   .-:           `.    ')
        print( 'He transformed to little bit creepy vampire ')



    if (name == "title"):
        print('---------------------------------------------------------------------------')
        print(' ______   _______  _______  _______    ______   _______  _______  _______  ')
        print('|      | |       ||       ||       |  |      | |       ||       ||       | ')
        print('|  _    ||    ___||    ___||    _  |  |  _    ||    ___||    ___||    _  | ')
        print('| | |   ||   |___ |   |___ |   |_| |  | | |   ||   |___ |   |___ |   |_| | ')
        print('| |_|   ||    ___||    ___||    ___|  | |_|   ||    ___||    ___||    ___| ')
        print('|       ||   |___ |   |___ |   |      |       ||   |___ |   |___ |   |     ')
        print('|______| |_______||_______||___|      |______| |_______||_______||___|     ')
        print('                                                                           ')
        print('                 _______  ________  ________   __    __                    ')
        print('                |       ||__    __||__    __| |  \  /  |                   ')
        print('                |    ___|   |  |      |  |     \  \/  /                    ')
        print('                |   |       |  |      |  |      \    /                     ')
        print('                |   |       |  |      |  |       |  |                      ')
        print('                |   |___  __|  |__    |          |  |                      ')
        print('                |_______||________|   |__|       |__|                      ')
        print('                                                                           ')
        print('---------------------------------------------------------------------------')



def gameOver():

    printGraphic("mouse")

    print("-------------------------------")
    print("to be continued!")
    print("name: " + player["name"])
    print("score: " + str(player["score"]))
    return

def strangePath():
    print("The path looks dark but you move forward anyway...")
    print("You stop when you notice a beautiful flower.")
    printGraphic("flower")
    input("press enter >")

    print("You consider your options.")
    print("options: [ pick flower , keep going , back to subway]")

    pcmd = input(">")

    if (pcmd == "pick flower"): 
        print("You pick the flower...")
        print("Let's roll a dice to see what happens next!")

        difficulty = 10
        roll = rollDice(0, 20, difficulty)
        
        if (roll >= difficulty):

            print("It looks like a magic coin. Right here in the city!")
            print("Do you take the coin?")
            
            printGraphic("coin")

            pcmd = input("yes or no >")

            if (pcmd == "no"):
                print("You leave it there.")
                strangePath()

            elif (pcmd == "yes"):
                print("You pick it up and return to the subway.")
                player["items"].append("coin")
                player["score"] += 100
                citySubway()

            else:
                print("You leave it there.")
                citySubway()

        else:
            print("Turns out you picked the worst number.")
            strangePath()

    elif (pcmd == "keep going"):
        print("You keep going forward... you have a strange feeling")
        print("that you keep seeing the same flowers over and over...")
        strangePath()

    elif (pcmd == "back to subway"):
        print("You decide to go back.")
        pcmd = input(">")
        citySubway()

    else:
        print("You can't do that!")
        strangePath()


def cityPath():
    print("The city path leads you down a beautiful path of flowers.")
    print("It is a very nice day.")
    input("press enter >")

    printGraphic("mouse")
    print("You walk for a while and see a small mouse jump onto the path")
    print("from the flowers. 'Who travels in my kingdom?', says the mouse.")
    print("...He can talk!")
    input("press enter >")
    
    print("You consider your options.")

    if ("coin" in player["items"]):
        print("options: [ look around , talk to mouse , give coin, run ]")
    else:
        print("options: [ go back, talk to mouse, run ]")

    pcmd = input(">")

    # option 1: look at the mouse
    if (pcmd == "go back"):
        print("You go back...")
        citySubway() # try again
    
    # option 2: talk to the mouse
    elif (pcmd == "talk to mouse"):
        print("You try and talk to the super cute mouse!")
        print("Let's roll a dice to see what happens next!")
        input("press enter to roll >")

        difficulty = 5
        chanceRoll = rollDice(0,20,difficulty) # roll a dice between 0 and 20

        # if the roll is higher than 5... 75% chance
        if (chanceRoll >= difficulty):
            print("It's you're lucky day! He want's to be your friend.")
            player["score"] += 50
        else:
            print("You try to talk to the mouse, but... it looks at you confused.")
            cityPath() # try again
        
        # nested actions and ifs
        pcmd = input("be friends with the super cute mouse? yes or no >")

        # yes
        if (pcmd == "yes"):

            print("The super cute mouse becomes your friend!")

            player["friends"].append("super cute mouse")
            player["score"] = int(player["score"]) + 100 # conversion
            print("Your score increased to: " + str(player["score"]))
            
            gameOver()

        # no
        elif (pcmd == "no"):
            print("The super cute mouse runs away!")
            cityPath()
        
        # try again
        else:
            cityPath()

    elif (pcmd == "give coin"):
        print("You give the coin to the super cute mouse!")
        input("press enter>")
        printGraphic("coin")
        gameOver()


    # option 3: run
    elif (pcmd == "run"):
        print("You run!")
        citySubway() # back to start

    # try again
    else:
        print("I don't understand.")
        cityPath() # city path

def citySubway():
    print("You stand in a city subway.")
    print("There is a path ahead of you and another path to the right.")
    
    if (("coin" in player["items"]) and not ("mouse" in player["friends"])):
        print("Your options: [ look around, path, give the coin to the homeless man]")

    elif ("coin" in player["items"]):
        print("Your options: [ look around, path, exit ]")

    else:
        print("Your options: [ look around, path , other path , exit ]")

    pcmd = input(">") # user input

    # player options
    if (pcmd == "look around"):
        print("You look around... the path behind you is .... gone?")

        input("press enter >")
        citySubway()

    # path option
    elif (pcmd == "path"):
        print("You take the path.")
        input("press enter >")
        cityPath() # path 1

    # path2 option
    elif (pcmd == "other path"):
        print("You take the other path.")
        input("press enter >")
        strangePath() # path 2

    # exiting / catching errors and crazy inputs
    elif (pcmd == "exit"):
        print("you exit.")
        return # exit the application
        
    elif (pcmd == "give the coin to the homeless man"):
        print("you give the coin to the homeless man... hugh?")
        printGraphic("vampire")

        print("'Your blood smells good. Sleep tight.'\", he said.")# escaped
        return # exit the application, secret ending

    else:
        print("I don't understand that")
        citySubway() # the beginning

def introStory():
    # let's introduce them to our world
    print("Good to see you again! What should I call you?")
    player["name"] = input("Please enter your name >")

    # intro story, quick and dirty (think star wars style)
    print("Welcome to the deep deep city " + player["name"] + "!")
    print("The story so far...")
    print("You were walking to the club after taking the subway with your friends.")
    print("On the way to the club you see a path leading into the familiar street.")
    print("You live in the city, so it's not a big deal to take any path.")
    print("Do you decide to go for it?")

    pcmd = input("please choose yes or no >")

    # the player can choose yes or no
    if (pcmd == "yes"):
        print("You walk down the path, it leads into a city subway...")
        input("press enter >")
        citySubway()
    else:
        print("No? ... That doesn't work here.")
        pcmd = input("press enter >")
        introStory() # repeat over and over until the player chooses yes!



# main! most programs start with this.
def main():
    printGraphic("title") # call the function to print(an image
    introStory() # start the intro

main() # this is the first thing that happens
