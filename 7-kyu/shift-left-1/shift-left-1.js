function shiftLeft(s, t){
    let i = s.length - 1;
    let j = t.length - 1;
    let commonSuffixLength = 0;
    while (i >= 0 && j >= 0 && s[i] === t[j]) {
        commonSuffixLength++;
        i--;
        j--;
    }
    const deletionsFromS = s.length - commonSuffixLength;
    const deletionsFromT = t.length - commonSuffixLength;
    return deletionsFromS + deletionsFromT;
}