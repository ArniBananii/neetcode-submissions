class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let res = 0, cnt = 0;
        for (const num of nums){
            if(num === 1){
                cnt++;
                res = Math.max(res,cnt);
            }else{
                cnt = 0;
            }
        }
        return res;
}
}
