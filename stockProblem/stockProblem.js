// These are stock prices assumed be be in
// chronological order of oldest to newest.
const stockPrices = [9, 11, 8, 5, 7, 10]

let maxProfit = Number.MIN_SAFE_INTEGER

let sales = []
let transactions = []

for (let i=1; i<stockPrices.length; i++) {
  const boughtPrice = stockPrices[i-1]
  const sellPrice = stockPrices[i]
  const profitOf = sellPrice - boughtPrice
  transactions.push({
    buy: boughtPrice,
    sell: sellPrice,
    profit: profitOf
  })
  sales.push(profitOf)
  if (profitOf > maxProfit) {
    maxProfit = profitOf
  }
}

console.log('Stock Prices: ' + stockPrices)
console.log('Max Profit: ' + maxProfit)
console.log('Sales: ' + sales)
console.log('Transactions :' + transactions)
