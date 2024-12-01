const clients = [2, 2, 3, 3, 4, 4];
const checkOutTills = 2;

/**
 * @param {Array} customers
 * @param {number} n
 */
function queueTime(customers, n) {
  const timeOfTills = new Array(n).fill(0);
  for (let index in customers) {
    timeOfTills[timeOfTills.indexOf(Math.min(...timeOfTills))] +=
      customers[index];
  }
  return Math.max(...timeOfTills);
}
console.log(queueTime(clients, checkOutTills));
