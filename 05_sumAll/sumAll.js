const sumAll = function(firstNum, secondNum) {
    let sum=0;
    let temp=0;
    if(typeof firstNum!="number")
        return "ERROR";
    if(typeof secondNum!="number")
        return "ERROR";
    if(firstNum<0||secondNum<0)
        return "ERROR";
    if(firstNum>secondNum)
        {temp=firstNum;
        firstNum=secondNum;
        secondNum=temp;}
    
        for(let i=firstNum;i<=secondNum;i++)
        {
        
            sum=sum+i;
        }
        return sum;

};

// Do not edit below this line
module.exports = sumAll;
