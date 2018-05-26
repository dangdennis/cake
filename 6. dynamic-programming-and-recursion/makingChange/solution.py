#  Write a function that, given:
#     an amount of money
#     a list of coin denominations
# computes the number of ways to make the amount of 
# money with coins of the available denominations. 


# Solution 1 : Recursion + memoization
# Time / space
# O(m * n) / O(n)
class Change:
    
    def __init__(self):
        self.memo = {}

    def no_change(self, amt, denoms, index = 0):
        
        memo_key = str((amt, index))
        if memo_key in self.memo:
            print("grabbing memo[{}]".format(memo_key))
            return self.memo[memo_key]
        
        if amt == 0:
            return 1
        
        if amt < 0:
            return 0
            
        if index == len(denoms):
            return 0
        
        print('checking ways to make {} with {}'.format(amt, denoms[index:]))
        
        current_denom = denoms[index]
        
        num_possibilities = 0
        while amt >= 0:
            num_possibilities += self.no_change(amt, denoms, index + 1)
            amt -= current_denom
        
        self.memo[memo_key] = num_possibilities
        return num_possibilities
        
amount = 4
denominations = [1,2,3]

changeOne = Change()
print(changeOne.no_change(amount, denominations, 0))

# Solution 2: bottom-up algorithm

def change_possibilities_bottom_up(amount, denominations):
    ways_of_doing_n_cents = [0] * (amount + 1)
    ways_of_doing_n_cents[0] = 1

    for coin in denominations:

        for higher_amount in xrange(coin, amount + 1):
            higher_amount_remainder = higher_amount - coin
            ways_of_doing_n_cents[higher_amount] += (
                ways_of_doing_n_cents[higher_amount_remainder]
            )

    return ways_of_doing_n_cents[amount]
