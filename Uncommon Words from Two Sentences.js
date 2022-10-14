class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        
        HashMap<String,Integer> map=new HashMap<>();
        
        for(String s : s1.split(" ")){
            map.put(s,map.getOrDefault(s,0)+1);
        }
        for(String s : s2.split(" ")){
            map.put(s,map.getOrDefault(s,0)+1);
        }
        
        String[] ans=new String[0];
        
        for(String s : map.keySet()){
            if(map.get(s)==1){
                ans=Arrays.copyOf(ans,ans.length+1);
                ans[ans.length-1]=s;
            }
        }
        return ans;
    }
}
