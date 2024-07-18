    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click',function(e){
            e.preventDefault();

            const targetId = this.getattribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement){
                window.scrollTo({
                    top: targetElement.off,
                    behaviour: 'smooth'
                });
            }
        });
    });
    const topBotton = document.getElementById('top-button');
    window.addEventListener('scroll', () => {
        if(window.scrolly > 300) {
            topButton.style.display = 'block';
        }else {
            topButton.style.display = 'none';
        }
    });

    topBotton.addEventListener('click', () => {
        window.scrollTO({
            top: 0,
            behavior: 'smooth'
        });
    });
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark/Light Mode';
toggleButton.classList.add('toggle-button');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click',() =>{
    document.body.classList,toggle('dark-mode');
});
