themeToggle = document.getElementById('themeChange')
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-black')
    document.body.classList.toggle('text-white')
    document.body.classList.toggle('bg-white')
    document.body.classList.toggle('text-black')
    console.log('Theme changed')
    
})