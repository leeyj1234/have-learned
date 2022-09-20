function getOnlyEvenNumber(inputA){
    var evenNumber=[];
    for(let n of inputA){
        if(n%2===0){
            evenNumber.push(n);
        }
    }
    return evenNumber;
}