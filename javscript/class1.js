let req=prompt("enter the reques");
let task=[];
while(true)
{
    if(req=="list")
    {
        for(element of task)
        {
            console.log(element);
        }
    }
    else if(req=="add")
    {
        let newTask=prompt("enter the task");
        task.push(newTask);
    }
    else if(req=="delete")
    {
        let del=prompt("enter the task to delete");
        
            task.splice(index,1);
        
    }
    else{
        console.log("unknown request");
    }

    req=prompt("enter the request");
}