function fizzbuzz(pn){
     const ps = pn.toString().split('').reduce((sum,d) => sum + parseInt(d),0);

    let res = [];
    for(let i =0;i<= ps;i++){
        if(i%3==0 && i%4 ==0){
            res.push("FizzBuzz");
        }else if(i % 3==0){
            res.push("Fizz");
        }else if(i % 4 ==0){
            res.push("Buzz");
        }else{
            res.push(i.toString());
        }
        
    }
    return res.join(' ');

}
let pn = 9390059152;
let res1 = fizzbuzz(pn);
console.log(res1);