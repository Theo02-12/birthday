const btn = document.querySelector('.btn')
const title = document.querySelector('#title')

btn.addEventListener('click', () => {
    title.innerHTML = "Joyeux Anniversaire bg ✨"
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
   emojis: ['🎊', '✨'],
})
})


