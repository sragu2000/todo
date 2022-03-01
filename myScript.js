var userOrder=1;
var taskOrder=1;
var personNames=[];
var taskAssignments=[];
var assignments=[];
$(document).ready(()=>{
    //for button add user
    $(document).on("click","#addUser",()=>{
        var person= prompt("Name");
        if(!(personNames.includes(person)) && person.trim()!=""){
            $("#personID").append(`<option id="p${userOrder}">${person}</option>`);
            userOrder+=1;
            personNames.push(person);
        }else{
            alert("Duplicate or Invalid Value");
        }
    });
    //------------------------------------------------------------------------------------------------
    //for button add task
    $(document).on("click","#addTask",()=>{
        var task = prompt("Task");
        task=task.trim();
        if(task.trim()!=""){
            $("#taskID").append(`<option id="t${taskOrder}">${task}</option>`);
            var htmlText=`
                <div class="card">
                    <div class="card-header bg-secondary text-white"><b>
                        <i class="fas fa-thumbtack"></i>  ${task}
                    </b></div>
                    <div class="card-body t${taskOrder}"></div>
                    <div class="card-footer"></div>   
                </div><br>
            `;
            $("#viewTask").append(htmlText);
            taskAssignments.push(task);
            console.log(taskAssignments);
            taskOrder+=1;
        }else{
            alert("Invalid Task");
        }
    });
    //------------------------------------------------------------------------------------------------
    //for assign task button
    $(document).on("click","#assignTask",function(){
        var currentPerson=$("#personID").val();
        var currentTask=$("#taskID").find('option:selected').attr('id');
        if(!assignments.includes(currentTask+"_"+currentPerson)){
            assignments.push(currentTask+"_"+currentPerson);
            var newID=currentPerson+currentTask;
            $("."+currentTask).append(
                `<div class='row' id='${newID}'>
                <div class='col-1'>
                    <button type="button" class="btn form-control" onclick="clearElement('#${newID}');">
                        <i class="fas fa-trash-alt"></i>
                    </button>   
                </div>
                <div class="col-11">
                    <p class="form-control font-weight-bold text-capitalize">
                        ${currentPerson}
                    </p>
                </div>
            `);
        }else{
            alert("This person is already assigned");
        }
    });
$(document).on("dblclick",".touchClose",()=>{
    $(".touchClose").hide(1000);
});
});
function clearElement(ele){
    $(ele).hide(1000);
}