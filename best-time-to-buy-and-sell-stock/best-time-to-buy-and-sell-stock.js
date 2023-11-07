/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let profit = 0
    
//     for(let i = 1; i < prices.length; i++){
//         if(prices[i] > prices[i - 1]){
//             profit = profit + (prices[i] - prices[i - 1])
//         }
//     }
//     return profit
    
//      let profit = 0;
//   let buyDay = 0;
//   let sellDay = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       if (prices[i] - prices[buyDay] > profit) {
//         profit = prices[i] - prices[buyDay];
//         sellDay = i;
//       }
//     } else {
//       buyDay = i;
//     }
//   }
//     return profit
    
    let minPrice = prices[0]
    let max = 0
    
    for(let i = 1; i < prices.length; i++){
        const sellPrice = prices[i]
        const profit = sellPrice - minPrice
        max = Math.max(max, profit)
        
        minPrice = Math.min(minPrice, prices[i])
    }
    return max
};