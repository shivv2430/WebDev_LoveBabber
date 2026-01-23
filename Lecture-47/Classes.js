// Classes------> Blueprint(data member,methods,functions)
// 1.States/Properties
// 2.Behaviour/functions

class Human{                    //Blueprint
    // Properties
    name;
    age= 13;                //Public
    #weight =85;       //private
    height = 180;

// Constructor--->if we only initialize variable but not give them value & update value (used to give value to an integer )
    constructor(newName,newHeight,newWeight){
        this.age=newName;
        this.height=newHeight;
        this.#weight=newWeight;
}



    // Behavior
    walking(){
        console.log("I am walking",this.#weight)
    }
    running(){
        console.log("I am running")
    }
// use get & set to acces the private value outside the classes(data protection,semantic quality,encapsulation)
    get fetchweight(){
        return this.#weight;
    }

    set ModifyWeight(val){
    return this.#weight=val;
    }

}
// Object------> Actual work                  
let obj =new Human(20,190,100);                   //Actual work
// console.log(height);
console.log(obj.height);       //public data
console.log( obj.fetchweight);
// console.log(obj.#weight);  //Private data using #


















