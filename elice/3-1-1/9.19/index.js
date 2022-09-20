function isPrime(n){
    var divisor=2;
    if(n==1||) return false;
    while(n>divisor){
        if(n%divisor===0){
            return false;
        }else{
            divisor++;
        }
    }
    return true;
}

for(var i=11;i<=20;i++){
    document.writeln(i, isprime(i));
}