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
#printIntsAndSum0To255()

#Given an array, find and print its largest element.
def findAndPrintMax(arr):
    max = arr[0]
    for i in arr:
        if i>max:
            max = i
    return max
#print(findAndPrintMax([1,11,2,22,3,.33,4,.04]))

#Create an array with all the odd integers between 1 and 255 (inclusive)
def arrayWithOdds():
    odds = []
    for i in range(1,256):
        odds.append(i)
    return odds
#print(arrayWithOdds())

#Given an array and a value Y, count and print the number of array values greater than Y.
def greaterThanY(arr, y):
    counter = 0
    for i in arr:
        if i>y:
            counter += 1
            print(i," ")
    return counter
# count = greaterThanY([1,11,2,22,3,.33,4,.04],2)
# print("total: ", count)