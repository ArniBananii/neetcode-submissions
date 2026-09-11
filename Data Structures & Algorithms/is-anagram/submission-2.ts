class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let frq_s = new Map();
        let frq_t = new Map();

        for(let chr of s ){
            frq_s.set(chr,(frq_s.get(chr)||0)+1);
        }
        for(let chr of t ){
            frq_t.set(chr,(frq_t.get(chr)||0)+1);
        }
        for (let [key, value] of frq_s.entries()) {
        if (frq_t.get(key) !== value) return false;
    }
        for (let [key, value] of frq_t.entries()) {
        if (frq_s.get(key) !== value) return false;
    }
    return true;
}
}
