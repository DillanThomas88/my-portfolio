export const myPortfolioData = () => {
  return [
    // {
    //   title: "",
    //   completed: 1,
    //   example: "",
    //   difficulty: 0,
    //   desc: `

    //   `,
    //   functionDesc: `

    //   `,
    //   returns: `

    //   `,
    //   answer: `

    //   `,
    // },
    {
      title: "Simple Text Editor",
      completed: 1,
      example: "",
      difficulty: 1,
      desc: `
      Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:

      append(W) - Append string W to the end of S.
      delete(k) - Delete the last k characters of S.
      print(k) - Print the kth character of S.
      undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.
      `,
      functionDesc: `
      The first line contains an integer, Q, denoting the number of operations.
      Each line, i, of the Q subsequent lines (where 0 <= i <= Q) defines an operation to be performed. Each operation starts with a single integer, t (where t = {1,2,3,4}), denoting a type of operation as defined in the Problem Statement above. If the operation requires an argument, t is followed by its space-separated argument. For example, if t=1 and W="abcd", line ,i, will be 1 abcd.
      `,
      returns: `
      Each operation of type 3 must print the kth character on a new line.
      `,
      answer: `
      function processData(input) {
        var package = input.split("/n") // reverse the forward slash
        var text = ""
        var history = []
        
        for (let i=1; i <= parseInt(package[0]); i++) {
    
            var [execute, info] = package[i].split(' ')
    
            switch (parseInt(execute)) {
                case 1:
                    history.push(text)
                    text += info
                    break;
                case 2:
                    history.push(text)
                    text = text.substring(0, text.length - parseInt(info))
                    break;
                case 3:
                    console.log(text.charAt(parseInt(info) - 1))
                    break;
                case 4:
                    text = history.pop()
                    break;
            }
            
        }
    } 
      `,
    },
    {
      title: "Beautiful Pairs",
      completed: 1,
      example: "",
      difficulty: 0,
      desc: `
      You are given two arrays, A and B, both containing n integers.

      A pair of indices (i,j) is beautiful if the ith element of array A is equal to the jth element of array B. In other words, pair (i,j) is beautiful if and only if A[i] = B[j]. A set containing beautiful pairs is called a beautiful set.
      
      A beautiful set is called pairwise disjoint if for every pair (l[i], r[i]) belonging to the set there is no repetition of either l[i] or r[i] values. For instance, if A = [10,11,12,5,14] and B = [8,9,11,11,5] the beautiful set [(1,2),(1,3),(3,4)] is not pairwise disjoint as there is a repetition of 1, that is l[0][0] = l[0][1].
      
      Your task is to change exactly 1 element in B so that the size of the pairwise disjoint beautiful set is maximum.
      `,
      functionDesc: `
      Complete the beautifulPairs function in the editor below. It should return an integer that represents the maximum number of pairwise disjoint beautiful pairs that can be formed.

      beautifulPairs has the following parameters:
      
      A: an array of integers
      B: an array of integers
      `,
      returns: `
      Determine and print the maximum possible number of pairwise disjoint beautiful pairs.

      Note: You must first change 1 element in B, and your choice of element must be optimal.
      `,
      answer: `
      function beautifulPairs(A, B) {

        const uniques = [...new Set(A.concat(B))]
        
        // created filled arrays at the length of unique values
        let a = new Array(uniques.length).fill(0)
        let b = new Array(uniques.length).fill(0)
        
        // storing digit appearances at the same index
        for(let i = 0; i < uniques.length; i++){
            for(let k = 0; k < A.length; k++){
                if(A[k] === uniques[i]) a[i]++
                if(B[k] === uniques[i]) b[i]++
            }
        }
        
        // compairing the unique values for min
        const pairs = (
            uniques
                .map((data, i) => {
                    data = Math.min(a[i], b[i])
                })
                
        ).reduce((a,b) => a + b)
        
        // we have to make a change to one element in B 
        // eventhough when the amount of pairs is perfect.
        if(pairs === A.length) return pairs - 1
        
        // the best we can do is add one to the unique pairs
        return pairs + 1
    }
      `,
    },
    {
      title: "Balanced Brackets", // havnt found it on hacker rank
      completed: 1,
      example: "",
      difficulty: 1,
      desc: `
      A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

      Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
      
      A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
      
      By this logic, we say a sequence of brackets is balanced if the following conditions are met:
      
      It contains no unmatched brackets.
      The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
      Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.
      `,
      functionDesc: `
      Complete the function isBalanced in the editor below.

      isBalanced has the following parameter(s):
      
      string s: a string of brackets
      `,
      returns: `
      string: either YES or NO
      `,
      answer: `
      function isBalanced(s) {
    
        const YES = "YES"
        const NO = "NO"
        const pairs = ['()','[]', '{}']
        
        if(s.length % 2 !== 0) return NO
        
        let length  = s.length
        let dummy = s
        while(length > 1){
            
            let p =''
            
            let found = pairs.some((data, i) => {
                
                if(!dummy.includes(data)) return false  
                          
                p = pairs[i]
                return true
            })        
            
            if(!found){
                return NO
            } else {
                let r = dummy.replace(p, '')
                dummy = r
                length -= 2
            }
        }
           
        return YES    
    }
      `,
    },
    {
      title: "Merge two sorted linked lists",
      completed: 1,
      example: "",
      difficulty: 0,
      desc: `
      Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.
      `,
      functionDesc: `
      Complete the mergeLists function in the editor below.

      mergeLists has the following parameters:
      
      SinglyLinkedListNode pointer headA: a reference to the head of a list
      SinglyLinkedListNode pointer headB: a reference to the head of a list
      `,
      returns: `
      SinglyLinkedListNode pointer: a reference to the head of the merged list
      `,
      answer: `

      `,
    },
    {
      title: "New Year Chaos",
      completed: 0,
      example: "",
      difficulty: 1,
      desc: `
      It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

      Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
      `,
      functionDesc: `
      Complete the function minimumBribes in the editor below.

      minimumBribes has the following parameter(s):
      
      int q[n]: the positions of the people after all bribes
      `,
      returns: `
      No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
      `,
      answer: `
      function minimumBribes(q) {
    
        const CHAOS = "Too chaotic"
        let count = 0
        
        for(let position = 0; position < q.length; position++){
            
            const absolute = q[position] - 1
            const diff = absolute - position
            if(diff > 2) return console.log(CHAOS)
            
            for(let front = Math.max(absolute - 1, 0); front < position; front++){
                if(q[front] > q[position]){
                    count++
                }
            }
        }
        
        return console.log(count)
    }
      `,
    },
    {
      title: "Recursive Digit Sum",
      completed: 1,
      example: "",
      difficulty: 1,
      desc: `
      We define super digit of an integer x using the following rules:

      Given an integer, we need to find the super digit of the integer.
      
      If x has only 1 digit, then its super digit is x.
      Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
      `,
      functionDesc: `
      Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

      superDigit has the following parameter(s):
      
      string n: a string representation of an integer
      int k: the times to concatenate n to make p
      `,
      returns: `
      int: the super digit of n repeated k times
      `,
      answer: `
      function superDigit(number, concatinations) {

        if(number.length === 1) return number
        
        let findSuper = (
            number
                .toString()
                .split('')
                .map(data => parseInt(data))
                .reduce((a,b) => a + b)
        ) * concatinations
        
        return recursion(cutReduce(findSuper))
        
        function recursion(n){
            if(n.length === 1) {
                return n
            }        
            let cut = cutReduce(n)
            
            return recursion(cut)
        }
        
        function cutReduce(n){
             return n
                .toString()
                .split('')
                .map(data => data = parseInt(data))
                .reduce((a,b) => a + b)
                .toString()
        }
    }
      `,
    },
    {
      title: "Grid Challenge",
      completed: 1,
      example: "",
      difficulty: 0,
      desc: `
      Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
      `,
      functionDesc: `
      Complete the gridChallenge function in the editor below.

      gridChallenge has the following parameter(s):
      
      string grid[n]: an array of strings
      `,
      returns: `
      string: either YES or NO
      `,
      answer: `
      function gridChallenge(grid) {
        const yes = 'YES'
        const no = 'NO'
        let result = []
        
        for(let i  = 0; i < grid.length; i++){
            result.push(grid[i].split('').sort())
        }
        let col = grid[0].length
        for(let j = 0; j < result.length - 1; j++){
            for(let k = 0; k < col; k++){
                if(result[j][k] > result[j + 1][k]){
                    return no
                }
            }
        }    
        return yes    
    }
      `,
    },
    {
      title: "Caeser Cipher",
      completed: 1,
      example: "",
      difficulty: 0,
      desc: `
      Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
      `,
      functionDesc: `
      Complete the caesarCipher function in the editor below.

      caesarCipher has the following parameter(s):
      
      string s: cleartext
      int k: the alphabet rotation factor
      `,
      returns: `
      string: the encrypted string
      `,
      answer: `
      function caesarCipher(cip, r_c) {
        const s_c = /[ {backtick}!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
        const a = ('abcdefghijklmnopqrstuvwxyz').split('')
        let r_a = r(r_c)
        
        //  the meat
        return cip.split('').map((l, l_i) => {
            if(s_c.test(l)){
                return l
            }else {            
                for(let k = 0; k < a.length; k++){
                    switch(true){
                        case l === a[k]:
                            return r_a[k]
                            break;
                        case l.toLowerCase() === a[k]:
                            return r_a[k].toUpperCase()
                            break;
                        default:
                            break;                        
                    }
                }
            }
        }).join('')
        // get result
        function n_l(e){
            let n
            if(s_c.test(e)){
                n = e
            } else {            
                for(let i = 0; i < a.length; i++){
                    if(e == a[i]) {
                        n =  r_a[i]                
                    }
                }
            }
            return n
        }
        // shift array
        function r(x){
            let r_x = [...a]
            for(let i = 0; i < r_c; i++){
                r_x.push(r_x.shift())
            }        
            return r_x
        }
    }
      `,
    },
    {
      title: "Tower Breakers",
      example: "",
      difficulty: 0,
      desc: `
      Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:

      Initially there are n towers.
      Each tower is of height m.
      The players move in alternating turns.
      In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y <= x and y evenly divides x.
      If the current player is unable to make a move, they lose the game.
      Given the values of n and m, determine which player will win. If the first player wins, return . Otherwise, return .
      `,
      functionDesc: `
      Complete the towerBreakers function in the editor below.

      towerBreakers has the following paramter(s):
      
      int n: the number of towers
      int m: the height of each tower
      `,
      returns: `
      int: the winner of the game
      `,
      answer: `
      function towerBreakers(n_t, t_h) {

        return 1+ (1 === t_h || n_t % 2 === 0)
        
    }
      `,
    },
    {
      title: "Counting Sort 1",
      example: "",
      difficulty: 0,
      desc: `
      Quicksort usually has a running time of n * log(n), but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat n * log(n) (worst-case) running time, since n * log(n) represents the minimum number of comparisons needed to know where to place each element.
      `,
      functionDesc: `
      Complete the countingSort function in the editor below.

      countingSort has the following parameter(s):
      
      arr[n]: an array of integers
      `,
      returns: `
      int[100]: a frequency array
      `,
      answer: `
      function countingSort(arr) {

        let result = new Array(100).fill(0)
        
        arr.forEach(element => {
            result[element] += 1
        })
        
        return result
    }
      `,
    },
    {
      title: "Lonely Integer",
      example: "",
      difficulty: 0,
      desc: `
      Given an array of integers, where all elements but one occur twice, find the unique element.
      `,
      functionDesc: `
      Complete the lonelyinteger function in the editor below.

      lonelyinteger has the following parameter(s):
      
      int a[n]: an array of integers
      `,
      returns: `
      int: the element that occurs only once
      `,
      answer: `
      function lonelyinteger(a) {

        if(a.length === 1) return a[0]
    
        let sorted = [...a].sort((a,b) => a - b)
    
        for(let i = 0; i < sorted.length; i += 2){
            if(sorted[i] !== (sorted[i + 1] || 0)) return sorted[i]        
        }
    }
      `,
    },
    {
      title: "Non-Divisable Subset",
      example: "",
      difficulty: 1,
      desc: `
      Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.
      `,
      functionDesc: `
      Complete the nonDivisibleSubset function in the editor below.

      nonDivisibleSubset has the following parameter(s):
      
      int S[n]: an array of integers
      int k: the divisor
      `,
      returns: `
      int: the length of the longest subset of S meeting the criteria
      `,
      answer: `
      Not Completed 
      `, // not completed
    },
    {
      title: "Cut the Sticks",
      example: "",
      difficulty: 0,
      desc: `
      You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

      Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
      `,
      functionDesc: `
      Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

      cutTheSticks has the following parameter(s):
      
      int arr[n]: the lengths of each stick
      `,
      returns: `
      int[]: the number of sticks after each iteration
      `,
      answer: `
      function cutTheSticks(stickLengthsArray) {
    
        // while loop dependencies - purpose:
        // to wittle the iterations from 2 -> 1
        const sortedUniqueLengths = (
            [...new Set(
                stickLengthsArray)
            ].sort((a,b) => a - b)  // removing duplicates as sorting
        )
        let cutLength = sortedUniqueLengths[0]
        let totalAmountCut = 0
        let result = []
        let index = 0
    
        // run this function until the array has depleted
        while(stickLengthsArray.length){
            cutSticks(stickLengthsArray, index)
        }
        
        return result
        
        function cutSticks(arr, i){
            let count = 0
            let newArray = []
            
            arr.forEach(element => {
                count++
                let newElement = element - cutLength
                if(newElement > 0){
                    newArray.push(newElement)
                }
            })
            totalAmountCut += cutLength
            cutLength = (
                // taking the next largest unique stick
                // and subracting for the next shortest length
                sortedUniqueLengths[i + 1] - totalAmountCut
            )
            result.push(count)
            stickLengthsArray = [...newArray]
            index++
            if(!newArray.length) return 
        }
    }
      `,
    },
    {
      title: "Library Fine",
      example: "",
      difficulty: 0,
      desc: `
      Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

      If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.
      If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos * (the number of days late).
      If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos * (the number of months late).
      If the book is returned after the calendar year in which it was expected, there is a fixed fine of .
      Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000 Hackos.
      `,
      functionDesc: `
      Complete the libraryFine function in the editor below.

      libraryFine has the following parameter(s):
      
      d1, m1, y1: returned date day, month and year, each an integer
      d2, m2, y2: due date day, month and year, each an integer
      `,
      returns: `
      int: the amount of the fine or 0 if there is none
      `,
      answer: `
      function libraryFine(d1, m1, y1, d2, m2, y2) {
    
        const yearLength = (
            new Date('2000-01-01').getTime()
            - new Date('1999-01-01').getTime()
        )
        const monthLength = (
            new Date('2000-02-01').getTime()
            - new Date('2000-01-01').getTime()
        )
        const dayLength = (
            new Date('2000-01-02').getTime()
            - new Date('2000-01-01').getTime()
        )
        
        const returnedDate = new Date(${"y1"}-${"m1"}-${"d1"}).getTime()
        const dueDate = new Date("${"y2"}-${"m2"}-${"d2"}).getTime()
        
        const difference = returnedDate - dueDate
        
        
        if(difference <= 0){
            return 0
        }
        if(difference >= yearLength){
            return 10000
        }
        
        if(difference >= monthLength){
            return 500 * (m1 - m2)
        }
        
        if(difference > 0 && y2 < y1){
            return 10000
        }
        
        if(difference > 0 ){
            return 15 * (d1 - d2)
        }    
    }
      `,
    },
    {
      title: "Sherlock and Squares",
      example: "",
      difficulty: 0,
      desc: `
      Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

      Note: A square integer is an integer which is the square of an integer, e.g. 1,4,9,16,25.
      `,
      functionDesc: `
      Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from a to b.

      squares has the following parameter(s):
      
      int a: the lower range boundary
      int b: the upper range boundary
      `,
      returns: `
      int: the number of square integers in the range
      `,
      answer: `
      function squares(
        lowerBoundry, upperBoundry) {
        
        //  Simplifying range calulations from 
        //  potentially infinite range -> two Operations
        
        const lowestPossibleRoot = (
            Math.ceil(Math.sqrt(lowerBoundry))
        )
        const highestPossibleRoot = (
            Math.floor(Math.sqrt(upperBoundry))
        )
        
        let result = 0
        
        if(lowestPossibleRoot > highestPossibleRoot) {
            return 0
        }
           
        return highestPossibleRoot - lowestPossibleRoot + 1
        
    }
      `,
    },
    {
      title: "Append and Delete",
      example: "",
      difficulty: 0,
      desc: `
      You have two strings of lowercase English letters. You can perform two types of operations on the first string:

      1 Append a lowercase English letter to the end of the string.
      2 Delete the last character of the string. Performing this operation on an empty string results in an empty string.
      Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on s. If it's possible, print Yes. Otherwise, print No.
        `,
      functionDesc: `
      Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

      appendAndDelete has the following parameter(s):
      
      string s: the initial string
      string t: the desired string
      int k: the exact number of operations that must be performed
        `,
      returns: `
      string: either Yes or No
        `,
      answer: `
      function appendAndDelete(
        initString, desirString, numberOfOperations) {
    
        const initSplit = initString.split('')
        const desirSplit = desirString.split('')
        const diff = Math.abs(
            initSplit.length 
            - desirSplit.length
        )
        const combTotal = (
            initSplit.length 
            + desirSplit.length
        )
        
        if(diff > numberOfOperations){
            return "No"
        }
        
        if(combTotal < numberOfOperations){
            return "Yes"
        }
        
        return findAnswer()
        
        
        function findAnswer() {
            let initialNewLength = initSplit.length
            let desiredNewLength = desirSplit.length
            let diff = undefined
            
            initSplit.every((element,i) => {
                if(!desirSplit[i]) return false
                if(element === desirSplit[i]){
                    initialNewLength--
                    desiredNewLength--
                    return true
                }            
                return false
            })
            
            diff = initialNewLength + desiredNewLength
            
            if(diff <= numberOfOperations){            
                if((numberOfOperations - diff) % 2){
                    return "No"                
                } else {
                    return "Yes"
                }
            } else {
                return "No"
            }        
        }
    }
        `,
    },
    {
      title: "Extra Long Factorials",
      example: "",
      difficulty: 1,
      desc: `
        The factorial of the integer n, written n!, is defined as: " n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1 "

        Calculate and print the factorial of a given integer.
        
        For example, if n = 30, we calculate 30 * 29 * 28 * ... * 2 * 1 and get 265252859812191058636308480000000.
        `,
      functionDesc: `
        Complete the extraLongFactorials function in the editor below. It should print the result and return.

        extraLongFactorials has the following parameter(s):
        
        n: an integer
        `,
      returns: `
        Print the factorial of n.
        `,
      answer: `
        function extraLongFactorials(n) {

            let bigInteger = BigInt('1')
            
            for(let i = 2; i <= n; i++){
                bigInteger *= BigInt(i)
            }
            
            console.log(bigInteger.toString())
        }
        `,
    },
    {
      title: "Find Digits",
      example: "",
      difficulty: 0,
      desc: `
        An integer d is a divisor of an integer n if the remainder of n / d = 0.

        Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
        `,
      functionDesc: `
        Complete the findDigits function in the editor below.

        findDigits has the following parameter(s):
        
        int n: the value to analyze
        `,
      returns: `
        int: the number of digits in n that are divisors of n
        `,
      answer: `
        function findDigits(value) {
            const valuesOfValue = value.toString().split('')
            let numberOfDivisors = 0
            
            valuesOfValue.forEach(v => {
                if(value % v === 0){
                    numberOfDivisors++
                } 
            })    
            return numberOfDivisors
        }
        `,
    },
    {
      title: "Jumping on the Clouds",
      example: "",
      difficulty: 0,
      desc: `
        A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

        There is an array of clouds, c and an energy level e = 100. The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i + k) % n]. If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud .
        
        Given the values of n, k, and the configuration of the clouds as an array c, determine the final value of e after the game ends.
        `,
      functionDesc: `
        Complete the jumpingOnClouds function in the editor below.

        jumpingOnClouds has the following parameter(s):
        
        int c[n]: the cloud types along the path
        int k: the length of one jump
        `,
      returns: `
        int: the energy level remaining.
        `,
      answer: `
        function jumpingOnClouds(cloudTypesArray, jumpingLength) {
        
            const cloudLength = cloudTypesArray.length
            
            let energyLevel = 100
            let location = 0
            
            return startJumping()
            
            function startJumping() {
                location = (
                    (location + jumpingLength) 
                    % cloudLength
                )
                energyLevel--
                
                if(cloudTypesArray[location] === 1){
                    energyLevel -= 2
                }
                
                if(location === 0) return energyLevel
                
                return startJumping()
            }
        }
        `,
    },
    {
      title: "Sequence Equation",
      example: "",
      difficulty: 0,
      desc: `
        Given a sequence of n integers, p(1), p(2),...,p(n) where each element is distinct and satisfies 1 <= p(x) <= n. For each x where 1 <= x <= n, that is x increments from 1 to n, find any integer y such that p(p(y)) === x and keep a history of the values of y in a return array.
        `,
      functionDesc: `
        Complete the permutationEquation function in the editor below.

        permutationEquation has the following parameter(s):
        
        int p[n]: an array of integers
        `,
      returns: `
        int[n]: the values of y for all x in the arithmetic sequence 1 to n
        `,
      answer: `
        function permutationEquation(arr) {
    
            let arithmeticSequence = []
            
            for(let i = 1; i <= arr.length; i++){
                getPermutation(i)
            }
        
            return arithmeticSequence
        
            function getPermutation(i){
                arithmeticSequence.push(
                    arr.indexOf(arr.indexOf(i) + 1) + 1
                )
            }
        }
        `,
    },
    {
      title: "Circular Array Rotation",
      example: "",
      difficulty: 0,
      desc: `
        John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

        For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
        `,
      functionDesc: `
        Complete the circularArrayRotation function in the editor below.

        circularArrayRotation has the following parameter(s):
        
        int a[n]: the array to rotate
        int k: the rotation count
        int queries[1]: the indices to report
        `,
      returns: `
        int[q]: the values in the rotated a as requested in m
        `,
      answer: `
        function circularArrayRotation(
            arr, rotationCount, queries ) {  
        
            rotationCount %= arr.length
            rotateRight(-rotationCount)
        
            return queries.map(data => arr[data])
            
            function rotateRight(x) {
                let firstHalf = [...arr].slice(0,x)
                let secondHalf = [...arr].slice(x)
                
                arr =  secondHalf.concat(firstHalf)
            }
        }
        `,
    },
    {
      title: "Save The Prisoner!",
      example: "",
      difficulty: 0,
      desc: `
        A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

        The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.
        `,
      functionDesc: `
        Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

        saveThePrisoner has the following parameter(s):
        
        int n: the number of prisoners
        int m: the number of sweets
        int s: the chair number to begin passing out sweets from
        `,
      returns: `
        int: the chair number of the prisoner to warn
        `,
      answer: `
        function saveThePrisoner(
            numberOfPrisoners,
            numberOfTreats,
            startingChair
            ){
                
            return (
                (((numberOfTreats % numberOfPrisoners) + 
                    (startingChair - 1)) % numberOfPrisoners) 
                    || numberOfPrisoners
            )
        }
        `,
    },
    {
      title: "Viral Advertising",
      example: "",
      difficulty: 0,
      desc: `
        HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

        On the first day, half of those 5 people (i.e., floor(5/2) = 2) like the advertisement and each shares it with 3 of their friends. At the beginning of the second day, floor(5/2) * 3 = 2 * 3 = 6 people receive the advertisement.
        
        Each day, floor(recipients / 2) of the recipients like the advertisement and will share it with 3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
        `,
      functionDesc: `
        Complete the viralAdvertising function in the editor below.

        viralAdvertising has the following parameter(s):
        
        int n: the day number to report
        `,
      returns: `
        int: the cumulative likes at that day
        `,
      answer: `
        function viralAdvertising(reportedDay) {

            let sharedAmount = 5
            let accumulatedLikes = 0
            
            for(let i = 0; i < reportedDay; i++){
                calculateTheDay()
            }
            
            return accumulatedLikes
            
            function calculateTheDay() {
                let likes = Math.floor(sharedAmount / 2)
                sharedAmount = likes * 3
                accumulatedLikes += likes
            }
        }
        `,
    },
    {
      title: "Beautiful Day at the Movies",
      example: "",
      difficulty: 0,
      desc: `
      Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

      She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
      
      Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
        `,
      functionDesc: `
      Complete the beautifulDays function in the editor below.

      beautifulDays has the following parameter(s):
      
      int i: the starting day number
      int j: the ending day number
      int k: the divisor
        `,
      returns: `
      int: the number of beautiful days in the range
        `,
      answer: `
      function beautifulDays(startingDay, endingDay, divisor) {

        let beautifulDays = 0
        
        for(let i = startingDay; i <= endingDay; i++){
            
            let reverse = parseInt(i.toString().split('').reverse().join(''))
            
            Math.abs(i - reverse) % divisor === 0
            && beautifulDays++
        }
        
        return beautifulDays
    }
        `,
    },
    {
      title: "Angry Professor",
      example: "",
      difficulty: 0,
      desc: `
      A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrrivalTime <= 0) to arrived late (arrivalTime > 0).

      Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
        `,
      functionDesc: `
      Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

      angryProfessor has the following parameter(s):
      
      int k: the threshold number of students
      int a[n]: the arrival times of the n students
        `,
      returns: `
      string: either YES or NO
        `,
      answer: `
      function angryProfessor(threshold, arivalTimes) {

        let lateStudentCount = 0
        
        arivalTimes.forEach(time => {
            time <= 0 && lateStudentCount++
        })
        
        return(
            lateStudentCount >= threshold ?
            "NO" : "YES"
        )
    }
        `,
    },
    {
      title: "The Hurdle Race",
      example: "",
      difficulty: 0,
      desc: `
        A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.
        `,
      functionDesc: `
        Complete the hurdleRace function in the editor below.

        hurdleRace has the following parameter(s):
        
        int k: the height the character can jump naturally
        int height[n]: the heights of each hurdle
        `,
      returns: `
        int: the minimum number of doses required, always 0 or more
        `,
      answer: `
        function hurdleRace(jumpingHeight, hurdleHeights) {
    
            const requiredJumpingHeight = (
                Math.max(...hurdleHeights)
            )
            const difference = requiredJumpingHeight - jumpingHeight
            
            return (
                difference > 0 ?
                difference : 0
            )
        }
        `,
    },
    {
      title: "Picking Numbers",
      example: "",
      difficulty: 0,
      desc: `
        Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .
        `,
      functionDesc: `
        Complete the pickingNumbers function in the editor below.

        pickingNumbers has the following parameter(s):
        
        int a[n]: an array of integers
        `,
      returns: `
        int: the length of the longest subarray that meets the criterion
        `,
      answer: `
        function pickingNumbers(arr) {
    
            let totals = []
            let bestTotal = 0
            
            arr.forEach(a => {
                totals[a] = (totals[a] || 0) + 1
            })
            
            totals.forEach((value,i) => {
                let total = value + (totals[i + 1] || 0)
                if(total > bestTotal){
                    bestTotal = total
                }
            })
            
            return bestTotal    
        }
        `,
    },
    {
      title: "Utopian Tree",
      difficulty: 0,
      desc: `The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

    A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?`,
      functionDesc: `
    Complete the utopianTree function in the editor below.

utopianTree has the following parameter(s):

int n: the number of growth cycles to simulate
    `,
      returns: `
    int: the height of the tree after the given number of cycles
    `,
      answer: `
      function utopianTree(n) {
        let height = 1
        
        for(let i = 0; i < n; i++) {
            updateHeight(i)
        }
        
        return height
        
        function updateHeight(x) {
            switch(true){
                case x % 2 === 0:
                    height *= 2
                    break;
                default:
                    height += 1
                    break;
            }
        }
    }
      `,
    },
    {
      title: "Designer PDF Viewer",
      difficulty: 0,
      desc: `
      When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.

      There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at 25 index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm^2 wide.
      `,
      functionDesc: `
      Complete the designerPdfViewer function in the editor below.

      designerPdfViewer has the following parameter(s):
      
      int h[26]: the heights of each letter
      string word: a string
    `,
      returns: `
      int: the size of the highlighted area
    `,
      answer: `
      function designerPdfViewer(h, word) {
        const wordFormatted = word.trim().split('').filter(x => x !== ' ')
        
        const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
        
        let length = wordFormatted.length
        let value = []
        
        wordFormatted.forEach(element => {
            let v = 0
            alphabet.forEach((e, i) => {
                if(e === element) {
                    return value.push(h[i])
                }
            })
        })
        
        let max = Math.max(...value)
        
        return max * length
    }
      `,
    },
    {
      title: "Cat and a Mouse",
      example: "",
      difficulty: 0,
      desc: `
      Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given  queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C Complete the function carAndMouse to return the appropriate answer to each query, which will be printed on a new line.

If cat A catches the mouse first, print Cat A.
If cat B catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
      `,
      functionDesc: `
      Complete the catAndMouse function in the editor below.

catAndMouse has the following parameter(s):

int x: Cat A's position
int y: Cat B's position
int z: Mouse C's position
      `,
      returns: `
      string: Either 'Cat A', 'Cat B', or 'Mouse C'
      `,
      answer: `
      function catAndMouse(x, y, z) {
        const catA = "Cat A"
        const catB = "Cat B"
        const bothCats = "Mouse C"
        const catADistance = Math.abs(z - x)
        const catBDistance = Math.abs(z - y)
        
        switch(true){
            case catADistance === catBDistance:
                return bothCats
                break;
            case catADistance > catBDistance:
                return catB
                break;
            case catADistance < catBDistance:
                return catA
                break;
            default:
                break
        }
    }
      `,
    },
    {
      title: "Electronics Shop",
      example: "",
      difficulty: 0,
      desc: `
      A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .
      `,
      functionDesc: `
      Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
      `,
      returns: `
      int: the maximum that can be spent, or  if it is not possible to buy both items
      `,
      answer: `
      function getMoneySpent(keyboards, drives, b) {

        let kbArray = keyboards.sort().reverse()
        let dArray = drives.sort().reverse()
        
        let totalSpent = 0
        
        console.log("kb:", kbArray)
        console.log("d:", dArray)
        console.log('b:', b)
        
        kbArray.forEach(element => {
            if(element < b){
                dArray.forEach(element2 => {
                    if(element + element2 <= b && element + element2 > totalSpent ){
                        totalSpent =  element + element2
                    }
                })
            }
        })
        
        if(totalSpent === 0) return -1
        
        return totalSpent
    }
      `,
    },
    {
      title: "Counting Valleys",
      example: "",
      difficulty: 0,
      desc: `
      An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
      `,

      functionDesc: `
      Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
      `,
      returns: `
      int: the number of valleys traversed
      `,
      answer: `
      function countingValleys(steps, path) {

        let pathArray = path.split('')
        let altitute = 0
        let valleys = 0
        
        pathArray.forEach(element => {
            switch(element) {
                case "U":
                    altitute++
                    break;
                case "D":
                    if(altitute === 0){
                        valleys++
                    }
                    altitute--
                    break;
                default:
                    break;
            }
        })
    return valleys
    }
      `,
    },
    {
      title: "Drawing Book",
      example: "",
      difficulty: 0,
      desc: `
      A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.
When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is 'n' pages long, and a student wants to turn to page 'p', what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given 'n' and 'p', find and print the minimum number of pages that must be turned in order to arrive at page 'p'.
      `,

      functionDesc: `
      Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

int n: the number of pages in the book
int p: the page number to turn to
      `,
      returns: `
      int: the minimum number of pages to turn
      `,
      answer: `
      function pageCount(n, p) {
    
        let isInFirstHalfOfArray = p <= Math.floor(n / 2)
        let result = 0
        
        if(isInFirstHalfOfArray){
            result = Math.floor(p / 2)
        } else {
            if(n - p === 1) {
                 result = 1
            } else {
                
            result = Math.floor((n - p) / 2)
            }
        }    
        return result
    }
      `,
    },
    {
      title: "Sales By Match",
      example: "",
      difficulty: 0,
      desc: `
      There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
      `,

      functionDesc: `
      Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
      `,
      returns: `
      int: the number of pairs
      `,
      answer: `
      function sockMerchant(n, ar) {

        let pairs = 0
        let colors = []
        
        ar.forEach(e1ement => {
            let found = colors.some(data => data === e1ement)
            
            if(!found) {
                colors.push(e1ement)
            }
        })
        
        colors.forEach(element => {
            let total = 0
            ar.forEach(e1ement2 => {
                if(element === e1ement2) total++
            })
            
            if(total % 2 === 0){
                pairs += total / 2
            } else {
                pairs += (total - 1) / 2
            }
        })   
        
        return pairs
    }
      `,
    },
    {
      title: "Bill Division",
      example: "",
      difficulty: 0,
      desc: `
      Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4)/2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4 + 6)/2 = 6. In the second case, he should refund 3 to Anna.
      `,

      functionDesc: `
      Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
      `,
      returns: `
      console.log('results')
      `,
      answer: `
      function bonAppetit(bill, k, b) {

        let totalBill = bill.reduce((x,y) => x + y)    
        
        if((totalBill - bill[k]) /2 === b) return console.log('Bon Appetit')
    
        return console.log(Math.abs((totalBill - bill[k])/2 - b))
    }
      `,
    },
    {
      title: "Migratory Birds",
      example: "",
      difficulty: 0,
      desc: `
      Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
      `,

      functionDesc: `
      Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
      `,
      returns: `
      int: the lowest type id of the most frequently sighted birds
      `,
      answer: `
      function migratoryBirds(arr) {

        let arr1 = [0,0,0,0,0]
        let total = 0
        let result = 0
        
        for(let i = 0; i < 5; i++){
            arr.forEach(element => {
                if(element === i + 1) arr1[i]++
            })        
        }
        
        arr1.forEach((element, index) => {
            if(element > total) {
                result = index
                total = element
            }
        })
    
        return result + 1
    }
      `,
    },
    {
      title: "Divisable Sum Pairs",
      example: "",
      difficulty: 0,
      desc: `
      Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.
      `,

      functionDesc: `
      Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
      `,
      returns: `
      int: the number of pairs
      `,
      answer: `
      function divisibleSumPairs(n, k, ar) {

        let result = 0
        
        const getResult = (newArr) => {   
                 
            if(!newArr.length) return result   
                 
            newArr.forEach((element, index) => {
                if(index !== 0) {
                    if((newArr[0] + element) %  k  === 0) {
                        result += 1
                    }
                }            
            })
    
            return getResult([...newArr].splice(1,newArr.length-1))        
        }    
        return getResult(ar)
    }
      `,
    },
    {
      title: "SubArray Division",
      example: "",
      difficulty: 0,
      desc: `
      Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

      Lily decides to share a contiguous segment of the bar selected such that:
      
      The length of the segment matches Ron's birth month, and,
      The sum of the integers on the squares is equal to his birth day.
      Determine how many ways she can divide the chocolate.
      `,
      functionDesc: `
      Complete the birthday function in the editor below.

      birthday has the following parameter(s):
      
      int s[n]: the numbers on each of the squares of chocolate
      int d: Ron's birth day
      int m: Ron's birth month
      `,
      returns: `
      int: the number of ways the bar can be divided
      `,
      answer: `
      function birthday(s, d, m) {    
        const length = m
        const sum = d    
        // check if argument is valid
        if(!s[length - 1]) return 0
        
        let startIndex = 0
        let result = 0   
        
        const results = (start) => {
            if(!s[start + (length - 1)]) return result
            
            let tempArray = [...s].splice(start, length)
            let total = 0
            
            tempArray.forEach(element => {
                total += element
            })
            
            console.log(total)
            if(total === sum) {
                result += 1
            }        
            return results(start + 1)       
        }        
        return results(startIndex)
    }
      `,
    },
    {
      title: "Breaking The Records",
      example: "",
      difficulty: 0,
      desc: `
      Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
      `,
      functionDesc: `
      Complete the breakingRecords function in the editor below.

      breakingRecords has the following parameter(s):
      
      int scores[n]: points scored per game
      `,
      returns: `
      int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
      `,
      answer: `
      function breakingRecords(scores) {

        let results = [0,0]
        let min = scores[0]
        let max = scores[0]
        
        scores.forEach(element => {
            switch(true){
                case (element < min):
                    min = element
                    results[1]++
                    break;
                case (element >= min && element <= max):
                    break;
                case (element > max):
                    max = element
                    results[0]++
                    break;
                default:
                    break;
            }
        })    
        return results
    }
      `,
    },
    {
      title: "Between Two Seats",
      example: "",
      difficulty: 0,
      desc: `
      There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

      1. The elements of the first array are all factors of the integer being considered
      2. The integer being considered is a factor of all elements of the second array
      These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
      `,
      functionDesc: `
      Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

      getTotalX has the following parameter(s):
      
      int a[n]: an array of integers
      int b[m]: an array of integers
      `,
      returns: `
      int: the number of integers that are between the sets
      `,
      answer: `
      function getTotalX(a, b) {

        let arr = []
        
        if(a[a.length - 1] > b[0]) return 0
        
        for(let i = a[a.length - 1]; i <= b[0]; i++){
            let count = 0
            
            // check if all elements of first array are factors of integer
            a.forEach(element => {
                if(i % element === 0) count++
            })
            
            // if integer factors all elements of second array 
            if(count === a.length){
                console.log(i)
                let c = 0
                b.forEach(element => {
                    // console.log(i, element)
                    if(element % i === 0) c++
                })    
                        
                // console.log(c)            
                if(c === b.length) arr.push(i)            
            }
        }
        
        return arr.length
    }
      `,
    },
    {
      title: "Number Line Jumps",
      example: "",
      difficulty: 0,
      desc: `
      You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

      - The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
      - The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
      You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
      `,
      functionDesc: `
      Complete the function kangaroo in the editor below.

      kangaroo has the following parameter(s):
      
      int x1, int v1: starting position and jump distance for kangaroo 1
      int x2, int v2: starting position and jump distance for kangaroo 2
      `,
      returns: `
      string: either YES or NO
      `,
      answer: `
      function kangaroo(x1, v1, x2, v2) {
    
        if(v1 <= v2) return "NO"    
           
        if(x1 === x2) return "YES"
            
        if(x1 > x2) return "NO"
            
        if(x1 < x2) return kangaroo(x1 + v1, v1,x2 + v2,v2)
    }
      `,
    },
    {
      title: "Apple and Orange",
      example: "",
      difficulty: 0,
      desc: `
      Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
      
      - The red region denotes the house, where 's' is the start point, and 't' is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
      - Assume the trees are located on a single point, where the apple tree is at point 'a', and the orange tree is at point 'b'.
      - When a fruit falls from its tree, it lands 'd' units of distance from its tree of origin along the x-axis. *A negative value of 'd' means the fruit fell 'd' units to the tree's left, and a positive value of 'd' means it falls 'd' units to the tree's right. *
      Apple and orange(2).png
      
      Given the value of 'd' for 'm' apples and 'n' oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?
      `,
      functionDesc: `
      Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

      countApplesAndOranges has the following parameter(s):
      
      s: integer, starting point of Sam's house location.
      t: integer, ending location of Sam's house location.
      a: integer, location of the Apple tree.
      b: integer, location of the Orange tree.
      apples: integer array, distances at which each apple falls from the tree.
      oranges: integer array, distances at which each orange falls from the tree.
      `,
      returns: `
      console.log('results')
      `,
      answer: `
      function countApplesAndOranges(s, t, a, b, apples, oranges) {

        let appleCount = 0
        let orangeCount = 0
        
        const appleArr = apples.map(data => data + a)
        const orangeArr = oranges.map(int => int + b)
        
        const totalInRange = (arr) => {
            let count = 0
            for(let i = 0; i < arr.length; i++){
                if(arr[i] >= s && arr[i] <= t){
                    count++
                }
            }
            
            return count
        }            
        
        console.log(totalInRange(appleArr))
        console.log(totalInRange(orangeArr))
    }
      `,
    },
    {
      title: "Grading Students",
      example: "",
      difficulty: 0,
      desc: `
      HackerLand University has the following grading policy:

      Every student receives a 'grade' in the inclusive range from 0 to 100.
      Any 'grade' less than 40 is a failing grade.
      Sam is a professor at the university and likes to round each student's 'grade' according to these rules:
      
      If the difference between the 'grade' and the next multiple of 5 is less than 3, round 'grade' up to the next multiple of 5.
      If the value of 'grade' is less than 38, no rounding occurs as the result will still be a failing grade.
      `,
      functionDesc: `
      Complete the function gradingStudents in the editor below.

      gradingStudents has the following parameter(s):
      
      int grades[n]: the grades before rounding
      `,
      returns: `
      int[n]: the grades after rounding as appropriate
      `,
      answer: `
      function gradingStudents(grades) {

        let result = []
        let arr = [40,45,50,55,60,65,70,75,80,85,90,95,100]
        
        for(let i = 0; i < grades.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] >= grades[i]){
                    if(arr[j] - grades[i] < 3){
                        result.push(arr[j])
                    } else {
                        result.push(grades[i])
                    }                
                    break
                }
            }
        }
        
        return result
    }
      `,
    },
    {
      title: "Time Conversion",
      example: "",
      difficulty: 0,
      desc: `
      Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

      Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
      - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
      `,
      functionDesc: `
      Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

      timeConversion has the following parameter(s):
      
      string s: a time in 12 hour format
      `,
      returns: `
      string: the time in 24 hour format
      `,
      answer: `
      function timeConversion(s) {

        let arr = s.split(':')
        const split = arr[arr.length-1].split('')
        
        arr[arr.length - 1] = split[0] + split[1]
        
        let intFormat = arr.map(data => parseInt(data))
        const timeOfDay = split[2] + split[3]    
        
        if(intFormat[1] < 10) intFormat[1] = '0' + intFormat[1].toString()
        if(intFormat[2] < 10) intFormat[2] = '0' + intFormat[2].toString()
        
        if(timeOfDay === 'AM'){
            if(intFormat[0] === 12){
                intFormat[0] = 0
            } 
            if(intFormat[0] < 10) intFormat[0] = '0' + intFormat[0].toString()
                    
        } else {
            
            if(intFormat[0] === 12){
                intFormat[0] = 12
            } else {
                intFormat[0] += 12
            }
        }            
        
        return (
        intFormat[0].toString() +':'+ 
        intFormat[1].toString() +':'+ 
        intFormat[2].toString()
        )
        
    }
      `,
    },
    {
      title: "Birthday Cake Candles",
      example: "",
      difficulty: 0,
      desc: `
      You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
      `,
      functionDesc: `
      Complete the function birthdayCakeCandles in the editor below.

      birthdayCakeCandles has the following parameter(s):
      
      int candles[n]: the candle heights
      `,
      returns: `
      int: the number of candles that are tallest
      `,
      answer: `
      function birthdayCakeCandles(candles) {

        const highestNumber = () => {
            
            let highestNum = 0
            
            for(let i = 0; i < candles.length; i++){
                if(candles[i] > highestNum){
                    highestNum = candles[i]
                }
            }
            
            return highestNum
        }
        
        const totalAppearances = (x) => {
            
            let result = 0
            
            for(let i = 0; i < candles.length; i++){
                if(candles[i] === x) result++
            }
            return result
        }
        
        return totalAppearances(highestNumber())
        
    }
      `,
    },
    {
      title: "Mini-Max Sum",
      example: "",
      difficulty: 0,
      desc: `
      Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
      `,
      functionDesc: `
      Complete the miniMaxSum function in the editor below.

      miniMaxSum has the following parameter(s):
      
      arr: an array of 5 integers
      `,
      returns: `
      Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
      `,
      answer: `
      function miniMaxSum(arr) {

        const sortedArr = arr.sort((a, b) => a - b)
        
        let minSum = sortedArr[0]
        let maxSum = sortedArr[arr.length - 1]
        
        for(let i = 1; i< arr.length - 1; i++){
           minSum += sortedArr[i]
           maxSum += sortedArr[i]
        }     
        
        console.log(minSum, maxSum)    
   
   }
      `,
    },
    {
      title: "Staircase",
      example: "",
      difficulty: 0,
      desc: `
      Staircase detail

      This is a staircase of size n = 4:
      
      line1:  #
      line2: ##
      line3:###
      line4:####

      Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
      `,
      functionDesc: `
      Complete the staircase function in the editor below.

      staircase has the following parameter(s):
      
      int n: an integer
      `,
      returns: `
      Print a staircase as described above.
      `,
      answer: `
      function staircase(n) {
    
        let result = ''
        let starting = n
        
        for(let i = 0; i < n; i++){
            let result = ''
            for(let j = 0; j < n; j++){
                if(j >= starting - 1){
                    result += '#'
                } else {
                    result += ' '
                }
            }
            starting--
            console.log(result)
        }
    }
      `,
    },
    {
      title: "Plus Minus",
      example: "",
      difficulty: 0,
      desc: `
      Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

      Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
      `,
      functionDesc: `
      Complete the plusMinus function in the editor below.

      plusMinus has the following parameter(s):
      
      int arr[n]: an array of integers
      `,
      returns: `
      Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.
      `,
      answer: `
      function plusMinus(arr) {
        let positive = 0
        let negative = 0
        let zero = 0
        
        for(let i = 0; i < arr.length; i++){
            switch(true){
                case arr[i] < 0:
                    negative++
                    break;
                case arr[i] > 0:
                    positive++
                    break;
                default:
                    zero++
                    break;
            }
        }
        console.log((positive/arr.length).toFixed(6))
        console.log((negative/arr.length).toFixed(6))
        console.log((zero/arr.length).toFixed(6))
    
    }
      `,
    },
    {
      title: "Diagonal Difference",
      example: "",
      difficulty: 0,
      desc: `
      Given a square matrix, calculate the absolute difference between the sums of its diagonals.

      For example, the square matrix  is shown below:

      line1: 123
      line2: 456
      line3: 989

      The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
      `,
      functionDesc: `
      Complete the diagonalDifference function in the editor below.

      diagonalDifference takes the following parameter:
      
      int arr[n][m]: an array of integers
      `,
      returns: `
      int: the absolute diagonal difference
      `,
      answer: `
      function diagonalDifference(arr) {

        let negDiag = 0
        let posDiag = 0    
        
        for(let i = 0; i < arr.length; i++){
            negDiag += arr[i][i]
            posDiag += arr[(arr.length - 1) - i][i]
        }    
        
        return Math.abs(negDiag - posDiag)
    }
      `,
    },
    {
      title: "A Very Big Sum",
      example: "",
      difficulty: 0,
      desc: `
      In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
      `,
      functionDesc: `
      Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

      aVeryBigSum has the following parameter(s):
      
      int ar[n]: an array of integers .
      `,
      returns: `
      long: the sum of all array elements
      `,
      answer: `
      function aVeryBigSum(ar) {
    
        let result = 0
        
        for(let i = 0; i < ar.length; i++){
            result += ar[i]
        }    
        return result
    }
      `,
    },
    {
      title: "Compair The Triplets",
      example: "",
      difficulty: 0,
      desc: `
      Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

      The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
      
      The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
      
      If a[i] > b[i], then Alice is awarded 1 point.
      If a[i] < b[i], then Bob is awarded 1 point.
      If a[i] = b[i], then neither person receives a point.
      Comparison points is the total points a person earned.
      
      Given a and b, determine their respective comparison points.
      `,
      functionDesc: `
      Complete the function compareTriplets in the editor below.

      compareTriplets has the following parameter(s):
      
      int a[3]: Alice's challenge rating
      int b[3]: Bob's challenge rating
      `,
      returns: `
      int[2]: Alice's score is in the first position, and Bob's score is in the second.
      `,
      answer: `
      function compareTriplets(a, b) {
    
        let personA = 0
        let personB = 0
        
        if(a.length !== b.length) {
            return console.log('arrays are not of equal size')
        }
            
        for(let i = 0; i < a.length; i++){
            switch(true){
                case a[i] > b[i]:
                    personA += 1
                    break;
                case a[i] < b[i]:
                    personB += 1
                    break;
                default:
                    break
            }
        }
        
        return [personA,personB]
    }
      `,
    },
    {
      title: "Simple Array Sum",
      example: "",
      difficulty: 0,
      desc: `
      Given an array of integers, find the sum of its elements.

      For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6 , so return 6.
      `,
      functionDesc: `
      Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

      simpleArraySum has the following parameter(s):
      
      ar: an array of integers
      `,
      returns: `
      Print the sum of the array's elements as a single integer.
      `,
      answer: `
      function simpleArraySum(ar) {
        let result = 0
        for(let i = 0; i < ar.length; i++){
            result += ar[i]
        }
        return result
    }
      `,
    },
    {
      title: "Solve Me First",
      example: "",
      difficulty: 0,
      desc: `
      Complete the function solveMeFirst to compute the sum of two integers.
      `,
      functionDesc: `
      Complete the solveMeFirst function in the editor below.

      solveMeFirst has the following parameters:
      
      int a: the first value
      int b: the second value
      `,
      returns: `
      int: the sum of a and b
      `,
      answer: `
      function solveMeFirst(a, b) {
        return a + b
      }
      `,
    },
    {
      title: "Queens Attack II",
      example: "",
      difficulty: 1,
      desc: `
      You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

      A queen is standing on an nxn chessboard. The chess board's rows are numbered from 1 to n, going from bottom to top. Its columns are numbered from 1 to n, going from left to right. Each square is referenced by a tuple, (r,c), describing the row, r, and column, c, where the square is located.
      
      The queen is standing at position (queenRow,QueenCol). In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals).
      
      
      There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path.
      
      Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at (queenRow,QueenCol).
      `,
      functionDesc: `
      Complete the queensAttack function in the editor below.

      queensAttack has the following parameters:
      - int n: the number of rows and columns in the board
      - nt k: the number of obstacles on the board
      - int r_q: the row number of the queen's position
      - int c_q: the column number of the queen's position
      - int obstacles[k][2]: each element is an array of 2 integers, the row and column of an obstacle
      `,
      returns: `
      int: the number of squares the queen can attack
      `,
      answer: `
      function queensAttack(
        boardSize, 
        numOfObstacles, 
        queenRow, 
        queenCol, 
        obstacles
        ) {
        
        let top = boardSize - queenRow
        let right = boardSize - queenCol
        let bottom = queenRow - 1
        let left = queenCol - 1
        let topRight = Math.min(
            top, right
        )
        let topLeft = Math.min(
            top, left
        )
        let bottomRight = Math.min(
            bottom, right
        )
        let bottomLeft = Math.min(
            bottom, left
        )
        
        includeObstacles()
        
        return [
            top,
            right,
            bottom,
            left,
            topRight,
            topLeft,
            bottomRight,
            bottomLeft
        ].reduce((x,y) => x + y)
        
        function includeObstacles() {
            obstacles.forEach(
            ([obstacleRow, obstacleCol]) => {
            switch(true){
                // top
                case (
                    obstacleCol === queenCol
                    && obstacleRow > queenRow
                ):
                    top = Math.min(
                        top, obstacleRow - queenRow - 1
                    )
                    break;
                // bottom
                case (
                    obstacleCol === queenCol
                    && obstacleRow < queenRow
                ):
                    bottom = Math.min(
                        bottom, queenRow - obstacleRow - 1
                    )
                    break;
                // left
                case (
                    obstacleRow === queenRow 
                    && obstacleCol < queenCol
                ):
                    left = Math.min(
                        left, queenCol - obstacleCol - 1
                    )
                    break;
                // right
                case (
                    obstacleRow === queenRow
                    && obstacleCol > queenCol
                ):
                    right = Math.min(
                        right, obstacleCol - queenCol - 1
                    )
                    break;
                // top right
                case (
                    obstacleCol > queenCol
                    && obstacleRow > queenRow
                    && (obstacleCol - queenCol
                    === obstacleRow - queenRow)
                ):
                    topRight = Math.min(
                        topRight, obstacleRow - queenRow - 1
                    )
                    break;
                // top left
                case (
                    obstacleRow > queenRow
                    && obstacleCol < queenCol
                    && (queenCol - obstacleCol 
                    === obstacleRow - queenRow)
                ):
                    topLeft = Math.min(
                        topLeft, obstacleRow - queenRow - 1
                    )
                    break;
                // bottom right
                case (
                    obstacleCol > queenCol
                    && obstacleRow < queenRow
                    && (obstacleCol -  queenCol 
                    === queenRow - obstacleRow)
                ):
                    bottomRight = Math.min(
                        bottomRight, queenRow - obstacleRow - 1
                    )
                    break;
                //bottom left
                case (
                    obstacleCol < queenCol
                    && obstacleRow < queenRow
                    && (queenCol - obstacleCol 
                    === queenRow - obstacleRow)
                ):
                    bottomLeft = Math.min(
                        bottomLeft, queenRow - obstacleRow - 1
                    )
                    break;
                default:
                    break;
            }
        })
    }
      `,
    },
  ];
};
