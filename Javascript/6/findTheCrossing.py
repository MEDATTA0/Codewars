# You are given four tuples. In each tuple there is coordinates x and y of a point.
# There is one and only one line, that goes through two points, so with four points you can have two lines: first and second tuple is two points of a first line, thirs and fourth tuple is two points of the second line.
# Your task is to find and return a tuple with x and y coordinates of lines crossing point.

# Numbers can be positive as well as negative, integer or floats. Your answer shouldn't be rounded!!

# Note, that if two lines are the same ( have infinite crossing points ) or parallel ( have no crossing points ), you will need to return None/Nothing depending on language.

A = (5, 3)
B = (10, 4)
C = (5, 7.5)
D = (10, 7)


def functions_intersection(A, B, C, D):
    # y = ax + b; a: coefficient directeur, b: y while x=0
    # L'équation de la 1re droite
    a_1 = (B[1] - A[1]) / (B[0] - A[0])
    b_1 = B[1] - a_1 * B[0]
    print(f"(D1): y = {a_1}x + {b_1}")
    # D1: y = a_1x + b_1
    # L'équation de la 2e droite
    a_2 = (D[1] - C[1]) / (D[0] - C[0])
    b_2 = D[1] - a_2 * D[0]
    print(f"(D1): y = {a_2}x + {b_2}")
    # D2: y = a_2x + b_2
    # vérification de la colinéarité des 2 droites
    # Les fonctions sont de formule (D): y = ax + b
    if a_1 == a_2:
        print("Les deux fonctions sont colinéaires.")
    else:
        print(f"a1 = {a_1}, b1 = {b_1} \na2 = {a_2}, b2 = {b_2}")
        x = -((b_1 - b_2) / (a_1 - a_2))
        y = a_2 * x + b_2
        print(x, y)
