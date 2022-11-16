/**
 * DYNAMIC PROGRAMMING
 * -> method for solving a complex problem by breaking it down into
 *    a collection of simpler sub-problems, solving each of those
 *    sub-problems just once, and storing their solution
 * -> only works on problems with the following properties
 *    1. Optimal Substructure
 *       -> a problem is said to have optimal substructure if an 
 *          optimal solution can be constructed from optimal solutions
 *          of it's sub problems eg.finding the shortest path problems
 *    
 *    2. Overlapping Sub-problems
 *       -> a problem is said to have overlapping subproblems if it can
 *          be broken down into sub-problems which are REUSED SEVERAL TIMES
 *          e.g fibonnaci series problems
 */

/**
 * Implementing Fibonnacci sequence problems using RECURSION
 * 1. fib(n) = fib(n-1) + fib(n-2)
 * 2. fib(2) -> 1
 * 3. fib(1) -> 1
 */

function fibRecursive(n) {//3
    if (n === 1 || n === 2) {
        return 1;
    }
    return (fibRecursive(n - 1) + fibRecursive(n - 2));
}

/**
 * Implementing Fibonnacci sequence problems using DYNAMIC PROGRAMMING
 * MEMOIZATION TECHNIQUE
*/

function fibMemoization(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n === 1 || n === 2) return 1;
    let res = fibMemoization(n-2, memo) + fibMemoization(n-1, memo);
    memo[n] = res;
    //console.log(memo);
    return res;

    //for fibMemoization(5,memo=[]),
    //memo[5] is undefined, undefined !== undefined, we ignore memo[5];
    //5 > 1 and 2
    //res = fibMemoization(3, []) + fibMemoization(4, [])
    //res =        2          +     3
    //                                0 1 2 3 4 5
    //memo[5] = 5            memo => [ , , ,2, ,5 ]
    //return 5


    //for fibMemoization(3,[]), we have
          //memo[3], is undefined, undefined !== undefined, we ignore memo[3]
          //3 > 1 || 3 > 2
          //res = fibMemoization(1,[]) + fibMemoization(2,[]);
          //res =      1           +     1
                  //for fibMemoization(1,[])
                  //memo[1], is undefined, undefined !== undefined, we ignore memo[1]
                  //1 === 1, return 1

                  //for fibMemoization(2,[])
                  //memo[2], is undefined, undefined !== undefined, we ignore memo[1]
                  //2 == 2, return 1
                  //                  0 1 2  3 
          //memo[3] = 2    //memo => [ , , , 2]
          //return 2 

    //for fibMemoizations(4,[]), we have
          //memo[4], is undefined, undefined !== undefined, we ignore memo[4]
          //4 === 1 or 4 === 2
          //res = fibMemoization(3,[]) + fibMemoization(2,[])
          //res =        2         +     1
                  //for fibMemoization(3,[])
                  //memo[3] is 2, return 2

                  //for fibMemoization(2,[])
                  //memo[2] 
                  // 2 === 1 or 2 === 2, return 1

         //memo[3] = 3
         //return 3
}

/**
 * Implementing Fibonnacci sequence problems using DYNAMIC PROGRAMMING
*/
function fibTab(n) {
    if (n === 1 || n === 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i -1] + fibNums[i-2];
    }
    return fibNums[n];
}

//Fibonacci Recursive Test
//console.log(fibRecursive(3)); //2
//console.log(fibRecursive(5)); //5
//console.log(fibRecursive(8)); //21

//Fibonacci Memoization Test
//console.log(fibMemoization(3)); //2
//console.log(fibMemoization(5)); //5
//console.log(fibMemoization(8)); //21

//Fibonacci Tabulation Test
console.log(fibTab(3)); //2
console.log(fibTab(5)); //5
console.log(fibTab(8)); //21