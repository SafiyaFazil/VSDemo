function odd(num)
{
    let oddNum = []
    for (let i = 0; i <= num; i++)
    {
        if (i % 2 !== 0)
        {
            oddNum.push(i)
            
        }
        
    }
    return console.log(oddNum)
}
odd(20)
