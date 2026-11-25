const student = {
    name : "Prashant Paudel",
    age: 19,
    prop : this,
    getName: function() {
        console.log(this);//parent scope
        console.log(this.name);
    },
    getAge: () =>{
        console.log(this);//global scope
        console.log(this.age);
    },
     getInfo1: function(){
        setTimeout( () =>{
            console.log(this);//student
        }, 5000)
    },
    getInfo2: function(){
        setTimeout( function(){
            console.log(this);//window
        }, 2000)
    }
};
