function calcNum(num){
    console.log(num);
    if(num > 1){
        calcNum(num-1);
    }
}

calcNum(15);