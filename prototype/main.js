const parentObj = {
    calAge : function(){
        console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
}

const childObj = Object.create(parentObj);
childObj.fname = "Albert";
childObj.lname = "Mathew";
childObj.age = 23;

childObj.calAge();

//Q2.
class Person {
    constructor() {
      this.gender = 'female';
    }
    printPerson() {}
  }
  class User extends Person {
    constructor() {
      super();
      this.name = 'Aaisha';
    }
    printUser() {}
  }
  var u = new User();
  console.log(u);

  //Q3.
  const calSum= {
    sumArr:function(arr){
      let sum=0;
      for(let i = 0; i < arr.length; i++){
        sum+=arr[i]
      }
      console.log(sum);
    }
  }
  calSum.sumArr([1,2,3,4,5])  
  calSum.sumArr([6,7,8,9,10])

  //Q4.
  const user = {
    name: 'Alex',
    age: 30
}
const prop = Object.getOwnPropertyNames(user)

console.log(prop) // [ 'name', 'age' ]



