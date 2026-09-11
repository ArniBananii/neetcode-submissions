class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let new_set = new Set(nums);
        if(new_set.size != nums.length){
            return true
        }
        return false;
    }
}
