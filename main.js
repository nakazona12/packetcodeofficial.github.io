var getcontact=document.getElementById("contactme");
if(getcontact)
{
    getcontact.addEventListener("click", function () 
    {
           location.href = "contact.html";
    });
}
document.onclick = function(){
    var pick = document.querySelector('input[name=choice]:checked').value;
    var getinput=document.getElementById('feedback-wage');
    var getlabel=document.getElementById('hiringlabel')
    var getform=document.getElementById('mainForm');
    var input=document.createElement('input');
    var newlabel = document.createElement("Label");
    if(pick!== null)
    {
        if(pick==='hiring' && getinput===null)
        {
            input.id='feedback-wage'
            input.type="number";
            newlabel.setAttribute("for",'feedback-wage');
            newlabel.className='formstyle';
            newlabel.id='hiringlabel';
            newlabel.innerHTML = "Hourly Wage";
            getform.appendChild(newlabel);
            getform.appendChild(input);
    
        }
        if(pick==='comment' && getinput!==null)
        {
            getinput.parentNode.removeChild(getinput);
            getlabel.parentNode.removeChild(getlabel);
        }
        if(pick==='question' && getinput!==null)
        {
            getinput.parentNode.removeChild(getinput);
            getlabel.parentNode.removeChild(getlabel);
        }
    }
}
window.onload=function()
{
    let form=document.querySelector('#mainForm');
    form.onsubmit= function()
    {
        if(!form.checkValidity())
        {
            form.classList.add('was-validated');

            event.preventDefault();
            return false;
        }
        return true;
    }
}