document.addEventListener("DOMContentLoaded", function() {

    // ===== AUTH BUTTONS =====
    const authButtons = document.querySelectorAll('.btn-click');
    authButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            authButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ===== HERO BUTTONS =====
    const heroButtons = document.querySelectorAll('.btn-click-hero');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            heroButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ===== DYNAMIC RISK PERCENTAGE =====
    let risk = 24;
    const riskPercentEl = document.getElementById("riskPercent");
    const progressBarEl = document.querySelector(".progress-bar");
    setInterval(() => {
        if (risk < 30) {
            risk++;
            if(riskPercentEl) riskPercentEl.innerText = risk + "%";
            if(progressBarEl) progressBarEl.style.width = risk + "%";
        }
    }, 3000);

    // ===== NAVBAR SMOOTH SCROLL =====
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetID);
            if(target){
                const yOffset = -80; // navbar height offset
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        });
    });

});
