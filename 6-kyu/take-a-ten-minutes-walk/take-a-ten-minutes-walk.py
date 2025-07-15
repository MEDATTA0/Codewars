def is_valid_walk(walks):
    if len(walks) != 10:
        return False
    directions = {"e":0, "w":0, "n":0, "s":0}
    for walk in walks:
        directions[walk] = directions[walk] + 1
    if directions["e"] != directions["w"] or directions["n"] != directions["s"]:
        return False
    return True;
​