def solution(s: str):
    result = ""
    for c in s:
        if c.upper() == c:
            result += f" {c}"
        else:
            result += c
    return result
​