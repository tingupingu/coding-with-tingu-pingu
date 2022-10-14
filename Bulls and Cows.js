class Solution {
    public String getHint(String secret, String guess) {
        int n = secret.length();
        int[] gCount = new int[10];
        int[] sCount = new int[10];
        int bulls = 0;
        int cows  = 0;
        for(int i = 0; i < n; i++) {
            if(secret.charAt(i) == guess.charAt(i)) {
                bulls++;
            } else {
                gCount[guess.charAt(i) - '0']++;
                sCount[secret.charAt(i) - '0']++;
            }
        }
        for(int i = 0; i < 10; i++) {
            if(gCount[i] > 0 && sCount[i] > 0) {
                cows += Math.min(gCount[i], sCount[i]);
            }
        }
        return bulls+"A"+cows+"B";
    }
}
