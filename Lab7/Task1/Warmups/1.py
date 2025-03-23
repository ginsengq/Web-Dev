def diff21(x):
  if x <= 21:
    return 21 - x
  else:
    return (x - 21) * 2
x = int(input())
print(diff21(x))

def front3(s):
  front_end = 3
  if len(s) < front_end:
    front_end = len(s)
  front = s[:front_end]
  return front*3

def front_back(str):
  if len(str) <= 1:
    return str  
  mid = str[1:len(str)-1] 
  return str[len(str)-1] + mid + str[0]

def makes10(a,b):
    if a== 10 or 10 ==b or a+b==10:
        return True
    return False

def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False
a = bool(input())
b = bool(input())

def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]
  return front + back
s = input()
x = int(input())
print(missing_char(s,x))

def nearHundred(x):
    if(abs(100-x)<=10 or abs(200-x)<=10):return True
    else:return False
a = int(input())
print(nearHundred(a))

def not_string(s):
    if len(str) >= 3 and str[:3] == "not":
        return s
    return "not "+s

def parrotTrouble(parrot,hour):
    if(parrot == True and 7 > hour > 20):
        return True
    else:return False
x = bool(input())
hour = int(input())
parrotTrouble(x,hour)

def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
x = int(input())
y = int(input())
b = bool(input())
pos_neg(x,y,b)

def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
x = bool(input())
y = bool(input())
print(sleep_in(x,y))

def sum(x,y):
    if x==y:
        return (x+y)*2
    return x+y