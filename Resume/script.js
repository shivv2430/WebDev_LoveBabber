const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

document.querySelectorAll('.tag-pill').forEach(pill => {
    pill.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });
    pill.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});
