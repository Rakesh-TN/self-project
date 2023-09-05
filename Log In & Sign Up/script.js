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
    console.log(userinfo)
    let fd = localStorage.setItem("Personal-Detail", JSON.stringify(userinfo))
    console.log(fd)
}

function printInfo(){
    let info2 = JSON.parse(localStorage.getItem("Personal-Detail"))
    let printInfo = window.open("_blank");
    let {userId,userName,userNumber,userMail,userGender,countryCode}=info2[0]
    console.log(info2)

    printInfo.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "icon" href = "https://img.icons8.com/3d-fluency/94/smiling-face-with-hearts-icon.png" type = "image/x-icon"> 
        <title>Profile Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
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
                <p>Your Mobile Number : ${countryCode}  ${userNumber}</p>
            </div>
            <br>
            <div>
                <p>Your Mail ID : ${userMail}</p>
            </div>
    </div>        
    </body>
    </html>`)
}