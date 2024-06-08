function isFormation(lMap: Map<string, number>, word: string) {

    let matchCount = 0; // counting the matched letters of the word

    //iterate each letter of word
    for (let letter of word) {
        // check if the map has  letter as key
        // if not found exit the loop and return false ( as count != word.length)
        if (lMap.has(letter)) {
            // get the count of input's letter
            let count = lMap.get(letter);
            // checking to count value of error is already used, and we have additional repetitive letters
            // e.g. input = "ob" and word= "booooo" then we should return false
            if (count != undefined && count > 0) {
                // reduce the count for each letter found in lMap
                count -= 1;
                // update the count back to lMap
                lMap.set(letter, count);
                // as letter processed  increment the count
                matchCount += 1;
                continue;
            } else {
                break;
            }
        }
        break;
    }
    // if count is matched with word.length that means we have formation.
    return matchCount == word.length;
}

export function findWords(input: string, dictionary: string[]): string[] {
    let results: string[] = [];
    let letterMap = new Map<string, number>();

    //create a map of each unique letter as key, from input with repetitive count as value.
    for (let letter of input) {
        // if the letter is not in map get() method  return undefined value rather throwing key error.
        let count = letterMap.get(letter);
        // default the letter count to 1 and increment by 1 if repeat
        count = count == undefined ? 1 : count + 1;
        letterMap.set(letter, count);
    }

    //iterating each word
    dictionary.forEach(word => {
        // check if the word is formation of input,
        // NOTE: here we are copy the letterMap to retain the original values for next word
        if (isFormation(new Map(letterMap), word)) {
            results.push(word);
        }
    });
    return results;
}

//console.log(findWords("oodg", ["goodness", "dot","dog","good","do"]))