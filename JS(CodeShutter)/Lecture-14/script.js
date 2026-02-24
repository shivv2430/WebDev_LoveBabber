                                    //Method-1
// import {multiply} from './utility.js';

// const result = multiply(2, 3, 4);
// console.log('The result of multiplication is: ' ,(result));


// import {add} from './utility.js';

// const sum = add(5, 10, 15);
// console.log('The result of addition is: ' ,(sum));


                                        //Method-2
// import * as utility from './utility.js';

// const result = utility.multiply(2, 3, 4);
// console.log('The result of multiplication is: ' ,(result));

// const sum = utility.add(5, 10, 15);
// console.log('The result of addition is: ' ,(sum));

import* as utility from './utility.js';

const result = utility.mul(2, 3, 4);
console.log('The result of multiplication is: ' ,(result));

const sum = utility.addition(5, 10, 15);
console.log('The result of addition is: ' ,(sum));
//for constants
console.log('The total number of students is: ' ,utility.STUDENT_COUNT);

//for default export
import division from './utility.js';

const quotient = division(10, 2);
console.log('The result of division is: ' ,(quotient));
