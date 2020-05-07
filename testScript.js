$(document).ready(function() {
    const container = $('.container')

    $(".saveBtn").on('click', function() {
        
        console.log("clicked");
        const task = $(this).parent().siblings(".task").val();
        const time = $(this).parent().parent().attr("id");

        localStorage.setItem(time, task);
    });

    $("#8 .task").val(localStorage.getItem("8"));
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));

        //keep going and do the above for all the different times


        $("#currentDay").text(moment().format("dddd, Do, MMMM"));

        function hourCheck() {
        const currentHour = moment().format("kk")
        const testHour = currentHour - 12
            //loop over and if statement 
            $(".idDiv").each(function(){
                if($(this).attr("id")<testHour){
                    $(this).children("textarea").addClass("bg-secondary")
                }else if($(this).attr("id") == testHour){
                    $(this).children("textarea").addClass("bg-warning")
                }else {
                    $(this).children("textarea").addClass("bg-success")
                }
            })

        }
        hourCheck();

    // we can check if the currentHour above is less than or more than the idi.e 8, 9, 10 etc. 

    // we will need to add a class to every row/div of past or future. an if statement could be used to remove the aforementioned class depending on the time comparision. 
    // so the css you apply to past classes for example would only appear if they had the past class and therefore past and future would be different






    })

/*
$(document).ready(function() {
    const container = $('.container')
    // const textInputArea1 = $('#textInputArea1')
    // const textInputArea = $('#textInputArea')
    // textInputArea1.addClass('bg-secondary');
    
    // function colourChange() {
        //     this.addClass('bg-secondary');
        // }
        
        // $("textarea").each(colourChange)





                
    function userInputText(event) {
        event.preventDefault();
        console.log(event + "click")
        let textToSave = ('#taskTodo').val().trim();
        console.log(textToSave)
        localStorage.setItem("localText", JSON.stringify(textToSave));
        taskTodo.text("");
        const reloadTextBox = JSON.parse(localStorage.getItem("localText"));
        taskTodo.text(reloadTextBox)
        //reloadTextBox.text(JSON.parse(localStorage.getItem("textToLock")))
        
    }
    
    $('#timeTodo').on('click', userInputText)
    
    

        

        
        
        
        // $document.ready( function() {
            //     let reloadText = $('#textInputArea')
            //     if(localStorage.getItem("#textInputArea")) {
                //         reloadText.html(JSON.parse(localStorage.getItem("textToLock")));
                //     }
                // }
                
               
                
                
                
                
                
                function testFunc(event) {
                    event.preventDefault()
                    alert("click")
                }
                function createButton(buttonDiv, i) {
                    const button = $("<button>")
                    buttonId = "lockButton" + i
                    button.attr("type", "button");
                    button.attr("class", "btn btn-primary rounded mx-auto d-block")
                    button.attr("id", buttonId)
                    button.text("Lock")
                    buttonDiv.append(button)
                    
                    $(button).on('click', function(i) {
                        alert("click"+i)
                    })
                    
                    
                }
                function createButtonDiv(rowDiv, i) {
                    const buttonDiv = $("<div>");
                    buttonDiv.attr("class", "col-md-1 border-top")
                    buttonDiv.attr("style", "height:100px;")
                    rowDiv.append(buttonDiv)
                    createButton(buttonDiv, i)
                }
                
                
                function createTextarea(rowDiv, i) {
                    const textareaDiv = $("<textarea>")
                    textareaDiv.attr("class", "card-body col-md-10 border-right border-top")
                    index = i+9
                    indexAlt = ""
    if(index < 10) {
        indexAlt = "0"+index
    }else {
        indexAlt = index
    }
    
    textareaDiv.attr("alt", indexAlt + ":00:00")
    textareaDiv.attr("id", "textInputArea" + i)
    
    // if(moment()){}
    rowDiv.append(textareaDiv)
    
    createButtonDiv(rowDiv, i)
    
}

function createTimeDiv(rowDiv, i) {
    const timeDiv = $("<div>")
    timeDiv.attr("class", "card-body col-md-1 border-top align-middle")
    timeDiv.text(i + 9 + ":00")
    rowDiv.append(timeDiv)
    createTextarea(rowDiv, i)
    
}

function createRow(originalDiv, i) {
    const rowDiv = $("<div>");
    rowDiv.attr("class", "row card");
    rowDiv.attr("style", "height:100px;");
    originalDiv.append(rowDiv);
    createTimeDiv(rowDiv, i)
    
}




function createSchedule() {
    let divIndex = 0
    const originalDiv = $('<div>');
    originalDiv.attr('id', 'original')
    container.append(originalDiv)
    
    
    
    
    for (var i = 0; i < 10; i++) {
        
        createRow(originalDiv, i)
        
    }
    
    
    
    
}


createSchedule()
})




// var now = moment().format('MMM DD h:mm A');
// alert(now);


// function inputAreaColour (time){
    //    if (time = "") {
        //         textInputArea.classList.add(bg-secondary)
        //     }else {
            //         textInputArea.classList.add(bg-success)
            //     }
            //     console.log(time)
            // }
            
            // textInputArea.inputAreaColour(textInput)
            
            
            // moment().format();
            
            
            
            
            // for each to create the scheduler boxes which allows auto id's, inside function add if index is less than 6pm then keep creating boxes, else stop.
            
            
            
            // const textInputArea1 = $('#textInputArea1')
            // const textInputArea = $('#textInputArea')
            // textInputArea1.addClass('bg-secondary');
            
            // function colourChange() {
                //     this.addClass('bg-secondary');
                // }
                
                // $("textarea").each(colourChange)
                
                
//                 const container = $('.container')
                

// function createButton() {}
// function createButtonDiv() {}
// function createTextarea(rowDiv, i) {
//     const textareaDiv = document.createElement('textarea')
//     textareaDiv.setAttribute
// }

// function createTimeDiv(rowDiv, i) {
//     const timeDiv = document.createElement('div')
//     timeDiv.setAttribute('class', 'card-body col-md-1 border-top')
//     timeDiv.textContent = i + 9 + ":00"
//     rowDiv.append(timeDiv)
//     createTextarea(rowDiv, i)
    
// }

// function createRow(originalDiv, i) {
//     const rowDiv = $("<div>");
//     rowDiv.attr("class", "row card");
//     rowDiv.attr("style", "height:100px");
//     rowDiv.text("rowDiv Test");
//     originalDiv.append(rowDiv);
//     createTimeDiv(rowDiv, i)
//     console.log(rowDiv)
// }




// function createSchedule() {
//     let divIndex = 0
//     const originalDiv = document.createElement('div')
//     originalDiv.setAttribute('id', 'original')
//     originalDiv.textContent = 'test Div'
//     container.append(originalDiv)

    
    

//     for (var i = 0; i < 10; i++) {
        
//         createRow(originalDiv, i)

//     }




// }


// createSchedule()




// var now = moment().format('MMM DD h:mm A');
// alert(now);


// function inputAreaColour (time){
//    if (time = "") {
//         textInputArea.classList.add(bg-secondary)
//     }else {
//         textInputArea.classList.add(bg-success)
//     }
//     console.log(time)
// }

// textInputArea.inputAreaColour(textInput)


// moment().format();




// for each to create the scheduler boxes which allows auto id's, inside function add if index is less than 6pm then keep creating boxes, else stop.
*/