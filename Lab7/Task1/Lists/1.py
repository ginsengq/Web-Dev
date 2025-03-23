def common(a,b):
    if(a[0]==b[0] or a[len(a)-1]==b[len(b)-1]): return True
    return False

def has23(a):
    if(a[0]==2 or a[0]==3 or a[1]==2 or a[1]==3): return True
    return False

def make_ends(a):
    c = []
    c.append(a[0])
    c.append(a[2])
    return c

def make_pi():
    a = []
    a.append(3)
    a.append(1)
    a.append(4)
    return a

def max_end(a):
    c = []
    if(a[0]>a[2]):
        for i in range(0,3):
            c.append(a[0])
    else:
        for i in range (0,3):
            c.append(a[2])
    return c

def middle(a,b):
    c = []
    c.append(a[1])
    c.append(b[1])
    return c

def reverse3(a):
    b = []
    for i in a:
        b.append(i)
    return b

def rotate3(a):
    b = []
    b = a[1:]
    b.append(a[0])
    return b

def same(a):
    if(a[0]==a[-1]):return True
    return False

def sum2(a):
    if(len(a)>=2):
        return a[0]+a[1]
    elif(len(a)==1):return a[0]
    else :return 0

def sum3(a):
    return a[0]+a[1]+a[2]