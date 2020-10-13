# let the user know what's going on
print ("Welcome to JB's Story")
print ("Answer the questions below to play.")
print ("-----------------------------------")

# variables containing all of your story info
dogBreed1 = input("What is your favorite dog breed?: ")
dogBreed2 = input("What is your second favorite dog breed?: ")
color1 = input("what is your favorite color?: ")
color2 = input("what is your second favorite color?: ")
food1 = input("what is your favorite junk food?: ")
food2 = input("what is your fovorite healthy food?: ")
place1 = input("What's your favorite place to run around?: ")
animal1 = input("what animal are you afraid of?: ")

# this is the story. it is made up of strings and variables.
# the \ at the end of each line let's the computer know our string is a long one
# (a whole paragraph!) and we want to continue more code on the next line. 
# play close attention to the syntax!

story = "I have two dogs. One is Butter and the other is Wooyu. Butter is " + dogBreed1 + " and Wooyu is " + dogBreed2 + "" \
". Butter has " + color1 + " wiry and woolly hair, on the other hand, Wooyu has " + color2 + " extra soft hair. Butter always try to eat " \
"" + \
"" + food1 + " but it is now allowed. Wooyu’s favorite treat is " \
"" + food2 + " They love to run around in " + place1 + " " \
". They really barks a lot when they meet " + animal1 + "."

# finally we print the story
print (story)
