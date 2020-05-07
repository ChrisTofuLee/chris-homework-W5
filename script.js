$(document).ready(function() {
    const container = $('.container')

    $(".saveBtn").on('click', function() {
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




        $("#currentDay").text(moment().format("dddd, Do, MMMM"));


        
        function hourCheck() {
        const currentHour = moment().format("kk")
        const testHour = currentHour - 12
           
            $(".idDiv").each(function(){
                if($(this).attr("id")<currentHour){
                    $(this).children("textarea").addClass("bg-secondary")
                }else if($(this).attr("id") == currentHour){
                    $(this).children("textarea").addClass("bg-warning")
                }else {
                    $(this).children("textarea").addClass("bg-success")
                }
            })

        }
        hourCheck();
        window.setInterval(hourCheck, 1000)

    })
