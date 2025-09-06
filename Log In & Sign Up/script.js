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

    let userIdEX = /^[a-z]{2,16}[\W]{1}[0-9]{2,16}$/
    if (!userIdEX.test(userId)){
        alert("Please enter a valid User ID like 'abc@1234'.");
        return;
    }
    let userNameEX = /^[A-Z]{1}[\w]{1,15}/
    if (!userNameEX.test(userName)){
        alert("Please enter a valid User Name like 'Johnan'.");
        return;
    }
    let userNumberEX =/[6-9]{1}[0-9]{9}$/
    if(!userNumberEX.test(userNumber)){
        alert("Please enter a valid Your Number with 10 Digit.");
        return;
    }
    let userMailEX = /[\w]{2,32}[\W]/
    if(!userMailEX.test(userMail)){
        alert("Please enter a valid User Mail.");
        return;
    }
    

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
  <link rel="icon" href="/img/message.png" type="image/x-icon"> 
  <title>Profile Page</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <section class="signUpform">
    <div class="formTitle">
      <h1>Profile</h1>
    </div>
    <div class="formCollect">
      <p>Your User Name: ${userId || ""}</p>
      <p>Your Name: ${userName || ""}</p>
      <p>Your Gender: ${userGender || ""}</p>
      <p>Your Mobile Number: ${countryCode || ""} ${userNumber || ""}</p>
      <p>Your Mail ID: ${userMail || ""}</p>
    </div>        
  </section>
</body>
</html>
`);
}
printInfo.document.close();


