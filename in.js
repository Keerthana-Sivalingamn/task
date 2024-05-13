
document.addEventListener('mousemove', move);
function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (e.pageX * speed) / 120;
        const y = (e.pageY * speed) / 120;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}

gsap.from('.logo', {opacity:0, duration:1, delay:2, y:10});
gsap.from('.navbar .nav_items', {opacity:0, duration:1, delay:2, y:30, stagger:0.2});
gsap.from('.title', {opacity:0, duration:1, delay:2, y:30});
gsap.from('.description', {opacity:0, duration:1, delay:2, y:30});
gsap.from('.btn', {opacity:0, duration:1, delay:2.1, y:30});
gsap.from('.image', {opacity:0, duration:1, delay:2.6, y:30});
gsap.from('.btn1', {opacity:0, duration:1, delay:2.6, y:30});


