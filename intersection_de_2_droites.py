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
