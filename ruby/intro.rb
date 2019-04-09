puts("Hello World, Ruby!")

# Variables
num = 12
puts num

# Basic arithmetic
large_num = 100; 
puts large_num * 100
puts 4 * 3 + 12

# Strings
name = "shakepeare"
puts name.upcase
puts name.capitalize 
puts name.length 
puts name.reverse

# Boolean
puts true != false
puts true == false

# Symbols - used to store values of code
puts :symbol.object_id

# Arrays
random_stuff = ["J. Cole", true, :symbol, 12, 86.333]
print random_stuff

random_stuff << "this is the extra item appended to the array"
puts random_stuff 
random_stuff << nil 


# Array methods
puts random_stuff.first
puts random_stuff.last
puts [3, 1, 2].sort  
puts random_stuff.compact
puts random_stuff.index(true)
puts random_stuff.rotate(12)

# Hashes
names = {
    1 => "one",
    2 => "two",
    3 => "three",
    4 => "four"
}

puts names[4]
# Setting a key to a value
names[5] = "five"
puts names[5]