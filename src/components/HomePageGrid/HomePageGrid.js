document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.querySelector('.typewriter');
  const strings = [
    'Hello!',
    ' My name is <u style="color: #0ef">Allistair</u>.',
    'Nice to meet you.'
  ];
  let stringIndex = 0;
  let characterIndex = 0;
  let currentString = strings[stringIndex];
  let isDeleting = false;
  let delay = 1500;

  function type() {
    if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      currentString = strings[stringIndex];
      delay = 1500;
    } else if (!isDeleting && characterIndex === currentString.length) {
      isDeleting = true;
      delay = 1000;
    }

    typewriter.innerHTML = currentString.slice(0, characterIndex);
    characterIndex += isDeleting ? -1 : 1;

    setTimeout(type, isDeleting ? 20 : 30);
  }

  setTimeout(type, delay);
});
