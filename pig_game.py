dies_numbers=[1,2,3,4,5,6] 
storage=0
def games():
    import random
    rand_num=random.choice(dies_numbers)
    return ("your choice is",rand_num)
    
while True:
        input=int(input("plz enter 1 to roll the dies:"))
        if (input==1):
            print(games())
        else:
            input==0
            print("your score is")
            print("your chance is moved to opposite player")

