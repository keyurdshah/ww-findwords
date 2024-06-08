import {findWords} from "./word-formation";

describe('Test findWords function', () => {

    it('Custom Test', () => {
        let input = "oodg";
        let dictionary = ["goodness", "dot","dog","good","do"];
        let out = ["dog", "good", "do"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    it('Same length words', () => {
        let input = "ate";
        let dictionary = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"];
        let out = ["ate", "eat", "tea"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    it('Different length size words', () => {
        let input = "oogd";
        let dictionary = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"];
        let out = ["dog", "do", "god", "goo", "go", "good"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    // "dot" is matching partially here
    it('Only Partial letter match', () => {
        let input = "oogd";
        let dictionary = ["dot", "dog", "do"];
        let out = ["dog", "do"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    // all input match but word is longer than the match
    it('Word overflow', () => {
        let input = "oogd";
        let dictionary = ["goodness", "god", "dog", "don"];
        let out = ["god", "dog"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    it('Single letter', () => {
        let input = "a";
        let dictionary = ["alphabet"];
        let out: any[] = [];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    it('Single letter', () => {
        let input = "alphabet";
        let dictionary = ["a"];
        let out = ["a"];
        expect(findWords(input, dictionary)).toEqual(out);
    });

    it('Empty Dictionary', () => {
        let dictionary: string[] = [];
        expect(() => {
            findWords("empty", dictionary)
        });
    });

    it('Empty input', () => {
        let dictionary: string[] = ["dog", "do", "god", "goo", "go", "good"];
        expect(() => {
            findWords("", dictionary)
        });
    });
});