

export const startApp = () => {
  const button = document.querySelector('button');
  const content = document.querySelector('.content');

  button.addEventListener('click', () => {
    content.classList.toggle('hidden')
  })
}