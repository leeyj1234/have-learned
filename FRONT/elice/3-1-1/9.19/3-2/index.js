var sum=0;

for(var i=1;i<=200;i++){
    for(var j=2;j<=i;j++){
        if(i%j==0){
            break;
        }
    }
    if(j==i){
        sum+=j;
    }
}

document.write("1이상 200이하의 소수의 합 = " + sum);