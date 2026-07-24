const student = {
    name: "Prashant",
    age : 19,
    phy : 55,
    maths : 58,
    dl : 52,
    getAvg(){
        let avg = (this.phy + this.maths + this.dl) /3;
        return avg;
    }
};