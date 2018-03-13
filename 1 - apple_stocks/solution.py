# Write an efficient function that takes stock_prices_yesterday 
# and returns the best profit I could have made from 1 purchase 
# and 1 sale of 1 Apple stock yesterday.

# Solution 1
# Time / Space
# O(n) / O(1)
def get_max_profit(stock_prices):

    # Calculate the max profit
    firstTwoStocks = [stock_prices[0],stock_prices[1]]
    
    prices = [min(firstTwoStocks), max(firstTwoStocks)]
    
    for stock in stock_prices[2:]:
        if stock < prices[0]:
            prices[0] = stock
        elif stock > prices[1]:
            prices[1] = stock
    
    profit = abs(prices[0] - prices[1])
    return profit

stock_prices = [10, 11, 12, 13, 20]
print get_max_profit(stock_prices)

# Solution 2
# Time / Space
# O(n) / O(1)
def get_max_profit(stock_prices_yesterday):
    if len(stock_prices_yesterday) < 2:
        raise ValueError('Getting a profit requires at least 2 prices')

    # We'll greedily update min_price and max_profit, so we initialize
    # them to the first price and the first possible profit
    min_price  = stock_prices_yesterday[0]
    max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]

    # Start at the second (index 1) time
    # We can't sell at the first time, since we must buy first,
    # and we can't buy and sell at the same time!
    # If we started at index 0, we'd try to buy *and* sell at time 0.
    # This would give a profit of 0, which is a problem if our
    # max_profit is supposed to be *negative*--we'd return 0.
    for current_time in xrange(1, len(stock_prices_yesterday)):
        current_price = stock_prices_yesterday[current_time]

        # See what our profit would be if we bought at the
        # min price and sold at the current price
        potential_profit = current_price - min_price

        # Update max_profit if we can do better
        max_profit = max(max_profit, potential_profit)

        # Update min_price so it's always
        # the lowest price we've seen so far
        min_price  = min(min_price, current_price)

    return max_profit