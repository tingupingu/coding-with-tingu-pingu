class Solution {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        int i, sum = 0, n = nums.length;
        
        for(i = 0; i < n; i++){
            sum = sum + nums[i];
        }
        
        if(sum % k != 0){
            return false;
        }
        
        Arrays.sort(nums);
        
        boolean[] used = new boolean[n];
        
        return dfs(nums.length - 1, 0, 0, nums, used, k, sum / k);
    }
    
    private boolean dfs(int index, int sumTillNow, int countOfSubsets, int[] nums, boolean[] used, int k, int target){
        if(countOfSubsets == k - 1){
            return true;
        }
        
        if(sumTillNow > target){
            return false;
        }else if(sumTillNow == target){
            return dfs(nums.length - 1, 0, countOfSubsets + 1, nums, used, k, target);
        }else{
            for(int i = index; i >= 0; i--){
                if(!used[i]){
                    used[i] = true;
                    if(dfs(i - 1, sumTillNow + nums[i], countOfSubsets, nums, used, k, target)){
                        return true;
                    }
                    
                    used[i] = false;
                }
            }
            
            return false;
        }
    }
}
