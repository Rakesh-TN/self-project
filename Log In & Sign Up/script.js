function saveInfo(){
    let alpha = document.querySelector("#userID")
    let beta = document.querySelector("#userName")
    let comma = document.querySelector("#userNumber")
    let delta = document.querySelector("#userMail")
    let mark = document.querySelector("#userGender")
    let juna = document.querySelector("#countryCode")

    let userId = alpha.value 
    let userName = beta.value
    let userNumber = comma.value
    let userMail = delta.value
    let userGender = mark.value
    let countryCode = juna.value

    let userinfo = []
    let info = {userId,userName,userNumber,userMail,userGender, countryCode }
    userinfo.push(info)
    let stringify = localStorage.setItem("Personal-Detail", JSON.stringify(userinfo))
    console.log(stringify)
}

function printInfo(){
    let info2 = JSON.parse(localStorage.getItem("Personal-Detail"))
    let printInfo = window.open("","_blank");
    let {userId,userName,userNumber,userMail,userGender,countryCode} = info2[0]

    printInfo.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "icon" href = "./img/message.png" type = "image/x-icon"> 
        <title>Profile Page</title>
        <link rel="stylesheet" href="./style.css">

    </head>
    <body>
    <section class="signUpform">
    <div class="formTitle">
        <h1>Profile</h1>
    </div>
    <div class="formCollect">
            <div>
                <p>Your User Name : ${userId}</p>
            </div>
            <br>
            <div>
                <p>Your Name : ${userName}</p>
            </div>
            <br>
            <div>
                <p>Your Gender : ${userGender}</p>   
            </div>
            <br>
            <div>
                <p>Your Mobile Number : ${countryCode},  ${userNumber}</p>
            </div>
            <br>
            <div>
                <p>Your Mail ID : ${userMail}</p>
            </div>
            <div>
                <button type="button" class="nextButton" onclick="openPasskey()"> Next </button>
            </div>
    </div>        
    </body>
    </html>`)
}

function openPasskey(){
    
}