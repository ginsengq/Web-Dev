def bigdiff(a):
    min = 100000
    max = 0
    for i in a:
        if i > max:max = i
        if i < min : min = i
    return max - min

def centered(a):
    min = 100000
    max = 0
    sum = 0
    for i in a:
        if i > max:max = i
        if i < min : min = i
        sum+=i
    return (sum-min-max)/(len(a)-2)

def even(a):
    cnt=0
    for i in a:
        if i%2==0:cnt+=1
    return cnt   

def has22(a):
    for i in range(1,len(a)):
        if a[i-1]==2 and a[i]==2: return True
    return False

def sum13(a):
    sum = 0
    for i in a:
        if i==13:break
        sum+=i
    return sum