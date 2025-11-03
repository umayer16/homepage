document.addEventListener('DOMContentLoaded', function() {
  // ----- Part 1: Multiple Choice -----
  const buttons = document.querySelectorAll('#mcq button');
  const result = document.getElementById('mcq-result');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Reset colors
      buttons.forEach(btn => btn.classList.remove('correct', 'incorrect'));

      if (button.textContent === 'Jupiter') {
        button.classList.add('correct');
        result.textContent = 'Correct!';
      } else {
        button.classList.add('incorrect');
        result.textContent = 'Incorrect';
      }
    });
  });

  // ----- Part 2: Free Response -----
  const input = document.getElementById('free-response');
  const checkBtn = document.getElementById('check-answer');
  const frResult = document.getElementById('fr-result');

  checkBtn.addEventListener('click', function() {
    const answer = input.value.trim().toLowerCase();
    if (answer === 'tokyo') {
      input.classList.remove('incorrect');
      input.classList.add('correct');
      frResult.textContent = 'Correct!';
    } else {
      input.classList.remove('correct');
      input.classList.add('incorrect');
      frResult.textContent = 'Incorrect';
    }
  });
});
