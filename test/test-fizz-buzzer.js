
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer',function(){
    
    it('If divisible by 15->fizz-buzz, 5->buzz, 3->fizz, else returns',function(){
        const normalCases=[
            [30,"fizz-buzz"],
            [15,"fizz-buzz"],
            [20,"buzz"],
            [10,"buzz"],
            [9,"fizz"],
            [3,"fizz"],
            [2,2]
        ];

        normalCases.forEach(input=>{
            const ans=fizzBuzzer(input[0]);
            expect(ans).to.equal(input[1]);
        });


    });
    
    
    
    
    it('Should be a number', function(){
        const badInputs=[
            'a',',','M'
        ];
        badInputs.forEach(input =>{
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });


});
