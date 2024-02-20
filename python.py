#print all integers from 1 to 255
def print1to255():
    for i in range(1,256):
        print(i)
        
#print1to255()

#print integers from 0 to 255, and with each integer print the sum so far
def printIntsAndSum0To255():
    print('printIntsAndSum0To255 in python: ')
    sum = 0
    for i in range(1,256):
        sum+=i
        print(i, " ", sum)
printIntsAndSum0To255()