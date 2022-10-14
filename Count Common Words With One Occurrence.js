class Solution {
    public int countWords(String[] words1, String[] words2) {
        
        HashMap<String, Integer> hs1 = new HashMap<>();
        HashMap<String, Integer> hs2 = new HashMap<>();
        
        for(int i = 0; i < words1.length; i++){
            String str = words1[i];
            int val = hs1.getOrDefault(str,0);
        
            hs1.put(str, val + 1);
        }
        
        for(int j = 0; j < words2.length; j++){
            String str1 = words2[j];
            int val = hs2.getOrDefault(str1, 0);
            
            hs2.put(str1, val + 1);
        }
        
        int count = 0;
        
        for(String str : hs1.keySet()){
            int val =  hs1.get(str);
            if(val == 1){
                if(hs2.containsKey(str) && hs2.get(str) == 1){
                    count++;
                }
            }
        }
        return count;
    }
}
