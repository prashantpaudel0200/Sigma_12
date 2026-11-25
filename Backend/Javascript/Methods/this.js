const student = {
    name: "Prashant",
    age : 19,
    phy : 55,
    maths : 58,
    dl : 52,
    getAvg(){
        console.log(this);
        let avg = (this.phy + this.maths + this.dl) /3;
        console.log(`${this.name} obtained average marks ${avg}.`);
    }
};
// function  getAvg(){
//         console.log(this);
//         let avg = (this.phy + this.maths + this.dl) /3;
//         console.log(`${this.name} obtained average marks ${avg}.`);
//     }