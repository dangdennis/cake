# Write a function get_products_of_all_ints_except_at_index() 
# that takes a list of integers and returns a list of the products. 

# Time / space
# O(n) / O(n)
def get_products_of_all_ints_except_at_index(int_list):
    
    if len(int_list) < 2:
        raise IndexError("No values available")
    
    products = []
    prev = 1
    # range before the index
    for x in range(0,len(int_list)):
        products.append(prev);
        prev *= int_list[x]
    
    prev = 1
    # range after the index
    for y in range(len(int_list)-1, -1, -1):
        products[y] *= prev
        prev *= int_list[y]
    
    return products

# Time / space
# O(2n) / O(n)
# O(n) / O(n)
int_list = [1, 7, 3, 4]
print get_products_of_all_ints_except_at_index(int_list)

# Their solution
def get_products_of_all_ints_except_at_index(int_list):
    if len(int_list) < 2:
        raise IndexError('Getting the product of numbers at other '
                         'indices requires at least 2 numbers')

    # We make a list with the length of the input list to
    # hold our products
    products_of_all_ints_except_at_index = [None] * len(int_list)

    # For each integer, we find the product of all the integers
    # before it, storing the total product so far each time
    product_so_far = 1
    for i in xrange(len(int_list)):
        products_of_all_ints_except_at_index[i] = product_so_far
        product_so_far *= int_list[i]

    # For each integer, we find the product of all the integers
    # after it. since each index in products already has the
    # product of all the integers before it, now we're storing
    # the total product of all other integers
    product_so_far = 1
    for i in xrange(len(int_list) - 1, -1, -1):
        products_of_all_ints_except_at_index[i] *= product_so_far
        product_so_far *= int_list[i]

    return products_of_all_ints_except_at_index


# O(n^2)
def get_products_of_all_ints_except_at_index(int_list):
    
    products = []
    product = 1
    for x in range(len(int_list)):
        for y in range(len(int_list)):
            if y == x:
                continue
            product *= int_list[y]
        products.append(product)
        product = 1
        

    return products


int_list = [1, 7, 3, 4]
print get_products_of_all_ints_except_at_index(int_list)

