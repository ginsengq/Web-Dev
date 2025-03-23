def alarm_clock(day, vacation):
  pronto = "7:00" if not vacation else "10:00"
  tarde = "10:00" if not vacation else "off"
  return pronto if day not in [6,0] else tarde

def caught(num,birth):
    if(birth==True):
        num+=5
    if(num <= 60): return 0
    elif(60 < num <=80):return 1
    else :return 2

def cigar(num,isweek):
    if(40<= num <=60 or isweek==True):return True
    return False

def date(you,date):
    if(you <=2  or date <=2 ):return 0
    elif(you >=8 or date >=8):return 2
    return 1

def love6(a,b):
    if(a == 6 or b == 6):return True
    elif(abs(a+b)==6):return True
    return False

def near_ten(num):
  within = num%10
  
  return within in [8,9,2,1,0]

def sum(a,b):
    if(10 <= a+b <=21):
        return 20
    return a+b

def squirell(temp,summer):
    if sum :
        return 60<= temp <=100
    return 60 <= temp <= 90