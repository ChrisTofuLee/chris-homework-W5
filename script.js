const textInputArea = $('#textInputArea')
const textInput = textInputArea.text()



function inputAreaColour (time){
   if (time = "") {
        textInputArea.addclass(bg-secondary)
    }else {
        textInputArea.addClass(bg-success)
    }
    console.log(time)
}

textInputArea.inputAreaColour(textInput)








