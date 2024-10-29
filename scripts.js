document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
    let isValid = true;

    const email = document.getElementById('contactEmail').value.trim();
    const emailError = document.getElementById('contactEmailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    
    const password = document.getElementById('contactPassword').value;
    const passwordError = document.getElementById('contactPasswordError');
    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    if (!isValid) {
      event.preventDefault(); 
    }
     else {
      alert('Thank you for subscribing with ' + email + '!');
    }
  });


  const subscribeForm = document.getElementById('subscribeForm');
  subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    const subscribeEmail = document.getElementById('subscribeEmail').value.trim();
    const subscribeEmailError = document.getElementById('subscribeEmailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(subscribeEmail)) {
      subscribeEmailError.textContent = "Please enter a valid email.";
      isValid = false;
    } else {
      subscribeEmailError.textContent = "";
    }

    if (!isValid) {
      return; 
    } else {
      alert('Thank you for subscribing with ' + subscribeEmail + '!');
      $('#subscribeModal').modal('hide');
      subscribeForm.reset();
    }
  });

 
  const changeColorBtn = document.getElementById('changeColorBtn');
  const themeStatus = document.getElementById('themeStatus');
  let currentTheme = 'dark'; 
  
  changeColorBtn.addEventListener('click', function() {
    if (currentTheme === 'dark') {
      document.body.style.backgroundColor = '#ffffff'; 
      document.body.style.color = '#000000'; 
      changeColorBtn.textContent = 'Dark Theme'; 
      themeStatus.textContent = 'Current Theme: Light'; 
      currentTheme = 'light'; 
    } else {
      document.body.style.backgroundColor = '#1c1c1e'; 
      document.body.style.color = '#A0A0A0'; 
      changeColorBtn.textContent = 'Light Theme'; 
      themeStatus.textContent = 'Current Theme: Dark'; 
      currentTheme = 'dark'; 
    }
  });

  const showTimeBtn = document.getElementById('showTimeBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    const citySelect = document.getElementById('citySelect');

    
    showTimeBtn.addEventListener('click', function() {
      const selectedCity = citySelect.value;
      const currentTime = new Intl.DateTimeFormat('en-US', {
        timeZone: selectedCity,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
      }).format(new Date()); 
      timeDisplay.textContent = currentTime;
    });

  playSoundBtn.addEventListener('click', function() {
    document.getElementById("sound1",'sound2','sound3','sound4','sound5','sound6').volume = 0.2;
    const sounds = [
      document.getElementById('sound1'),
      document.getElementById('sound2'),
      document.getElementById('sound3'),
      document.getElementById('sound4'),
      document.getElementById('sound5'),
      document.getElementById('sound6'),
    ];
    const randomIndex = Math.floor(Math.random() * sounds.length); 
    const selectedSound = sounds[randomIndex]; 
    selectedSound.currentTime = 0; 
    selectedSound.play(); 
    playSoundBtn.classList.add('animate'); 
    document.getElementById('soundplay1').innerHTML = "Sound " + randomIndex + "is playin now ";
   
    setTimeout(() => {
      playSoundBtn.classList.remove('animate');
    }, 300);
  });
  
  const dateTimeDisplay = document.getElementById('dateTimeDisplay');

  function updateDateTime() {
    const now = new Date();
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const formattedDate = now.toLocaleString('en-US', options);
    dateTimeDisplay.textContent = formattedDate;
  }

  updateDateTime(); 
  setInterval(updateDateTime, 1000); 
});
