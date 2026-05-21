// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Check for saved theme preference or use system preference
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkModeToggle.checked = true;
    darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
        darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
        darkModeIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2');
        navbar.classList.remove('py-3');
    } else {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-2');
    }
});

// Active nav link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Project filtering
const filterBtns = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
        filterBtns.forEach(b => b.classList.add('bg-gray-200', 'dark:bg-gray-700'));
        btn.classList.remove('bg-gray-200', 'dark:bg-gray-700');
        btn.classList.add('active', 'bg-primary', 'text-white');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Copy email function
function copyEmail() {
    const email = '1nt23ad052.srusti@nmit.ac.in';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Email address copied to clipboard!');
    });
}

// Back to top button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.remove('opacity-100', 'visible');
        backToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
