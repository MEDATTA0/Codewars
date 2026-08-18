import java.util.regex.Matcher;
import java.util.regex.Pattern;
​
public class SecureTester {
​
    public static boolean alphanumeric(String s) {
        Pattern pattern = Pattern.compile("^[A-Za-z0-9]+$");
        Matcher matcher = pattern.matcher(s);
        return matcher.find();
      
    }
}
​