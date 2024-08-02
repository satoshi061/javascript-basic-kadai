const btn = document.getElementById('btn');
let text = document.getElementById('text');
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
})