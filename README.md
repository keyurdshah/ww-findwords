# Weekend Health Take-home Challenge
## Word-Formation Puzzle 

### Objective

Implement a function named findWords that accepts two arguments: 1) an input string and 2) a dictionary. 
This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. 
Each letter in the input string may be used up to once per word.

Let's take an example for our function `function findWords(input,dictionary)`

```javascript
findWords(input = "oodg", dictionary = ["goodness", "dot","dog","good","do","gooo"])
//expected result ["dog","good","do"]
```

### Approach

Decalare a storage `results` to keep each word is successfully generating formation of input's letters.

#### Step 1

As mentioned in objective that each letter upto once per word, Itereate through each letter of `input`. and construct a `Map<string:number>`. where `key` is letter and `value` is repeatitive count. This will help us to lookup each letter, of a word from dictionary, in `O(1)` time-complexity. 

#### Step 2 

create a private `function isFormation(lMap:Map<string:number>,word:string)` which use above map and iterate each letter to check if it is part of formation.  

here the logic is:

for each letter, 

1) If the lettter not found in the `map`, at any iteration step,  then break the loop. here `matchCount` will not match to `word.length` and will return `False`.
2) But, if the letter is in the `map` reduce the count of `key` (as letter) which tick the 1 count of letter. sometimes, letter repeate more than once thus continue subtracting `1` for repeatation until reach to `0`. Also, keep increment counter `matchCount` by `1` for each matching letter , including repeatation. 
3) If you have same letter more than allowed repeatiation, break the for loop, and return false.
    e.g. if the letter `o` comes `3` times for word `gooo`, input is only having `2` counts for `o` allowed, the third repeation is not forming word from input.
4) If all letters are matched but word is still have additional letter, breaks the loop and compare  `matchCount` with  `word.length` which eventually return `False`.
5) If all letters are matched (i.e. each `key` has `value` became `0`) and `matchCount` is equal to `word.length` that says, we have found the formation and return `True`.

#### Step 3 

Here we are going to create copy of `letterMap` created in step 1, to avoid loosing original count of letter while operation over function `isFormation(letterMap,word)` in above step 2. 

Keep appending the `word` to `results`. 

Hurray!!!! Results match with expacted output. 

Let's talk about Space complexity, O(n) for returning the results
Let's talk about Time complexity, O(n) [for loop to generate map] +  O(W1) + O (W2) + ... + O(Wn) [for each letter in the word for each word] + = O(n + W1 + ...+ Wn).













