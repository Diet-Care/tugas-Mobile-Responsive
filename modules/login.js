export async function login(){
    const btnsubmit2 = document.getElementById('submit-login');

    function onClick(res){
     
        btnsubmit2.addEventListener('click', async () =>{
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/users");
          
                console.log(response);
                return parselogin(await response.json(), email, password);
            } catch (error) {
                console.log(error);
                res.innerText = error;
            }
        })
    }

    function parselogin(resJSON, email, password){

        const fail = document.getElementById('fail');
        const success = document.getElementById('success');
        let user = null;
        for(let i = 0; i < resJSON.length; i++){
            if(resJSON[i].email == email ){
                user = resJSON[i];
                break;
            } 
        }
        if(user != null){
            if(user.password == password) {
                console.log("login success");
                success.innerHTML = `<div class="alert alert-success" role="alert">
                Login Success!
              </div> `
                window.location.href = "home.html";
            } else{
                console.log("login failed");
                fail.innerHTML = `<div class="alert alert-danger" role="alert">
               Login Failed!
              </div> `
            } 
        } else{
            console.log("login failed"); 
            fail.innerHTML = `<div class="alert alert-danger" role="alert">
               Login Failed!
              </div> `
        }
        
    }
    onClick();
}

