def catdog(s):
    cat =0
    dog = 0
    for i in range(len(s)-2):
        if s[i:i+3]=="dog":dog+=1
        elif s[i:i+3]=="cat":cat+=1
    return cat == dog

def count_code(str):
    return sum(1 for i in range(len(str) - 3)
        if str[i:i + 2] == 'co' and str[i + 3] == 'e'
    )

def count_hi(s):
    cnt = 0
    for i in range(len(s))-1:
        if(s[i]+s[i+1]=="hi"):
            cnt+=1
    return cnt

def double_char(s):
    t=""
    for i in s:
        t+=(i*2)
    return t

def end_other(s,t):
    if(len(s)>len(t)):
        if(t==s[len(s)-len(t):]):return True
        return False
    return s == t[len(t)-len(s):]
s = "dffsa"
print(end_other("fg","asdf"))

def xyz_there(str):
	if str[:3]=="xyz":
		return True
	for i in range(1, len(str)):
		if str[i-1] != '.' and str[i:i+3] == 'xyz':
			return True

	return False