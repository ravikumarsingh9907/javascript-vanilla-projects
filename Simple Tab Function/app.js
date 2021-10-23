const About = document.querySelector('.about');
const Btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

About.addEventListener('click', (obj) => {
    const id = obj.target.dataset.change;
    if (id) {
        Btns.forEach( (btn) => {
            btn.classList.remove("active");
            obj.target.classList.add("active");
        });
        content.forEach( (e) => {
            e.classList.remove("active");
        });
        const value = document.getElementById(id);
        value.classList.add("active");
    }
});
