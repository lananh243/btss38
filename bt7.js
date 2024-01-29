const passwordInput = document.getElementById('inp');
const lengthInput = document.getElementById('choice');
const uppercaseCheckbox = document.getElementById('check');
const lowercaseCheckbox = document.getElementById('check-1');
const numbersCheckbox = document.getElementById('check-2');
const symbolsCheckbox = document.getElementById('check-3');
const generateButton = document.getElementById('mouse');

const generatePassword = () => {
  const length = lengthInput.value;
  const Uppercase = uppercaseCheckbox.checked;
  const Lowercase = lowercaseCheckbox.checked;
  const Numbers = numbersCheckbox.checked;
  const Symbols = symbolsCheckbox.checked;

  let characters = '';
  if (Uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (Lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (Numbers) characters += '0123456789';
  if (Symbols) characters += '!@#$%^&*()';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  passwordInput.value = password;
};

const copyToClipboard = () => {
  const password = passwordInput.value;

  const tempInput = document.createElement('input');
  tempInput.value = password;
  document.body.appendChild(tempInput);
  tempInput.select();


  navigator.clipboard.writeText(password)
    .then(() => {
      alert('Mật khẩu đã được sao chép vào clipboard!');
    })
    .catch((error) => {
      console.error('Lỗi khi sao chép mật khẩu vào clipboard:', error);
    })
    .finally(() => {
      document.body.removeChild(tempInput);
    });
};

generateButton.addEventListener('click', generatePassword);
passwordInput.addEventListener('click', copyToClipboard);