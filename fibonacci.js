//  returns an array containing n numbers from the Fibonacci sequence
// fibonacci sequence: a numerical sequence where each number is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13

function fib(n) {
    const sequence = [0, 1] // base cases
    for (let i = 2; i < n; i++) {
        sequence.push(
            sequence[sequence.length - 1] + sequence[sequence.length - 2]
        )
    }
    return sequence
}

function fibRec(n) {
    // what do I want?
    // I want fibRec to return an array that contains 1 -> n numbers of the fibonacci sequence
    // e.g. n = 4
    // [0]
    // [0, 1]
    // [0, 1, 1]
    // [0, 1, 1, 2] <- final output
    // if we imagine [0] as the final call in the callstack how does it transform as it becomes a part of the bigger problems?
    // when n = 0 it returned an empty array (I'm not quite sure if this should be start or n=1 is) -> []
    // when n = 1 it took the empty array and added 0 (base case) to it -> [0]
    // when n = 2 it took the [0] array and added 1 (base case) to it -> [0, 1]
    // when n = 3 it took the array, summed the last and second last elements, and pushed the result to the array [0, 1, 1, 2]
    // the most obvious process to me is 3 base cases
    // if n = 0 return an empty array
    // if n = 1 or 2 push n-1 to the array
    // if n is larger than that sum the last two elements in the array and append them to the array

    // what's the seed? what's the simplest input?
    // there's the case of n = 0 which should return an empty array but is that helpful to the recursive process?

    // what's the recursive step? what pattern to follow to recursively shrink the problem down to the seed level?
    // I think the gripe of the situation is in the 1 and 2 base cases, they need an array to store the value but they never reach it if you simply return a value
    // I think those base cases need to further shrink the input till they get the array needed
    // another idea popped into my head
    // why not design the function with 1 base case and a conditional that relies on that base case? the base case being n = 0 which returns an array, and the conditional keeps shrinking the input as long as fibRec doesn't return an array but when it does, it adds values to it (1 and 2 base cases first, then keep summing the last two elements till clearing the callstack)

    if (n === 0) return []
    const result = fibRec(n - 1)
    if (Array.isArray(result)) {
        if (n === 1 || n === 2) result.push(n - 1)
        else result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result
}
