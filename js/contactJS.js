$(document).ready(function (){

$(".sendBtn").click((e) => {
        let nameInput = $(".contactNameInput").val();
        let emailInput = $(".contactEmailInput").val();
        let phoneInput = $(".contactPhoneInput").val();
        let messageTextera = $(".contactTextarea").val();

        if(phoneInput == "" && nameInput == "" && phoneInput == "" && messageTextera == ""){
            $(".contInp").addClass("borderInpur")
            $(".spanInput").addClass("spanInputShow")
        } else if (nameInput == ""){
            $(".contInpNam").addClass("borderInpur");
            $(".contSpanNam").addClass("spanInputShow")
        } else if(emailInput == ""){
            let rgEmail = /^[^@\s\t\r\n] + @[^@\s\t\r\n] + \.[^@\s\t\n\r]/
            console.log(rgEmail.test(emailInput))
            console.log(emailInput)
            $(".contInpEmail").addClass("borderInpur");
            $(".contSpanEmail").addClass("spanInputShow");
        }else {
            if(isNaN(Number(phoneInput))) {
                $(".phoneInput").css("border-bottom", "1px solid red");
                $(".phoneInputSpan").css({
                    fontSize:"12px",
                    color:"red",
                    textAlign:"right"
                })
                $(".phoneInputSpan").html("Only numbers are required");
            } else {
                $(".phoneInput").css("border", "none");
                $(".phoneInputSpan").empty()
            }

            $(".nameInput").css("border", "none");
            $(".nameInputSpan").empty();
        }
    })
})