const multiplier = {
    number: [1,3,4,2,3,5],
    multiplyBy: 2,
    multiply(){
        return this.number.map((number) =>number *this.multiplyBy); 
    }
};

console.log(multiplier.multiply())