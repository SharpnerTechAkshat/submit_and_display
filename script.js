const signUp = e => {
    e.preventDefault();
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        number: document.getElementById('number').value
    }
    localStorage.setItem(formData.email,JSON.stringify(formData));
    // console.log(localStorage.getItem('Data'));
    displayData();
}

function displayData(){
   // console.log(JSON.parse(localStorage.getItem('Data')));
  var {name ,email ,number} = JSON.parse(localStorage.getItem('Data'));
  var output = document.getElementById('output');
  output.innerHTML = output.innerHTML  + `<li>
   ${name}  ${email} ${number}</li>`;
  
   
}

