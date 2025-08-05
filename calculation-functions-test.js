/**
 * CALCULATION FUNCTIONS TEST SUITE
 * 
 * This file contains automated tests for all calculation functions.
 * Run this file to verify your implementations are working correctly.
 * 
 * USAGE:
 * Node.js: node calculation-functions-test.js
 * Browser: Load both files and call runAllTests() in console
 * 
 * TEST RESULTS:
 * ✅ = Test passed
 * ❌ = Test failed
 * 📊 = Summary statistics
 */

// Import the functions to test
let functions;
if (typeof require !== 'undefined') {
    // Node.js environment
    functions = require('./calculation-functions-exercise.js');
} else {
    // Browser environment
    functions = window.CalculationFunctions;
}

// Extract functions for easier testing
const {
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
} = functions;

// ============================================================================
// TEST UTILITIES
// ============================================================================

let testResults = {
    passed: 0,
    failed: 0,
    total: 0
};

/**
 * Test assertion function
 * @param {string} testName - Name of the test
 * @param {*} actual - Actual result
 * @param {*} expected - Expected result
 * @param {string} description - Test description
 */
function test(testName, actual, expected, description = '') {
    testResults.total++;
    
    let passed = false;
    
    // Handle different types of comparisons
    if (typeof expected === 'object' && expected !== null) {
        if (Array.isArray(expected)) {
            passed = JSON.stringify(actual) === JSON.stringify(expected);
        } else {
            passed = deepEqual(actual, expected);
        }
    } else if (typeof expected === 'number') {
        // Handle floating point precision
        passed = Math.abs(actual - expected) < 0.01;
    } else {
        passed = actual === expected;
    }
    
    if (passed) {
        testResults.passed++;
        console.log(`✅ ${testName}: ${description}`);
    } else {
        testResults.failed++;
        console.log(`❌ ${testName}: ${description}`);
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Actual: ${JSON.stringify(actual)}`);
    }
}

/**
 * Deep equality check for objects
 * @param {*} a - First object
 * @param {*} b - Second object
 * @returns {boolean} True if objects are deeply equal
 */
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a !== typeof b) return false;
    
    if (typeof a === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        
        if (keysA.length !== keysB.length) return false;
        
        for (let key of keysA) {
            if (!keysB.includes(key)) return false;
            if (!deepEqual(a[key], b[key])) return false;
        }
        
        return true;
    }
    
    return false;
}

/**
 * Test if a function throws an error or returns a default value
 * @param {Function} fn - Function to test
 * @param {*} defaultValue - Expected default value
 * @returns {*} Result of function call
 */
function testSafely(fn, defaultValue) {
    try {
        return fn();
    } catch (error) {
        return defaultValue;
    }
}

// ============================================================================
// EXPECTED RESULTS (CALCULATED MANUALLY)
// ============================================================================

const expectedResults = {
    // January 2024 totals
    jan2024Income: 4500,      // 3500 + 800 + 200
    jan2024Expenses: 2190,    // 1200 + 300 + 150 + 80 + 120 + 250 + 90
    jan2024NetBalance: 2310,  // 4500 - 2190
    jan2024SavingsRate: 51.33, // (2310 / 4500) * 100
    jan2024TransactionCount: 10,
    
    // February 2024 totals
    feb2024Income: 4250,      // 3500 + 600 + 150
    feb2024Expenses: 2075,    // 1200 + 280 + 140 + 75 + 200 + 180
    feb2024NetBalance: 2175,  // 4250 - 2075
    feb2024SavingsRate: 51.18, // (2175 / 4250) * 100
    feb2024TransactionCount: 9,
    
    // March 2024 totals
    mar2024Income: 5000,      // 3500 + 1200 + 300
    mar2024Expenses: 2725,    // 1200 + 320 + 160 + 95 + 150 + 400 + 220 + 180
    mar2024NetBalance: 2275,  // 5000 - 2725
    mar2024SavingsRate: 45.5, // (2275 / 5000) * 100
    mar2024TransactionCount: 11,
    
    // Category breakdowns for January 2024
    jan2024Categories: {
        housing: 1200,
        food: 300,
        utilities: 150,
        transport: 80,
        entertainment: 120,
        shopping: 250,
        healthcare: 90
    },
    
    // Average transactions for January 2024
    jan2024AvgIncome: 1500,   // 4500 / 3
    jan2024AvgExpense: 312.86, // 2190 / 7
    
    // Largest expense for January 2024
    jan2024LargestExpense: {
        id: '4',
        type: 'expense',
        amount: 1200,
        category: 'housing',
        description: 'Monthly Rent',
        date: '2024-01-01'
    }
};

// ============================================================================
// TEST FUNCTIONS
// ============================================================================

/**
 * Test calculateTotalIncome function
 */
function testCalculateTotalIncome() {
    console.log('\n🧮 Testing calculateTotalIncome()...');
    
    test(
        'calculateTotalIncome-Jan2024',
        calculateTotalIncome('2024-01'),
        expectedResults.jan2024Income,
        'January 2024 total income should be $4,500'
    );
    
    test(
        'calculateTotalIncome-Feb2024',
        calculateTotalIncome('2024-02'),
        expectedResults.feb2024Income,
        'February 2024 total income should be $4,250'
    );
    
    test(
        'calculateTotalIncome-Mar2024',
        calculateTotalIncome('2024-03'),
        expectedResults.mar2024Income,
        'March 2024 total income should be $5,000'
    );
    
    test(
        'calculateTotalIncome-NoData',
        calculateTotalIncome('2024-12'),
        0,
        'December 2024 (no data) should return $0'
    );
}

/**
 * Test calculateTotalExpenses function
 */
function testCalculateTotalExpenses() {
    console.log('\n💸 Testing calculateTotalExpenses()...');
    
    test(
        'calculateTotalExpenses-Jan2024',
        calculateTotalExpenses('2024-01'),
        expectedResults.jan2024Expenses,
        'January 2024 total expenses should be $2,190'
    );
    
    test(
        'calculateTotalExpenses-Feb2024',
        calculateTotalExpenses('2024-02'),
        expectedResults.feb2024Expenses,
        'February 2024 total expenses should be $2,075'
    );
    
    test(
        'calculateTotalExpenses-Mar2024',
        calculateTotalExpenses('2024-03'),
        expectedResults.mar2024Expenses,
        'March 2024 total expenses should be $2,725'
    );
    
    test(
        'calculateTotalExpenses-NoData',
        calculateTotalExpenses('2024-12'),
        0,
        'December 2024 (no data) should return $0'
    );
}

/**
 * Test calculateNetBalance function
 */
function testCalculateNetBalance() {
    console.log('\n⚖️ Testing calculateNetBalance()...');
    
    test(
        'calculateNetBalance-Jan2024',
        calculateNetBalance('2024-01'),
        expectedResults.jan2024NetBalance,
        'January 2024 net balance should be $2,310'
    );
    
    test(
        'calculateNetBalance-Feb2024',
        calculateNetBalance('2024-02'),
        expectedResults.feb2024NetBalance,
        'February 2024 net balance should be $2,175'
    );
    
    test(
        'calculateNetBalance-Mar2024',
        calculateNetBalance('2024-03'),
        expectedResults.mar2024NetBalance,
        'March 2024 net balance should be $2,275'
    );
    
    test(
        'calculateNetBalance-NoData',
        calculateNetBalance('2024-12'),
        0,
        'December 2024 (no data) should return $0'
    );
}

/**
 * Test calculateSpendingByCategory function
 */
function testCalculateSpendingByCategory() {
    console.log('\n📊 Testing calculateSpendingByCategory()...');
    
    test(
        'calculateSpendingByCategory-Jan2024',
        calculateSpendingByCategory('2024-01'),
        expectedResults.jan2024Categories,
        'January 2024 spending by category should match expected breakdown'
    );
    
    const feb2024Categories = {
        housing: 1200,
        food: 280,
        utilities: 140,
        transport: 75,
        entertainment: 200,
        shopping: 180
    };
    
    test(
        'calculateSpendingByCategory-Feb2024',
        calculateSpendingByCategory('2024-02'),
        feb2024Categories,
        'February 2024 spending by category should match expected breakdown'
    );
    
    test(
        'calculateSpendingByCategory-NoData',
        calculateSpendingByCategory('2024-12'),
        {},
        'December 2024 (no data) should return empty object'
    );
}

/**
 * Test calculateAverageTransaction function
 */
function testCalculateAverageTransaction() {
    console.log('\n📈 Testing calculateAverageTransaction()...');
    
    test(
        'calculateAverageTransaction-IncomeJan2024',
        calculateAverageTransaction('income', '2024-01'),
        expectedResults.jan2024AvgIncome,
        'January 2024 average income should be $1,500'
    );
    
    test(
        'calculateAverageTransaction-ExpenseJan2024',
        calculateAverageTransaction('expense', '2024-01'),
        expectedResults.jan2024AvgExpense,
        'January 2024 average expense should be $312.86'
    );
    
    test(
        'calculateAverageTransaction-NoData',
        calculateAverageTransaction('income', '2024-12'),
        0,
        'December 2024 (no data) should return $0'
    );
    
    test(
        'calculateAverageTransaction-InvalidType',
        calculateAverageTransaction('invalid', '2024-01'),
        0,
        'Invalid transaction type should return $0'
    );
}

/**
 * Test findLargestExpense function
 */
function testFindLargestExpense() {
    console.log('\n🔍 Testing findLargestExpense()...');
    
    test(
        'findLargestExpense-Jan2024',
        findLargestExpense('2024-01'),
        expectedResults.jan2024LargestExpense,
        'January 2024 largest expense should be housing ($1,200)'
    );
    
    test(
        'findLargestExpense-NoData',
        findLargestExpense('2024-12'),
        null,
        'December 2024 (no data) should return null'
    );
    
    // Test March 2024 - should be education ($400)
    const mar2024LargestExpense = {
        id: '28',
        type: 'expense',
        amount: 400,
        category: 'education',
        description: 'Online Course',
        date: '2024-03-18'
    };
    
    test(
        'findLargestExpense-Mar2024',
        findLargestExpense('2024-03'),
        mar2024LargestExpense,
        'March 2024 largest expense should be education ($400)'
    );
}

/**
 * Test calculateSavingsRate function
 */
function testCalculateSavingsRate() {
    console.log('\n💰 Testing calculateSavingsRate()...');
    
    test(
        'calculateSavingsRate-Jan2024',
        calculateSavingsRate('2024-01'),
        expectedResults.jan2024SavingsRate,
        'January 2024 savings rate should be 51.33%'
    );
    
    test(
        'calculateSavingsRate-Feb2024',
        calculateSavingsRate('2024-02'),
        expectedResults.feb2024SavingsRate,
        'February 2024 savings rate should be 51.18%'
    );
    
    test(
        'calculateSavingsRate-Mar2024',
        calculateSavingsRate('2024-03'),
        expectedResults.mar2024SavingsRate,
        'March 2024 savings rate should be 45.5%'
    );
    
    test(
        'calculateSavingsRate-NoIncome',
        calculateSavingsRate('2024-12'),
        0,
        'No income should return 0% savings rate'
    );
}

/**
 * Test getMonthSummary function
 */
function testGetMonthSummary() {
    console.log('\n📋 Testing getMonthSummary()...');
    
    const jan2024Summary = {
        totalIncome: expectedResults.jan2024Income,
        totalExpenses: expectedResults.jan2024Expenses,
        netBalance: expectedResults.jan2024NetBalance,
        savingsRate: expectedResults.jan2024SavingsRate,
        transactionCount: expectedResults.jan2024TransactionCount
    };
    
    test(
        'getMonthSummary-Jan2024',
        getMonthSummary('2024-01'),
        jan2024Summary,
        'January 2024 summary should include all financial metrics'
    );
    
    const feb2024Summary = {
        totalIncome: expectedResults.feb2024Income,
        totalExpenses: expectedResults.feb2024Expenses,
        netBalance: expectedResults.feb2024NetBalance,
        savingsRate: expectedResults.feb2024SavingsRate,
        transactionCount: expectedResults.feb2024TransactionCount
    };
    
    test(
        'getMonthSummary-Feb2024',
        getMonthSummary('2024-02'),
        feb2024Summary,
        'February 2024 summary should include all financial metrics'
    );
    
    const noDataSummary = {
        totalIncome: 0,
        totalExpenses: 0,
        netBalance: 0,
        savingsRate: 0,
        transactionCount: 0
    };
    
    test(
        'getMonthSummary-NoData',
        getMonthSummary('2024-12'),
        noDataSummary,
        'December 2024 (no data) should return zero summary'
    );
}

/**
 * Test bonus functions (if implemented)
 */
function testBonusFunctions() {
    console.log('\n🎁 Testing Bonus Functions...');
    
    // Test findTransactionsAboveAmount
    try {
        const result = findTransactionsAboveAmount(1000, '2024-01');
        if (Array.isArray(result)) {
            test(
                'findTransactionsAboveAmount-Bonus',
                result.length >= 2,
                true,
                'Should find at least 2 transactions above $1,000 in January'
            );
        }
    } catch (error) {
        console.log('ℹ️ findTransactionsAboveAmount not implemented (bonus function)');
    }
    
    // Test calculateMonthOverMonthGrowth
    try {
        const result = calculateMonthOverMonthGrowth('2024-02', '2024-01');
        if (typeof result === 'object' && result !== null) {
            test(
                'calculateMonthOverMonthGrowth-Bonus',
                typeof result.incomeGrowth === 'number',
                true,
                'Should return object with incomeGrowth property'
            );
        }
    } catch (error) {
        console.log('ℹ️ calculateMonthOverMonthGrowth not implemented (bonus function)');
    }
    
    // Test getTopSpendingCategories
    try {
        const result = getTopSpendingCategories('2024-01', 3);
        if (Array.isArray(result)) {
            test(
                'getTopSpendingCategories-Bonus',
                result.length <= 3,
                true,
                'Should return at most 3 top spending categories'
            );
        }
    } catch (error) {
        console.log('ℹ️ getTopSpendingCategories not implemented (bonus function)');
    }
}

/**
 * Test edge cases and error handling
 */
function testEdgeCases() {
    console.log('\n🧪 Testing Edge Cases...');
    
    // Test with invalid month formats
    test(
        'calculateTotalIncome-InvalidMonth',
        testSafely(() => calculateTotalIncome('invalid'), 0),
        0,
        'Invalid month format should return 0 or handle gracefully'
    );
    
    test(
        'calculateTotalExpenses-EmptyString',
        testSafely(() => calculateTotalExpenses(''), 0),
        0,
        'Empty month string should return 0 or handle gracefully'
    );
    
    // Test with null/undefined parameters
    test(
        'calculateNetBalance-Null',
        testSafely(() => calculateNetBalance(null), 0),
        0,
        'Null month should return 0 or handle gracefully'
    );
    
    // Test future months (no data)
    test(
        'calculateTotalIncome-FutureMonth',
        calculateTotalIncome('2025-01'),
        0,
        'Future month with no data should return 0'
    );
}

/**
 * Performance test for large datasets
 */
function testPerformance() {
    console.log('\n⚡ Testing Performance...');
    
    const startTime = Date.now();
    
    // Run all calculations multiple times
    for (let i = 0; i < 100; i++) {
        calculateTotalIncome('2024-01');
        calculateTotalExpenses('2024-01');
        calculateNetBalance('2024-01');
        calculateSpendingByCategory('2024-01');
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    test(
        'Performance-100Iterations',
        duration < 1000,
        true,
        `100 iterations should complete in under 1 second (took ${duration}ms)`
    );
}

// ============================================================================
// MAIN TEST RUNNER
// ============================================================================

/**
 * Run all tests
 */
function runAllTests() {
    console.log('🚀 Starting Calculation Functions Test Suite...\n');
    console.log('📝 Testing with sample data containing 30 transactions across 3 months\n');
    
    // Reset test results
    testResults = { passed: 0, failed: 0, total: 0 };
    
    // Run all test suites
    testCalculateTotalIncome();
    testCalculateTotalExpenses();
    testCalculateNetBalance();
    testCalculateSpendingByCategory();
    testCalculateAverageTransaction();
    testFindLargestExpense();
    testCalculateSavingsRate();
    testGetMonthSummary();
    testBonusFunctions();
    testEdgeCases();
    testPerformance();
    
    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Passed: ${testResults.passed}`);
    console.log(`❌ Failed: ${testResults.failed}`);
    console.log(`📈 Total: ${testResults.total}`);
    console.log(`🎯 Success Rate: ${((testResults.passed / testResults.total) * 100).toFixed(1)}%`);
    
    if (testResults.failed === 0) {
        console.log('\n🎉 ALL TESTS PASSED! Your implementation is working correctly!');
        console.log('🚀 You can now integrate these functions into the capstone project!');
    } else {
        console.log('\n🔧 Some tests failed. Check the failed tests above and fix your implementations.');
        console.log('💡 Tips:');
        console.log('   - Make sure your loops iterate through all transactions');
        console.log('   - Check your conditional logic for filtering by type and month');
        console.log('   - Verify your mathematical calculations');
        console.log('   - Use console.log() to debug your functions');
    }
    
    console.log('\n📚 Sample Data Summary:');
    console.log('   - January 2024: 3 income + 7 expense transactions');
    console.log('   - February 2024: 3 income + 6 expense transactions');
    console.log('   - March 2024: 3 income + 8 expense transactions');
    console.log('   - Total: 30 transactions across 3 months');
    
    return testResults;
}

/**
 * Quick test function for individual functions
 * @param {string} functionName - Name of function to test
 */
function testFunction(functionName) {
    console.log(`🧪 Testing ${functionName}()...`);
    
    switch (functionName) {
        case 'calculateTotalIncome':
            testCalculateTotalIncome();
            break;
        case 'calculateTotalExpenses':
            testCalculateTotalExpenses();
            break;
        case 'calculateNetBalance':
            testCalculateNetBalance();
            break;
        case 'calculateSpendingByCategory':
            testCalculateSpendingByCategory();
            break;
        case 'calculateAverageTransaction':
            testCalculateAverageTransaction();
            break;
        case 'findLargestExpense':
            testFindLargestExpense();
            break;
        case 'calculateSavingsRate':
            testCalculateSavingsRate();
            break;
        case 'getMonthSummary':
            testGetMonthSummary();
            break;
        default:
            console.log(`❌ Unknown function: ${functionName}`);
    }
}

// ============================================================================
// AUTO-RUN TESTS
// ============================================================================

// Auto-run tests in Node.js environment
if (typeof require !== 'undefined') {
    runAllTests();
}

// Export for browser environment
if (typeof window !== 'undefined') {
    window.runAllTests = runAllTests;
    window.testFunction = testFunction;
    console.log('🌐 Test functions loaded! Call runAllTests() to start testing.');
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        runAllTests,
        testFunction,
        expectedResults
    };
}

/**
 * USAGE INSTRUCTIONS:
 * 
 * NODE.JS:
 * 1. Save both files in the same directory
 * 2. Run: node calculation-functions-test.js
 * 3. View test results in terminal
 * 
 * BROWSER:
 * 1. Create an HTML file that loads both JavaScript files
 * 2. Open browser developer console
 * 3. Call: runAllTests()
 * 4. View test results in console
 * 
 * INDIVIDUAL TESTING:
 * - Call testFunction('functionName') to test specific functions
 * - Example: testFunction('calculateTotalIncome')
 * 
 * DEBUGGING:
 * - Add console.log() statements in your functions
 * - Check the expected results in this file
 * - Verify your loop and conditional logic
 * - Test with smaller datasets first
 */
