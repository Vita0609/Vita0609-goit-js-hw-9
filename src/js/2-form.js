const input = document.querySelector('.feedback-form input');
const text = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');

form.addEventListener('input',addValue);
form.addEventListener('submit',onSubmit);

function addValue(e ) {
  formData[e.target.name] = e.target.value.trim();
  
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  const savedSettings = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  const formData = { email: savedSettings?.email || '', message: savedSettings?.message || ''};
if (savedSettings !== null) {
  text.value = savedSettings.message;
  input.value = savedSettings.email;
}


function onSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim()
  const message = e.currentTarget.elements.message.value.trim()

  if (email !== '' && message !== '') {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
   e.currentTarget.reset()
  } else {
    const alert = document.querySelector('.alert');
    alert.style.visibility = 'visible';
    alert.classList.add('anim');
    console.log('ENTER WORDS!!!');

    setTimeout(() => {
      alert.style.visibility = 'hidden';
    }, 3000);
  }
}