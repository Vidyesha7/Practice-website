document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.toggle');
    var sidebar = document.getElementById('sidebar');
    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
