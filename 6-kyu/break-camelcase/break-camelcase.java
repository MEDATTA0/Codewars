class Solution {
​
    public static String camelCase(String input) {
        var buff = new StringBuffer();
        for(int i = 0; i < input.length(); i++){
            char c = input.charAt(i);
            char[] el = {' ', c};
            if (c < 'a') buff.append(el);
            else buff.append(c);
​
        }
​
        return buff.toString();
    }
}
​