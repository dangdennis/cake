# Given a list of integers, find the highest product 
# you can get from three of the integers.

# Time / Space
# O(n) / O(n)

# Key concept: 
# use a greedy algorithm design / approach, meaning we build up the most optimal 
# solution at every step: "Suppose we could up with the answer in one pass through the input,
# what additional values can we store or keep updated?"

# Solution 1
def highest_product_of_3(list_of_ints):
    
    if len(list_of_ints) < 3:
        raise ValueError('Less than 3 items!')

    # Calculate the highest product of 3 integers
    highest_three = [1, 1, 1]
    lowest_two = [-1, -1]
    
    for num in list_of_ints:
        if num > 0:
            if num > highest_three[0]:
                highest_three.insert(0, num)
                highest_three.pop()
            elif num > highest_three[1]:
                highest_three.insert(1, num)
                highest_three.pop()
            elif num > highest_three[2]:
                highest_three[2] = num
        elif num < 0:
            if num < lowest_two[0]:
                lowest_two.insert(0, num)
                lowest_two.pop()
            elif num < lowest_two[1]:
                lowest_two[1] = num
        
    first_product = highest_three[0] * highest_three[1] * highest_three[2]
    second_product = highest_three[0] * lowest_two[0] * lowest_two[1]
    
    print(highest_three, lowest_two)
    
    if first_product > second_product:
        return first_product
    else:
        return second_product

list_of_ints = [1, 10, -5, 1, -100,2,3,6, -99, -5, 10, 11, 20]
print highest_product_of_3(list_of_ints)


# Solution 2
def highest_product_of_3(list_of_ints):
    if len(list_of_ints) < 3:
        raise ValueError('Less than 3 items!')

    # We're going to start at the 3rd item (at index 2)
    # so pre-populate highests and lowests based on the first 2 items.
    # We could also start these as None and check below if they're set
    # but this is arguably cleaner
    highest = max(list_of_ints[0], list_of_ints[1])
    lowest  = min(list_of_ints[0], list_of_ints[1])
    highest_product_of_2 = list_of_ints[0] * list_of_ints[1]
    lowest_product_of_2  = list_of_ints[0] * list_of_ints[1]

    # Except this one--we pre-populate it for the first *3* items.
    # This means in our first pass it'll check against itself, which is fine.
    highest_product_of_3 = list_of_ints[0] * list_of_ints[1] * list_of_ints[2]

    # Walk through items, starting at index 2
    for i in xrange(2, len(list_of_ints)):
        current = list_of_ints[i]

        # Do we have a new highest product of 3?
        # It's either the current highest,
        # or the current times the highest product of two
        # or the current times the lowest product of two
        highest_product_of_3 = max(highest_product_of_3,
                                   current * highest_product_of_2,
                                   current * lowest_product_of_2)

        # Do we have a new highest product of two?
        highest_product_of_2 = max(highest_product_of_2,
                                   current * highest,
                                   current * lowest)

        # Do we have a new lowest product of two?
        lowest_product_of_2 = min(lowest_product_of_2,
                                  current * highest,
                                  current * lowest)

        # Do we have a new highest?
        highest = max(highest, current)

        # Do we have a new lowest?
        lowest = min(lowest, current)

return highest_product_of_3