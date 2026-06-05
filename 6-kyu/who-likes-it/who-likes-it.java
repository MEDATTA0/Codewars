class Solution {
​
    public static String whoLikesIt(String... names) {
        if (names.length == 0) return "no one likes this";
        if (names.length == 1) return "%s likes this".formatted(names[0]);
        if (names.length == 2) return "%s and %s like this".formatted(
            names[0],
            names[1]
        );
        if (names.length == 3) return "%s, %s and %s like this".formatted(
            names[0],
            names[1],
            names[2]
        );
        int num = names.length - 2;
        return "%s, %s and %d others like this".formatted(names[0], names[1], num);
    }
}
​