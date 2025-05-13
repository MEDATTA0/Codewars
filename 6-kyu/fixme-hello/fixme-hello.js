class Dinglemouse {
    constructor() {
        this.name = this.age = this.sex = 0
        this.sayHello = {}
    }
​
    setAge(age) {
        this.age = age
        this.sayHello.age = age
        return this
    }
​
    setSex(sex) {
        this.sex = sex
        this.sayHello.sex = sex
        return this
    }
​
    setName(name) {
        this.name = name
        this.sayHello.name = name
        return this
    }
​
    hello() {
      const keys = Object.keys(this.sayHello);
      const displays = keys.map((key)=>{
        switch(key){
            case "name":
              return `My name is ${this.sayHello[key]}.`;
            case "age":
              return `I am ${this.sayHello[key]}.`
            case "sex":
              return `I am ${this.sayHello[key] == 'M' ? "male" : "female"}.`
        }
      })
      return `Hello.${displays.length ? " " : ""}${displays.join(" ")}`;
    }
​
}