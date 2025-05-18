document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Update active class only for section links
    document.querySelectorAll('.sidenav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            document.querySelectorAll('.sidenav li').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });

    // Update last modified date
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
});