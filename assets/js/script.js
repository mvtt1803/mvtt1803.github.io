// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    // Configure sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Enhanced smooth scrolling with offset
    document.querySelectorAll('.sidenav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate proper offset for fixed sidenav
                const yOffset = -20;
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });

                // Update active state
                document.querySelectorAll('.sidenav li').forEach(item => {
                    item.classList.remove('active');
                });
                this.parentElement.classList.add('active');
            }
        });
    });

    // Add current date
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
});