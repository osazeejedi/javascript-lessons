/**
 * CALCULATION FUNCTIONS EXERCISE
 * 
 * This exercise focuses on implementing financial calculation functions
 * using sample transaction data. You'll practice:
 * - Array iteration with loops
 * - Conditional logic for filtering
 * - Mathematical operations
 * - Data aggregation and grouping
 * 
 * INSTRUCTIONS:
 * 1. Read through the sample data structure
 * 2. Implement each function following the TODO comments
 * 3. Run the test file to verify your implementations
 * 4. All tests should pass when functions are correctly implemented
 * 
 * TESTING:
 * Run in Node.js: node calculation-functions-test.js
 * Or in browser: Load both files and call runAllTests()
 */

// ============================================================================
// SAMPLE TRANSACTION DATA
// ============================================================================

/**
 * Sample transactions for testing your calculation functions
 * Each transaction has: id, type, amount, category, description, date
 */
const sampleTransactions = [
    // January 2024 - Income
    {
        id: '1',
        type: 'income',
        amount: 3500,
        category: 'salary',
        description: 'Monthly Salary - January',
        date: '2024-01-01'
    },
    {
        id: '2',
        type: 'income',
        amount: 800,
        category: 'freelance',
        description: 'Web Design Project',
        date: '2024-01-15'
    },
    {
        id: '3',
        type: 'income',
        amount: 200,
        category: 'investments',
        description: 'Dividend Payment',
        date: '2024-01-20'
    },

    // January 2024 - Expenses
    {
        id: '4',
        type: 'expense',
        amount: 1200,
        category: 'housing',
        description: 'Monthly Rent',
        date: '2024-01-01'
    },
    {
        id: '5',
        type: 'expense',
        amount: 300,
        category: 'food',
        description: 'Grocery Shopping',
        date: '2024-01-03'
    },
    {
        id: '6',
        type: 'expense',
        amount: 150,
        category: 'utilities',
        description: 'Electricity Bill',
        date: '2024-01-05'
    },
    {
        id: '7',
        type: 'expense',
        amount: 80,
        category: 'transport',
        description: 'Gas for Car',
        date: '2024-01-07'
    },
    {
        id: '8',
        type: 'expense',
        amount: 120,
        category: 'entertainment',
        description: 'Movie and Dinner',
        date: '2024-01-10'
    },
    {
        id: '9',
        type: 'expense',
        amount: 250,
        category: 'shopping',
        description: 'Clothing Purchase',
        date: '2024-01-12'
    },
    {
        id: '10',
        type: 'expense',
        amount: 90,
        category: 'healthcare',
        description: 'Doctor Visit',
        date: '2024-01-18'
    },

    // February 2024 - Income
    {
        id: '11',
        type: 'income',
        amount: 3500,
        category: 'salary',
        description: 'Monthly Salary - February',
        date: '2024-02-01'
    },
    {
        id: '12',
        type: 'income',
        amount: 600,
        category: 'freelance',
        description: 'Logo Design Project',
        date: '2024-02-10'
    },
    {
        id: '13',
        type: 'income',
        amount: 150,
        category: 'gifts',
        description: 'Birthday Gift Money',
        date: '2024-02-14'
    },

    // February 2024 - Expenses
    {
        id: '14',
        type: 'expense',
        amount: 1200,
        category: 'housing',
        description: 'Monthly Rent',
        date: '2024-02-01'
    },
    {
        id: '15',
        type: 'expense',
        amount: 280,
        category: 'food',
        description: 'Grocery Shopping',
        date: '2024-02-05'
    },
    {
        id: '16',
        type: 'expense',
        amount: 140,
        category: 'utilities',
        description: 'Electricity + Water',
        date: '2024-02-08'
    },
    {
        id: '17',
        type: 'expense',
        amount: 75,
        category: 'transport',
        description: 'Public Transport Pass',
        date: '2024-02-12'
    },
    {
        id: '18',
        type: 'expense',
        amount: 200,
        category: 'entertainment',
        description: 'Concert Tickets',
        date: '2024-02-16'
    },
    {
        id: '19',
        type: 'expense',
        amount: 180,
        category: 'shopping',
        description: 'Electronics Purchase',
        date: '2024-02-20'
    },

    // March 2024 - Income
    {
        id: '20',
        type: 'income',
        amount: 3500,
        category: 'salary',
        description: 'Monthly Salary - March',
        date: '2024-03-01'
    },
    {
        id: '21',
        type: 'income',
        amount: 1200,
        category: 'freelance',
        description: 'Website Development',
        date: '2024-03-08'
    },
    {
        id: '22',
        type: 'income',
        amount: 300,
        category: 'business',
        description: 'Side Business Profit',
        date: '2024-03-15'
    },

    // March 2024 - Expenses
    {
        id: '23',
        type: 'expense',
        amount: 1200,
        category: 'housing',
        description: 'Monthly Rent',
        date: '2024-03-01'
    },
    {
        id: '24',
        type: 'expense',
        amount: 320,
        category: 'food',
        description: 'Grocery Shopping',
        date: '2024-03-04'
    },
    {
        id: '25',
        type: 'expense',
        amount: 160,
        category: 'utilities',
        description: 'All Utilities',
        date: '2024-03-06'
    },
    {
        id: '26',
        type: 'expense',
        amount: 95,
        category: 'transport',
        description: 'Car Maintenance',
        date: '2024-03-10'
    },
    {
        id: '27',
        type: 'expense',
        amount: 150,
        category: 'entertainment',
        description: 'Streaming Services',
        date: '2024-03-12'
    },
    {
        id: '28',
        type: 'expense',
        amount: 400,
        category: 'education',
        description: 'Online Course',
        date: '2024-03-18'
    },
    {
        id: '29',
        type: 'expense',
        amount: 220,
        category: 'healthcare',
        description: 'Dental Checkup',
        date: '2024-03-22'
    },
    {
        id: '30',
        type: 'expense',
        amount: 180,
        category: 'shopping',
        description: 'Home Supplies',
        date: '2024-03-25'
    }
];

// ============================================================================
// UTILITY FUNCTIONS (PROVIDED)
// ============================================================================

/**
 * Get current month in YYYY-MM format
 * @returns {string} Current month
 */
function getCurrentMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}

/**
 * Check if a transaction belongs to a specific month
 * @param {Object} transaction - Transaction object
 * @param {string} month - Month in YYYY-MM format
 * @returns {boolean} True if transaction is in the specified month
 */
function isTransactionInMonth(transaction, month) {
    return transaction.date.substring(0, 7) === month;
}

// ============================================================================
// CALCULATION FUNCTIONS TO IMPLEMENT
// ============================================================================

/**
 * TODO 1: Calculate total income for a specific month
 * 
 * INSTRUCTIONS:
 * 1. Use a loop to iterate through all transactions
 * 2. Use conditionals to check if:
 *    - Transaction type is 'income'
 *    - Transaction is in the specified month
 * 3. Sum up the amounts of matching transactions
 * 4. Return the total
 * 
 * EXAMPLE:
 * calculateTotalIncome('2024-01') should return 4500
 * (3500 salary + 800 freelance + 200 investments)
 * 
 * @param {string} month - Month in YYYY-MM format (e.g., '2024-01')
 * @returns {number} Total income for the month
 */
function calculateTotalIncome(month) {
    // TODO: Implement this function
    let total = 0;
    
    // Your code here:
    // 1. Loop through sampleTransactions array
    // 2. Check if transaction.type === 'income'
    // 3. Check if transaction is in the specified month
    // 4. Add transaction.amount to total
    
    return total;
}

/**
 * TODO 2: Calculate total expenses for a specific month
 * 
 * INSTRUCTIONS:
 * Similar to calculateTotalIncome, but for expenses
 * 1. Loop through transactions
 * 2. Check for type === 'expense'
 * 3. Check if transaction is in the specified month
 * 4. Sum the amounts
 * 
 * EXAMPLE:
 * calculateTotalExpenses('2024-01') should return 2190
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Total expenses for the month
 */
function calculateTotalExpenses(month) {
    // TODO: Implement this function
    let total = 0;
    
    // Your code here
    
    return total;
}

/**
 * TODO 3: Calculate net balance (income - expenses)
 * 
 * INSTRUCTIONS:
 * 1. Use the calculateTotalIncome function
 * 2. Use the calculateTotalExpenses function
 * 3. Subtract expenses from income
 * 4. Return the result
 * 
 * EXAMPLE:
 * calculateNetBalance('2024-01') should return 2310
 * (4500 income - 2190 expenses)
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Net balance (income - expenses)
 */
function calculateNetBalance(month) {
    // TODO: Implement this function
    // Hint: This should be a simple calculation using the two functions above
    
    return 0; // Replace with your calculation
}

/**
 * TODO 4: Calculate spending by category for a specific month
 * 
 * INSTRUCTIONS:
 * 1. Create an empty object to store category totals
 * 2. Loop through all transactions
 * 3. For expense transactions in the specified month:
 *    - If category doesn't exist in object, initialize it to 0
 *    - Add the transaction amount to that category's total
 * 4. Return the object with category totals
 * 
 * EXAMPLE:
 * calculateSpendingByCategory('2024-01') should return:
 * {
 *   housing: 1200,
 *   food: 300,
 *   utilities: 150,
 *   transport: 80,
 *   entertainment: 120,
 *   shopping: 250,
 *   healthcare: 90
 * }
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {Object} Object with category names as keys and total amounts as values
 */
function calculateSpendingByCategory(month) {
    // TODO: Implement this function
    const categoryTotals = {};
    
    // Your code here:
    // 1. Loop through sampleTransactions
    // 2. Check if transaction is expense and in specified month
    // 3. Add amount to categoryTotals[transaction.category]
    
    return categoryTotals;
}

/**
 * TODO 5: Calculate average transaction amount by type
 * 
 * INSTRUCTIONS:
 * 1. Filter transactions by type and month
 * 2. Calculate the sum of all matching transactions
 * 3. Count the number of matching transactions
 * 4. Return sum divided by count (average)
 * 5. Return 0 if no transactions found
 * 
 * EXAMPLE:
 * calculateAverageTransaction('expense', '2024-01') should return 312.86
 * (2190 total expenses / 7 expense transactions)
 * 
 * @param {string} type - Transaction type ('income' or 'expense')
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Average transaction amount
 */
function calculateAverageTransaction(type, month) {
    // TODO: Implement this function
    let total = 0;
    let count = 0;
    
    // Your code here:
    // 1. Loop through transactions
    // 2. Check if transaction matches type and month
    // 3. Add to total and increment count
    // 4. Return total / count (handle division by zero)
    
    return count > 0 ? total / count : 0;
}

/**
 * TODO 6: Find the largest expense in a specific month
 * 
 * INSTRUCTIONS:
 * 1. Initialize variables for largest amount and transaction
 * 2. Loop through all transactions
 * 3. For expense transactions in the specified month:
 *    - If amount is larger than current largest, update both variables
 * 4. Return the transaction object (or null if no expenses found)
 * 
 * EXAMPLE:
 * findLargestExpense('2024-01') should return the housing transaction (1200)
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {Object|null} Transaction object with the largest expense amount
 */
function findLargestExpense(month) {
    // TODO: Implement this function
    let largestTransaction = null;
    let largestAmount = 0;
    
    // Your code here:
    // 1. Loop through transactions
    // 2. Check if transaction is expense and in specified month
    // 3. Compare amount with largestAmount
    // 4. Update largestTransaction and largestAmount if bigger
    
    return largestTransaction;
}

/**
 * TODO 7: Calculate savings rate (percentage of income saved)
 * 
 * INSTRUCTIONS:
 * 1. Calculate total income for the month
 * 2. Calculate total expenses for the month
 * 3. Calculate savings (income - expenses)
 * 4. Calculate savings rate as percentage: (savings / income) * 100
 * 5. Return 0 if no income
 * 
 * EXAMPLE:
 * calculateSavingsRate('2024-01') should return 51.33
 * (2310 savings / 4500 income * 100)
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {number} Savings rate as percentage (0-100)
 */
function calculateSavingsRate(month) {
    // TODO: Implement this function
    const income = calculateTotalIncome(month);
    const expenses = calculateTotalExpenses(month);
    
    // Your code here:
    // 1. Calculate savings (income - expenses)
    // 2. Calculate percentage (savings / income * 100)
    // 3. Handle case where income is 0
    
    return 0; // Replace with your calculation
}

/**
 * TODO 8: Get transaction summary for a month
 * 
 * INSTRUCTIONS:
 * 1. Create an object with summary information
 * 2. Use the functions you've already implemented
 * 3. Include: totalIncome, totalExpenses, netBalance, savingsRate, transactionCount
 * 4. Count total transactions for the month
 * 
 * EXAMPLE:
 * getMonthSummary('2024-01') should return:
 * {
 *   totalIncome: 4500,
 *   totalExpenses: 2190,
 *   netBalance: 2310,
 *   savingsRate: 51.33,
 *   transactionCount: 10
 * }
 * 
 * @param {string} month - Month in YYYY-MM format
 * @returns {Object} Summary object with financial data
 */
function getMonthSummary(month) {
    // TODO: Implement this function
    // Use the functions you've already implemented
    
    return {
        totalIncome: 0,
        totalExpenses: 0,
        netBalance: 0,
        savingsRate: 0,
        transactionCount: 0
    };
}

// ============================================================================
// BONUS CHALLENGES (OPTIONAL)
// ============================================================================

/**
 * BONUS 1: Find transactions above a certain amount
 * @param {number} amount - Minimum amount
 * @param {string} month - Month in YYYY-MM format
 * @returns {Array} Array of transactions above the amount
 */
function findTransactionsAboveAmount(amount, month) {
    // TODO: Implement this bonus function
    return [];
}

/**
 * BONUS 2: Calculate month-over-month growth
 * @param {string} currentMonth - Current month in YYYY-MM format
 * @param {string} previousMonth - Previous month in YYYY-MM format
 * @returns {Object} Growth percentages for income and expenses
 */
function calculateMonthOverMonthGrowth(currentMonth, previousMonth) {
    // TODO: Implement this bonus function
    return {
        incomeGrowth: 0,
        expenseGrowth: 0
    };
}

/**
 * BONUS 3: Get top spending categories
 * @param {string} month - Month in YYYY-MM format
 * @param {number} limit - Number of top categories to return
 * @returns {Array} Array of {category, amount} objects sorted by amount
 */
function getTopSpendingCategories(month, limit = 3) {
    // TODO: Implement this bonus function
    return [];
}

// ============================================================================
// EXPORT FUNCTIONS FOR TESTING
// ============================================================================

// For Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleTransactions,
        calculateTotalIncome,
        calculateTotalExpenses,
        calculateNetBalance,
        calculateSpendingByCategory,
        calculateAverageTransaction,
        findLargestExpense,
        calculateSavingsRate,
        getMonthSummary,
        findTransactionsAboveAmount,
        calculateMonthOverMonthGrowth,
        getTopSpendingCategories
    };
}

// For browser environment
if (typeof window !== 'undefined') {
    window.CalculationFunctions = {
        sampleTransactions,
        calculateTotalIncome,
        calculateTotalExpenses,
        calculateNetBalance,
        calculateSpendingByCategory,
        calculateAverageTransaction,
        findLargestExpense,
        calculateSavingsRate,
        getMonthSummary,
        findTransactionsAboveAmount,
        calculateMonthOverMonthGrowth,
        getTopSpendingCategories
    };
}

/**
 * IMPLEMENTATION CHECKLIST:
 * 
 * BASIC FUNCTIONS (Required):
 * □ calculateTotalIncome() - Sum income transactions for a month
 * □ calculateTotalExpenses() - Sum expense transactions for a month
 * □ calculateNetBalance() - Calculate income minus expenses
 * □ calculateSpendingByCategory() - Group expenses by category
 * □ calculateAverageTransaction() - Calculate average transaction amount
 * □ findLargestExpense() - Find the biggest expense transaction
 * □ calculateSavingsRate() - Calculate percentage of income saved
 * □ getMonthSummary() - Create comprehensive month summary
 * 
 * BONUS FUNCTIONS (Optional):
 * □ findTransactionsAboveAmount() - Filter transactions by amount
 * □ calculateMonthOverMonthGrowth() - Compare month-to-month changes
 * □ getTopSpendingCategories() - Get highest spending categories
 * 
 * TESTING:
 * Run the test file to verify your implementations work correctly!
 * 
 * TIPS:
 * - Start with calculateTotalIncome() and calculateTotalExpenses()
 * - Use console.log() to debug your loops and conditionals
 * - Test each function individually before moving to the next
 * - The sample data is designed to give predictable results
 * - All amounts are in dollars (no need for currency conversion)
 */
