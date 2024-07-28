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
        
#iteratePrintArray([1,'one',[2,'two'],[3,['three','III']]])

#Analyze an array’s values and print the average
def getPrintAvg(arr):
    addTotal = 0
    counter = 0
    for i in arr:
        if type(i)==int or type(i)==float:
            addTotal += i
            counter += 1
    if(counter != 0):
        print('addTotal: ', addTotal, ', counter: ', counter)
        return addTotal/counter
    else:
        return 'array does not have any numbers'
# print(getPrintAvg([1,2,3,4,5,6,7,8,9,10]))
# myVar = 3
# print(getPrintAvg([1,'one',2,[2,2],myVar]))
# print(getPrintAvg(['one','two','three']))

#Square each value in a given array, returning that same array with changed values.
def squareValues(arr):
    index = 0
    for value in arr:
        arr[index] = value*value
        index += 1
    return arr
# print(squareValues([1,2,3,4,5]))

#Return the given array, after setting any negative values to zero.
def zeroOutNegatives(arr):
    index = 0
    for value in arr:
        if(value<0):
            arr[index] = 0
        index += 1
    return arr
# print(zeroOutNegatives([1,-2,3.3,-.04]))

#Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the end
def shiftArrayValues(arr):
    index = 0
    for value in arr:
        if(index<len(arr)-1):
            arr[index] = arr[index+1]
        else:
            arr[index] = 0
        index += 1
    return arr
# print(shiftArrayValues([1,2,3,4,5]))

#Implement a function sigma(num)​ that, given a
# number, returns the sum of all positive integers
# from 1 up to number (inclusive)
def sigma(num):
    if(num<2):
        return 0
    sum = 0
    for i in range(2,num+1):
        if(i%2==0):
            sum+=i
    return sum
# print(sigma(5)) #expected output: 6
# print(sigma(1)) #expected output:0
# print(sigma(10)) #expected output:20

# function factorial(num)​ that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive)
def factorial(num):
    if(num<0):
        return 'positive numbers only'
    elif(num==0):
        return 0
    elif(num==1):
        return 1
    else:
        sum = 1
        for i in range(2, num+1):
            sum*=i
        return sum
# print(factorial(-3)) #expected output:positive numbers only
# print(factorial(0)) #expected output: 0
# print(factorial(1)) #expected output: 1
# print(factorial(3)) #expected output:6

# function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console
def threesAndFives():
    i = 100
    sum = 0
    while(i<=4000000):
        if(i%3==0 or i%5==0):
            if(not(i%3==0 and i%5==0)):
                sum+=i
        i+=1
    return sum
# print(threesAndFives())

#​ Change your function to make a BetterThreesFives(start,end)​where start and end  values are customizable
def BetterThreesFives(start, end):
    i = start
    sum = 0
    while(i<=end):
        print('i: ', i)
        if(i%3==0 or i%5==0):
            print(i,'%3=',i%3,' and ',i,'%5=',i%5)
            if(not(i%3==0 and i%5==0)):
                print('not both divisible')
                sum+=i
                print('sum: ', sum)
        i+=1
    return sum
# print(BetterThreesFives(1,15)) #expected output: 45

#Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result
import math
def generateCoinChange(cents):
    if cents<=0:
        print('no change due')
        return 'error'
    if cents%1>0:
        print('cents must be a whole number')
        return 'error'
    quarters = math.trunc(cents/25)
    if quarters>0 and quarters !=1:
        print(quarters,' quarters')
    if quarters == 1:
        print('1 quarter')
    cents = cents-(quarters*25)
    dimes = math.trunc(cents/10)
    if dimes>0 and dimes!=1:
        print(dimes, ' dimes')
    if dimes == 1:
        print('1 dime')
    cents = cents - (dimes*10)
    nickels = math.trunc(cents/5)
    if nickels>0 and nickels!=1:
        print(nickels, ' nickels')
    if nickels==1:
        print('1 nickel')
    cents = cents - (nickels*5)
    if cents>0 and cents!=1:
        print(cents, ' pennies')
    if cents==1:
        print('1 penny')
# print('-2:')
# generateCoinChange(-2) #expected output: no change due
# print('1.23:')
# generateCoinChange(1.23) #expected output: cents must be a whole number
# print('4:')
# generateCoinChange(4) #expected output:4 pennies
# print('7: ')
# generateCoinChange(7) #expected output:1 nickel, 2 pennies
# print('16: ')
# generateCoinChange(16) #expected output: 1 dime, 1 nickel, 1 penny
# print('41:')
# generateCoinChange(41) #expected output:1 quarter, 1 dime, 1 nickel, 1 penny
# print('79: ')
# generateCoinChange(79) #expected output:2 quarters, 2 dimes, 1 nickel, 4 pennies
# print('32:')
# generateCoinChange(32) #expected output:1 quarter, 1 nickel, 2 pennies
# print('21:')
# generateCoinChange(21) #expected output:2 dimes, 1 penny
# print('46:')
# generateCoinChange(46) #expected output: 1 quarter, 2 dimes, 1 penny

#Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the number of rolls, min, max, and average
import random

numOfRolls = 0
minRoll = 1
maxRoll = 0
rollArray = []
averageRoll = 0

def statisticsToDoubles():
    global numOfRolls, minRoll, maxRoll, rollArray, averageRoll
    doubles = False
    while(doubles==False):
        roll1 = oneDie()
        roll2 = oneDie()
        numOfRolls += 1
        minRoll = min(roll1, roll2, minRoll)
        maxRoll = max(roll1, roll2, maxRoll)
        rollArray.append([roll1, roll2])
        if roll1==roll2:
            doubles = True
    totalRolls = 0
    for roll in rollArray:
        for die in roll:
            totalRolls += die
    averageRoll = totalRolls/numOfRolls

def oneDie():
    return random.randint(1,6)

# statisticsToDoubles()
# print('numOfRolls: ', numOfRolls)
# print('minRoll: ', minRoll)
# print('maxRoll: ', maxRoll)
# # print('rollArray: ', rollArray) #for testing only
# print('averageRoll: ', round(averageRoll, 2))

#implement function that, given a number,
#sums that number's digits repeatedly
#until sum is only one digit
#return final one digit result

def sumToOneDigit(num):
    sum = 0
    if len(str(num))==1:
        return num
    while len(str(num))>1:
        for digit in str(num):
            if digit.isdigit():
                sum += int(digit)
        num = sum
        if len(str(num))>1:
            sum = 0
    return sum
            
# print(sumToOneDigit(12)) #expected output: 3
# print(sumToOneDigit(1.23)) #expected output: 6
# print(sumToOneDigit(1234567)) #expected output: 1

#implement fibonacci(num) that accepts a number
#and returns which ordinal place it exists at in the fibonacci sequence
#if the number is not in fibonacci sequence, return "not a fibonacci number"

def fibonacci1(num):
    if(num<0):
        return 'No negatives in Fibonacci'
    if(num%1>0):
        return 'No decimals in Fibonacci'
    if(num==0):
        return 1
    if(num==1):
        return 2
    counter1 = 0
    counter2 = 1
    for i in range(1,num):
        temp = counter2
        counter2 = counter1 + counter2
        counter1 = temp
        if(counter2==num):
            return i+2
    return 'Not in Fibonacci Sequence'
#fibonacci: 0 1 1 2 3 5 8 13 21 34 55 89
# print(fibonacci1(89)) #output: 12
# print(fibonacci1(-3)) #output: no negatives
# print(fibonacci1(1.2)) #output: no decimals
# print(fibonacci1(0)) #output: 1

#implement fibonacci(place) that accepts a number
#and returns which number is at that place in the fibonacci list
#if the number is not in fibonacci sequence, return "not a fibonacci number"

def fibonacci2(place):
    if(place<1):
        return 'Place number cannot be less than 1'
    if(place%1>0):
        return 'Place number must be a whole number'
    if(place==1):
        return 0
    counter1 = 0
    counter2 = 1
    for i in range(2,place):
        temp = counter2
        counter2 = counter1 + counter2
        counter1 = temp
    return counter2
#fibonacci: 0 1 1 2 3 5 8 13 21 34 55 89
# print(fibonacci2(-3)) #output: can't be <1
# print(fibonacci2(1.2)) #output: no decimals
# print(fibonacci2(0)) #output: can't be <1
# print(fibonacci2(1)) #output: 0
# print(fibonacci2(8)) #output: 13
# print(fibonacci2(12)) #output: 89

# accept 2 non-negative integers as args
# return last digit of a raised to exponent b
def lastDigitAtoB(a,b):
    if a<0 or b<0:
        return 'both numbers must be at least 0'
    if b==1:
        return a%10
    quotient = a
    for i in range(2,b+1):
        quotient *= a
    return quotient%10    
# print(lastDigitAtoB(32,1)) #2
# print(lastDigitAtoB(-1,1)) #both numbers must be at least zero
# print(lastDigitAtoB(2,-4)) #both numbers must be at least zero
# print(lastDigitAtoB(-3,-6)) #both numbers must be at least zero
# print(lastDigitAtoB(12,5)) #2
# print(lastDigitAtoB(3,4)) #1

#given number of seconds since 12:00:00
#print the angles (in degrees) of the hour, minute, and second hands
#12 is 0 degrees
#assumption not stated in challenge: minute & hour hands glide while second hand jumps
def clockHandAngles(seconds):
    if seconds<0:
        return 'Time can only move forward \n'

    # num of seconds = seconds%60 (every 60, it resets to 0 deg)
    sec = int(seconds%60)
    # num of minutes = (previous results)/60, then %60 (every 3600, it resets to 0 deg)
    seconds -= sec
    min = int(seconds/60%60)
    # num of hours = (previous results)/3600
    seconds -= (min*60)
    hour = int(seconds/3600)
    
    # second hand = 6 deg per second
    secondHandAngle = sec*6
    # minute hand = 0.1 deg per second
    minuteHandAngle = int((min*60)*0.1)
    # hour hand = 30 deg per hour + 0.5 deg per minute
    hourHandAngle = int(hour*30)
    hourHandAngle = ((hour*30) + (min*.5))
    
    print(sec, ' seconds = ', secondHandAngle, ' degrees')
    print(min, ' minutes = ', minuteHandAngle, ' degrees')
    print("{:.1f}".format(hour + min/60), ' hours = ', hourHandAngle, ' degrees')
    return ' '

# print('-100 seconds (N/A): ')
# print(clockHandAngles(-100)) #output: Time can only move forward

# print('15 seconds (00:00:15):')
# print(clockHandAngles(15))

# print('30 seconds (00:00:30):')
# print(clockHandAngles(30))

# print('60 seconds (00:01:00):')
# print(clockHandAngles(60))

# print('300 seconds (00:05:00)):')
# print(clockHandAngles(300))

# print('21,600 seconds (06:00:00):')
# print(clockHandAngles(21600))

# print('23,400 seconds (06:30:00):')
# print(clockHandAngles(23400))

# print('23,415 seconds (06:30:15):')
# print(clockHandAngles(23415))

#given an array & an additional value,
#insert this value at the beginning of the array
#no built-in array methods
def pushFront(arr, value):
    return [value] + arr
# print(pushFront([1,2,3],0))

#given an array, remove/return value at [0]
#only allowed built-in method: pop
def popFront(arr):
    return arr.pop(0)
# print(popFront([1,2,3]))

#given an array, index, & additional value
#insert value into array at [index]
#no built-in methods
def insertAt(arr, index, value):
    if(index>len(arr)):
        return 'index cannot be more than current highest index plus one'
    elif(index<0):
        return 'index cannot be less than 0'
    else:
        previousValue = value
        for i in range(index,len(arr)):
            tempValue = arr[index]
            arr[index] = previousValue
            previousValue = tempValue
        arr = arr + [previousValue]
        return arr
# print(insertAt([1,2,4],5,'will return index too big error'))
# print(insertAt([1,2,3],-2,'will return index too small error'))
# print(insertAt([1,2,4], 2, '3 added'))

#given array and index, remove/return array value at that index
#only allowed built-in method: pop
def removeAt(arr, index):
    if(index<0):
        return 'index cannot be less than 0'
    elif(index>len(arr)):
        return 'index cannot be greater than current highest index + 1'
    else:
        return arr.pop(index)
# print(removeAt([1,2,3,'three',4],3))

# given numerical array, reverse order of the values
def reverseArray(arr):
    newArr = [arr.pop()]
    for i in range(len(arr)-1, -1, -1):
        newArr.append(arr[i])
    return newArr
# print(reverseArray([1,2,3,4,5]))

#given an array, remove any value <0
def removeNegatives(arr):
    for item in arr:
        if(type(item)!='int' and type(item)!='float'):
            continue
        if(item<0):
            arr.pop(arr.index(item))
    return arr
# print(removeNegatives([-1,1,-2,2,-3,3]))
# print(removeNegatives(['item','one',1]))

#given array of building heights (negative is below ground)
#return array of buildings you can see
#the buildings are in a row, so you cannot see a shorter building after a taller building, and cannot see underground
def skylineHeights(arr):
    tallest = 0
    visible = []
    for building in arr:
        if(building>tallest):
            tallest = building
            visible.append(building)
    return visible
# print(skylineHeights([1,-1,7,3]))

#given sorted array and a value
#return whether value is present in array
#do not iterate sequentially
def binarySearch(arr, val):
    while(len(arr)>2):
        median = math.ceil(len(arr)/2)
        if(arr[median]<val):
            arr = arr[median:len(arr)]
        elif(arr[median]>val):
            arr = arr[0:median]
        else:
            return str(val) + ' is in the array.'
    if(arr[0] and arr[0]!=val):
        return str(val) + ' is not in the array'
    elif(arr[1] and arr[1]!=val):
        return str(val) + ' is not in the array'
    else:
        return val + ' is in the array'
# print(binarySearch([1,2,3,4,5,6,7,8,9,10],3)) #in the array
# print(binarySearch([1,2,3,4,5],6)) #not in the array
# print(binarySearch([2,4,6,8,10,12],3)) #not in the array

#given sorted numerical array that has been rotated by an unknown amount, find/return minimum value
def minOfSortedRotated(arr):
    import math
    if(arr[len(arr)-1]>arr[0]):
        return arr[0]
    minValue = arr[0]
    for i in range(1,len(arr)):
        if type(arr[i])!=int and type(arr[i])!=float:
            return 'arrays can only contain numbers'
        else:
            minValue=arr[i]
    return minValue
print(minOfSortedRotated([1,2,3,4,5,6]))
print(minOfSortedRotated([2,';',4,5,6,1]))
print(minOfSortedRotated([3,4,True,6,1,2]))
print(minOfSortedRotated([4,5,6,1,2,3]))
print(minOfSortedRotated([1.5,1.6,1.1,1.2,1.3,1.4]))
print(minOfSortedRotated([6,1,2,3,4,5]))