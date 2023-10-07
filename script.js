
function validate(){
    let email = document.querySelector(".mail").value;
    let pass = document.querySelector(".pass").value;
    let emailCheck=email.includes("@gmail.com"); 
    let uC=0;
    let sC=0;
    let dig=0;
    for(let ch of pass)
    {
        if(Number.isInteger(Number(ch)))
        {
            dig++;
        }
        else if(ch==='@' || ch==='#' || ch==='$')
        {
            sC++;
        }
        else if(ch===ch.toUpperCase())
        {
            uC++;
        }
    }
    alert(uC);
    if((uC>0 && sC>0) && (dig>0 && emailCheck))
    {
        alert("valid email")
    }
    else
    {
        alert("invalid email")
    }
}