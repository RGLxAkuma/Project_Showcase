window.addEventListener("scroll" , reveal);

function reveal(){
    const reveals = document.querySelectorAll('.reveal');

    for(let i=0;i<reveals.length;i++)
    {
        const winHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 220;

        if(revealTop < winHeight-revealPoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}