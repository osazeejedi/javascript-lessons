# Calculation Functions Exercise

This exercise focuses on implementing financial calculation functions using sample transaction data. Students will practice array iteration, conditional logic, mathematical operations, and data aggregation.

## 📁 Files Included

- **`calculation-functions-exercise.js`** - Main exercise file with TODO sections to implement
- **`calculation-functions-test.js`** - Automated test suite to verify implementations
- **`README-calculation-functions.md`** - This instruction file

## 🎯 Learning Objectives

Students will learn to:
- Use loops to iterate through arrays of data
- Apply conditional logic to filter data by criteria
- Perform mathematical calculations on financial data
- Group and aggregate data by categories
- Handle edge cases and error conditions
- Write functions that work together to solve complex problems

## 📊 Sample Data

The exercise includes 30 realistic financial transactions across 3 months (January-March 2024):

### January 2024
- **Income**: $4,500 (3 transactions: salary, freelance, investments)
- **Expenses**: $2,190 (7 transactions: housing, food, utilities, transport, entertainment, shopping, healthcare)
- **Net Balance**: $2,310
- **Savings Rate**: 51.33%

### February 2024
- **Income**: $4,250 (3 transactions: salary, freelance, gifts)
- **Expenses**: $2,075 (6 transactions: housing, food, utilities, transport, entertainment, shopping)
- **Net Balance**: $2,175
- **Savings Rate**: 51.18%

### March 2024
- **Income**: $5,000 (3 transactions: salary, freelance, business)
- **Expenses**: $2,725 (8 transactions: housing, food, utilities, transport, entertainment, education, healthcare, shopping)
- **Net Balance**: $2,275
- **Savings Rate**: 45.5%

## 🚀 Getting Started

### Option 1: Node.js Environment
1. Save both JavaScript files in the same directory
2. Open terminal/command prompt in that directory
3. Run the test suite: `node calculation-functions-test.js`
4. You'll see test failures (this is expected - functions need to be implemented)
5. Open `calculation-functions-exercise.js` and implement the functions
6. Re-run tests to check your progress

### Option 2: Browser Environment
1. Create an HTML file that loads both JavaScript files:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculation Functions Exercise</title>
</head>
<body>
    <h1>Calculation Functions Exercise</h1>
    <p>Open browser developer console to see test results.</p>
    
    <script src="calculation-functions-exercise.js"></script>
    <script src="calculation-functions-test.js"></script>
</body>
</html>
```
2. Open the HTML file in a browser
3. Open developer console (F12)
4. Call `runAllTests()` to run all tests
5. Implement functions and re-run tests

## 📝 Functions to Implement

### Phase 1: Basic Functions (Required)

1. **`calculateTotalIncome(month)`**
   - Sum all income transactions for a specific month
   - Expected result for '2024-01': $4,500

2. **`calculateTotalExpenses(month)`**
   - Sum all expense transactions for a specific month
   - Expected result for '2024-01': $2,190

3. **`calculateNetBalance(month)`**
   - Calculate income minus expenses
   - Expected result for '2024-01': $2,310

4. **`calculateSpendingByCategory(month)`**
   - Group expenses by category
   - Expected result for '2024-01': `{housing: 1200, food: 300, utilities: 150, ...}`

5. **`calculateAverageTransaction(type, month)`**
   - Calculate average transaction amount by type
   - Expected result for ('expense', '2024-01'): $312.86

6. **`findLargestExpense(month)`**
   - Find the transaction with the largest expense amount
   - Expected result for '2024-01': Housing transaction ($1,200)

7. **`calculateSavingsRate(month)`**
   - Calculate percentage of income saved
   - Expected result for '2024-01': 51.33%

8. **`getMonthSummary(month)`**
   - Create comprehensive summary using other functions
   - Expected result: Object with all financial metrics

### Phase 2: Bonus Functions (Optional)

9. **`findTransactionsAboveAmount(amount, month)`**
   - Filter transactions above a certain amount

10. **`calculateMonthOverMonthGrowth(currentMonth, previousMonth)`**
    - Compare growth between two months

11. **`getTopSpendingCategories(month, limit)`**
    - Get highest spending categories sorted by amount

## 🧪 Testing Your Implementation

### Run All Tests
```javascript
// Node.js
node calculation-functions-test.js

// Browser console
runAllTests()
```

### Test Individual Functions
```javascript
// Browser console only
testFunction('calculateTotalIncome')
testFunction('calculateTotalExpenses')
```

### Expected Test Results
- **Initial run**: Many tests will fail (functions not implemented)
- **After implementation**: All tests should pass
- **Success rate**: Aim for 100% on basic functions

## 💡 Implementation Tips

### 1. Start Simple
Begin with `calculateTotalIncome()` and `calculateTotalExpenses()`:
```javascript
function calculateTotalIncome(month) {
    let total = 0;
    
    for (let i = 0; i < sampleTransactions.length; i++) {
        const transaction = sampleTransactions[i];
        
        // Check if it's income and in the right month
        if (transaction.type === 'income' && 
            transaction.date.substring(0, 7) === month) {
            total += transaction.amount;
        }
    }
    
    return total;
}
```

### 2. Use Helper Functions
The provided `isTransactionInMonth()` function can help:
```javascript
if (transaction.type === 'income' && 
    isTransactionInMonth(transaction, month)) {
    total += transaction.amount;
}
```

### 3. Debug with Console Logs
```javascript
function calculateTotalIncome(month) {
    console.log('Calculating income for month:', month);
    let total = 0;
    
    for (let transaction of sampleTransactions) {
        if (transaction.type === 'income' && 
            isTransactionInMonth(transaction, month)) {
            console.log('Found income:', transaction.amount);
            total += transaction.amount;
        }
    }
    
    console.log('Total income:', total);
    return total;
}
```

### 4. Handle Edge Cases
```javascript
function calculateTotalIncome(month) {
    // Handle invalid input
    if (!month || typeof month !== 'string') {
        return 0;
    }
    
    let total = 0;
    // ... rest of implementation
    return total;
}
```

### 5. Build Incrementally
- Implement one function at a time
- Test each function before moving to the next
- Use simpler functions to build complex ones

## 🔍 Common Mistakes to Avoid

1. **Forgetting to check transaction type**
   ```javascript
   // Wrong - includes all transactions
   if (isTransactionInMonth(transaction, month)) {
   
   // Correct - filters by type
   if (transaction.type === 'income' && isTransactionInMonth(transaction, month)) {
   ```

2. **Incorrect month comparison**
   ```javascript
   // Wrong - compares full date
   if (transaction.date === month) {
   
   // Correct - compares first 7 characters (YYYY-MM)
   if (transaction.date.substring(0, 7) === month) {
   ```

3. **Not initializing category objects**
   ```javascript
   // Wrong - may cause errors
   categoryTotals[transaction.category] += transaction.amount;
   
   // Correct - initialize if doesn't exist
   if (!categoryTotals[transaction.category]) {
       categoryTotals[transaction.category] = 0;
   }
   categoryTotals[transaction.category] += transaction.amount;
   ```

4. **Division by zero**
   ```javascript
   // Wrong - may cause NaN
   return total / count;
   
   // Correct - handle zero case
   return count > 0 ? total / count : 0;
   ```

## 📈 Progress Tracking

### Beginner Level (Functions 1-3)
- [ ] `calculateTotalIncome()` - Basic loop and conditional
- [ ] `calculateTotalExpenses()` - Similar to income
- [ ] `calculateNetBalance()` - Simple arithmetic using other functions

### Intermediate Level (Functions 4-6)
- [ ] `calculateSpendingByCategory()` - Object manipulation
- [ ] `calculateAverageTransaction()` - Division and counting
- [ ] `findLargestExpense()` - Finding maximum values

### Advanced Level (Functions 7-8)
- [ ] `calculateSavingsRate()` - Percentage calculations
- [ ] `getMonthSummary()` - Combining multiple functions

### Expert Level (Bonus Functions)
- [ ] `findTransactionsAboveAmount()` - Array filtering
- [ ] `calculateMonthOverMonthGrowth()` - Comparative analysis
- [ ] `getTopSpendingCategories()` - Sorting and limiting

## 🎯 Success Criteria

### Minimum Requirements
- All 8 basic functions implemented and tested
- All tests pass for basic functionality
- Code handles edge cases gracefully

### Excellence Indicators
- Clean, readable code with good variable names
- Efficient algorithms (no unnecessary loops)
- Proper error handling
- Bonus functions implemented
- Code follows consistent style

## 🔗 Integration with Capstone Project

Once you've mastered these calculation functions, you can:

1. **Copy functions** to the capstone project's `script.js`
2. **Replace TODO sections** in the capstone with your implementations
3. **Test integration** by adding sample data to the capstone
4. **Build the UI** to display calculated results
5. **Add real-time updates** when users add/edit transactions

## 🆘 Getting Help

### Debugging Steps
1. **Check console** for error messages
2. **Add console.log()** statements to trace execution
3. **Test with simple data** first
4. **Verify expected results** match the test file
5. **Compare your logic** with the sample data

### Common Issues
- **Tests still failing**: Check function names match exactly
- **Wrong results**: Verify your filtering logic
- **NaN results**: Check for division by zero
- **Empty results**: Ensure you're accessing the right data

### Resources
- Review previous lessons on loops, conditionals, and functions
- Check the capstone starter template for similar patterns
- Use browser developer tools for debugging
- Test functions individually before running full suite

---

**Good luck with your implementation! 🚀**

Remember: The goal is not just to pass the tests, but to understand how to work with real financial data using JavaScript fundamentals.
