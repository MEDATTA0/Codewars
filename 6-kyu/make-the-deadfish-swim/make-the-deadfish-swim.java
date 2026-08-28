import java.util.List;
import java.util.ArrayList;
​
public class DeadFish {
            public static int[] parse(String data) {
        var results = new ArrayList<Integer>(List.of(0));
        for (int i = 0; i < data.length(); i++) {
            var instruction = data.charAt(i);
            var value = results.get(results.size() - 1);
            switch (instruction) {
                case 'i':
                    results.set(results.size() - 1, value + 1);
                    break;
                case 'd':
                    results.set(results.size() - 1, value - 1);
                    break;
                case 's':
                    value = Double.valueOf(Math.pow(value, 2)).intValue();
                    results.set(results.size() - 1, value);
                    break;
                case 'o':
                    results.add(value);
                    break;
                default:
                    break;
            }
        }
        results.remove(results.size() - 1);
        return results.stream().mapToInt(Integer::intValue).toArray();
    }
}
​