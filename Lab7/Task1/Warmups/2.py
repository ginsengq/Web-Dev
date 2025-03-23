def array123(a):
  for i in range(len(a)-2):
    if a[i]==1 and a[i+1]==2 and a[i+2]==3:
      return True
  return False

def array_count9(a):
  cnt = 0
  for num in a:
    if num == 9:
      cnt = cnt + 1
  return cnt

def array_front9(a):
  end = len(a)
  if end > 4:
    end = 4  
  for i in range(end):  
    if a[i] == 9:
      return True
  return False

def frontTimes(s,x):
    size
    if 3 > len(s): size = len(s)
    front = s[:size]
    return front*x

def last2(s):
  if len(s) < 2:
    return 0
  last2 = s[len(s)-2:]
  cnt = 0
  for i in range(len(s)-2):
    sub = s[i:i+2]
    if sub == last2:
      cnt = cnt + 1
  return cnt

def string_bits(s):
  r=""
  for i in range(len(s)):
    if i % 2 == 0:
      r = r + s[i]
  return r

def string_match(a, b):
  short = min(len(a), len(b))
  cnt = 0
  for i in range(short-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      cnt = cnt + 1
  return cnt

def stringTimes(s,x):
    return s*x
s = input()
x = int(input())
print(stringTimes(s,x))

def string_splosion(s):
  t = ""
  for i in range(len(s)):
    t = t + s[:i+1]
  return t