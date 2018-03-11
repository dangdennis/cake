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