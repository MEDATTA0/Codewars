def descending_order(num):
    lst = list(str(num))
    lst.sort(reverse=True)
    return int("".join(lst))