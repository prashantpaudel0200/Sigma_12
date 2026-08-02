let todo= [];
let req = prompt("Please Enter your Request: ");
while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "list") {
        console.log("--------------------");
        for(let i=0; i< todo.length; i++){
            console.log((i+1), todo[i]);
        }
        console.log("--------------------");
    } else if(req == "add"){
        let task = prompt("Please Enter the task you want to add: ");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("Please Enter the index you want to delete: ");
        idx-=1;
        todo.splice(idx, 1);
        console.log("Task Deleted");
    } else {
        console.log("Invalid Request");
    }
    req = prompt("Please Enter your request: ");
}