const multipler = {
    numbers : [2,5,7],
    multiplyBy : 3,
    multiply(){return this.numbers.map((number) => number * this.multiplyBy)},
    numberList(){
        this.numbers.forEach(num => {
            console.log('iteam : ' + num);            
        });
    }
}

multipler.numberList();
console.log(multipler.multiply());



