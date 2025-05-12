def solution(array_a, array_b):
    squares = []
    for i in range(len(array_a)):
        squares.append(abs(array_a[i] - array_b[i]) ** 2)
    return sum(squares) / len(squares)