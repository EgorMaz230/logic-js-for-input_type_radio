

function changeTheme() {
    let radios = document.getElementsByName('themeOption');
  
    let selectedTheme;
    radios.forEach(function(radio) {
        if (radio.checked) {
            selectedTheme = radio.value;
        }
    });

    document.body.className = '';

    document.body.classList.add(selectedTheme);
    let image = document.createElement('img');

    if (selectedTheme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.body.style.fontFamily = 'Roboto, sans-serif';
        document.querySelector('.textContainer').textContent = 'This is a dark theme.';
        image.src = './pngwing.com';
    } else if (selectedTheme === 'light') {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
        document.body.style.fontFamily = 'Arial, sans-serif';
        document.querySelector('.textContainer').textContent = 'This is a light theme.';
        image.src = './pngegg';
        
    }
    while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
      }
  
      textContainer.appendChild(image);
    }
