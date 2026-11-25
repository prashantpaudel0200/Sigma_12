function save2Db(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();

    } else{
        failure();
        
    }
};

save2Db("Prashant Paudel is my name",
    () => {
        console.log("SUCESS1: DATA IS SAVED");
        save2Db("Hello World", () => {
            console.log("SUCESS2: DATA IS SAVED");
            save2Db("Pravin Paudel", () => {
                console.log("SUCESS3: DATA IS SAVED");
            }, () => {
                console.log("FAILURE3: DATA IS NOT SAVED");
            })
        }, () => {
            console.log("FAILURE2: DATA IS NOT SAVED.")
        });
    },
    () => {
        console.log("FAILURE: DATA IS NOT SAVED. Weak Connection");
    }
);