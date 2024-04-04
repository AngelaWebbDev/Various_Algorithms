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

#Given an array, print the max, min and average values for that array.
def maxMinAvg(arr):
    max=arr[0]
    min = arr[0]
    totalAdd = 0
    for i in arr:
        if i>max:
            max = i
        elif i<min:
            min = i
        totalAdd += i
    avg = totalAdd/len(arr)
    print('max: ', max)
    print('min: ', min)
    print('average: ', avg)
#maxMinAvg([2,1,3]) #output:3,1,2
#maxMinAvg([1,11,2,22,3,.33,4,.04]) #output:22,.04,5.42125

#Replace any negative array values with 'Dojo'
def swapNegativesWithString(arr):
    for i in range(0,len(arr)):
        if arr[i]<0:
            arr[i] = 'Dojo'
    return arr
#print(swapNegativesWithString([1,-1,2,-22,3,-.33,4,.04]))

#Print all odd integers from 1 to 255
def printOdds():
    for i in range(1,256):
        print(i)
#printOdds()

#Iterate through a given array, printing each value
def iteratePrintArray(arr):
    for i in arr:
        print(i)
        
iteratePrintArray([1,'one',[2,'two'],[3,['three','III']]])