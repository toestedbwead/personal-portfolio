/* ======================
   DOM ELEMENTS
   ====================== */

const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const profilePic = document.getElementById('profile-pic');
const profileModal = document.getElementById('profile-modal');
const closeModalBtn = document.getElementById('close-modal');
const techIcons = document.querySelectorAll('.tech-icon');
const projectsList = document.getElementById('projects-list');
const skillsList = document.getElementById('skills-list');

/* ======================
   NAVIGATION
   ====================== */

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active to clicked item
        item.classList.add('active');
        
        // Hide all sections
        contentSections.forEach(section => section.classList.remove('active'));
        // Show selected section
        const targetSection = document.getElementById(item.dataset.section);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

/* ======================
   PROFILE MODAL
   ====================== */

profilePic.addEventListener('click', () => {
    profileModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    profileModal.classList.remove('active');
});

// Close modal when clicking outside
profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
        profileModal.classList.remove('active');
    }
});

/* ======================
   TECH ICONS TOOLTIP
   ====================== */

techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const label = this.getAttribute('title');
        this.setAttribute('data-label', label);
    });
});

/* ======================
   PROJECTS DATA
   ====================== */

const projects = [
    {
        id: 'task-tracker',
        name: 'Task Tracker',
        description: 'a python command-line task tracker that stores tasks in a JSON',
        icon: 'fas fa-folder',
        difficulty: 'beginner',
        images: ['/static/images/projects/test.jpg', '/static/images/projects/test.jpg'],
        details: 'A Python CLI task tracker that stores tasks in JSON. Features include adding, deleting, marking complete, and listing tasks with persistent storage.',
        github: 'https://github.com/yourname/task-tracker',
        liveDemo: null
    },
    {
        id: 'github-user-activity',
        name: 'GitHub User Activity',
        description: "a python command-line interface tool to fetch and display a Github's user recent activity directly in terminal.",
        icon: 'fas fa-folder',
        difficulty: 'beginner',
        images: ['/static/images/projects/github-user-activity-1.png'],
        details: 'A Python CLI tool that fetches and displays a GitHub user\'s recent activity directly in the terminal using the GitHub API. Shows contributions, repositories, and more.',
        github: 'https://github.com/yourname/github-user-activity',
        liveDemo: null
    },
    {
        id: 'expense-tracker',
        name: 'Expense Tracker',
        description: 'a command-line expense tracker built with Python to manage personal finances. track, update, and analyze expenses with simple commands.',
        icon: 'fas fa-folder',
        difficulty: 'beginner',
        images: ['/static/images/projects/expense-tracker-1.png'],
        details: 'A command-line expense tracker built with Python for managing personal finances. Track, update, categorize, and analyze expenses with persistent CSV storage.',
        github: 'https://github.com/yourname/expense-tracker',
        liveDemo: null
    },
    {
        id: 'weather-cli',
        name: 'Weather CLI',
        description: 'a command-line application to fetch and display current weather information for any city using the OpenWeatherMap API',
        icon: 'fas fa-folder',
        difficulty: 'intermediate',
        images: ['/static/images/projects/weather-cli-1.png'],
        details: 'A CLI application that fetches and displays current weather information for any city using the OpenWeatherMap API. Shows temperature, humidity, wind speed, and more.',
        github: 'https://github.com/yourname/weather-cli',
        liveDemo: null
    },
    {
        id: 'number-guessing-game',
        name: 'Number Guessing Game',
        description: 'a cli-based number guessing game built with python using professional practices including OOP, modular structure, and git workflows.',
        icon: 'fas fa-folder',
        difficulty: 'intermediate',
        images: ['/static/images/projects/number-guessing-game-1.png'],
        details: 'A CLI-based number guessing game built with Python using professional practices: OOP principles, modular structure, error handling, and proper git workflows.',
        github: 'https://github.com/yourname/number-guessing-game',
        liveDemo: null
    },
    {
        id: 'unit-converter',
        name: 'Unit Converter',
        description: 'a unit conversion web app built with Django. supports conversion between units of length, weight, and temperature.',
        icon: 'fas fa-folder',
        difficulty: 'advanced',
        images: ['/static/images/projects/unit-converter-1.png', '/static/images/projects/unit-converter-2.png'],
        details: 'A unit conversion web app built with Django. Supports conversion between units of length, weight, and temperature with a clean, responsive UI and form validation.',
        github: 'https://github.com/yourname/unit-converter',
        liveDemo: 'https://yourname-unit-converter.herokuapp.com'
    },
    {
        id: 'personal-blog',
        name: 'Personal Blog System',
        description: 'a multi-user blogging platform where users can register, create, and manage their own articles. the platform includes a guest-facing section for browsing published articles and an authenticated user dashboard for content management.',
        icon: 'fas fa-folder',
        difficulty: 'advanced',
        images: ['/static/images/projects/blog-1.png', '/static/images/projects/blog-2.png', '/static/images/projects/blog-3.png'],
        details: 'A multi-user blogging platform built with Django. Users can register, authenticate, create articles, manage their content, and browse published articles. Features include user permissions, article filtering, and a professional admin dashboard.',
        github: 'https://github.com/yourname/personal-blog',
        liveDemo: 'https://yourname-blog.herokuapp.com'
    }
];

/* ======================
   RENDER PROJECTS
   ====================== */

let currentFilter = 'all';

function renderProjects(filter = 'all') {
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.difficulty === filter);

    projectsList.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-id="${project.id}" data-difficulty="${project.difficulty}">
            <div class="project-icon"><i class="${project.icon}"></i></div>
            <div class="project-name">${project.name}</div>
            <div class="project-desc">${project.description}</div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.id;
            const project = projects.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });
}

/* ======================
   PROJECT MODAL
   ====================== */

let currentImageIndex = 0;
let currentProject = null;

function openProjectModal(project) {
    currentProject = project;
    currentImageIndex = 0;
    
    const projectModal = document.getElementById('project-modal');
    if (!projectModal) {
        console.error('Project modal not found in HTML');
        return;
    }
    
    document.getElementById('modal-project-name').textContent = project.name;
    document.getElementById('modal-project-details').textContent = project.details;
    document.getElementById('modal-github').href = project.github;
    
    // Handle live demo link
    const liveDemoLink = document.getElementById('modal-live-demo');
    if (project.liveDemo) {
        liveDemoLink.style.display = 'flex';
        liveDemoLink.href = project.liveDemo;
    } else {
        liveDemoLink.style.display = 'none';
    }
    
    // Handle images
    if (project.images && project.images.length > 0) {
        updateModalImage();
        document.querySelector('.image-nav').style.display = 'flex';
    } else {
        document.querySelector('.image-nav').style.display = 'none';
    }
    
    projectModal.classList.add('active');
}

function updateModalImage() {
    const images = currentProject.images || [];
    if (images.length > 0) {
        document.getElementById('modal-project-img').src = images[currentImageIndex];
        document.getElementById('img-current').textContent = currentImageIndex + 1;
        document.getElementById('img-total').textContent = images.length;
    }
}

// Project modal image navigation
document.getElementById('img-prev')?.addEventListener('click', () => {
    if (currentProject && currentProject.images) {
        currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        updateModalImage();
    }
});

document.getElementById('img-next')?.addEventListener('click', () => {
    if (currentProject && currentProject.images) {
        currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        updateModalImage();
    }
});

document.getElementById('close-project-modal')?.addEventListener('click', () => {
    const projectModal = document.getElementById('project-modal');
    if (projectModal) {
        projectModal.classList.remove('active');
    }
});

document.getElementById('project-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
        e.target.classList.remove('active');
    }
});

/* ======================
   SKILLS DATA
   ====================== */

const skills = [
    { name: 'Python', context: 'CLI tools, OOP, data structures, scripting', icon: 'fab fa-python', type: 'docs' },
    { name: 'Django', context: 'Models, views, authentication, permissions, ORM, API endpoints', icon: 'fas fa-cube', type: 'docs' },
    { name: 'PostgreSQL', context: 'Enterprise systems, API design, complex queries, government platforms', icon: 'fas fa-database', type: 'excel' },
    { name: 'MySQL', context: 'Web systems, database architecture, POS & inventory systems', icon: 'fas fa-database', type: 'excel' },
    { name: 'PHP', context: 'Backend web development, shift & scheduling systems, web applications', icon: 'fab fa-php', type: 'docs' },
    { name: 'Bootstrap 5', context: 'UI components, responsive layouts, styling', icon: 'fab fa-bootstrap', type: 'docs' },
    { name: 'Git/GitHub', context: 'Feature branches, team collaboration, professional workflow', icon: 'fab fa-git-alt', type: 'docs' },
];  

/* ======================
   RENDER SKILLS
   ====================== */

function renderSkills() {
    skillsList.innerHTML = skills.map(skill => `
        <div class="skill-row">
            <div class="skill-name">
                <span class="skill-file-icon" data-type="${skill.type}">
                    ${skill.type === 'excel' ? '<i class="fas fa-file-excel"></i>' : '<i class="fas fa-file-word"></i>'}
                </span>
                ${skill.name}
            </div>
            <div class="skill-context">${skill.context}</div>
            <button class="skill-menu-btn">
                <i class="fas fa-ellipsis-v"></i>
            </button>
        </div>
    `).join('');
}

/* ======================
   DARK MODE TOGGLE
   ====================== */

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

/* ======================
   HOME SECTION DROPDOWNS
   ====================== */

document.querySelectorAll('.home-category-header').forEach(header => {
    const category = header.parentElement;
    const content = category.querySelector('.home-cards, .home-about');
    
    header.addEventListener('click', () => {
        if (content) {
            if (content.style.display === 'none') {
                content.style.display = content.classList.contains('home-about') ? 'block' : 'grid';
            } else {
                content.style.display = 'none';
            }
            header.classList.toggle('collapsed');
        }
    });
});

/* ======================
   PROJECT FILTERING
   ====================== */

const difficultySelect = document.getElementById('difficulty-filter');

difficultySelect?.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    renderProjects(currentFilter);
});

/* ======================
   INITIALIZATION
   ====================== */

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    
    // Set first section as active
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    if (contentSections.length > 0) {
        contentSections[0].classList.add('active');
    }
});

/* ======================
   INFO MODAL
   ====================== */

const infoButtons = document.querySelectorAll('.info-btn');
const infoModal = document.getElementById('info-modal');
const closeInfoModal = document.getElementById('close-info-modal');
const infoText = document.getElementById('info-text');
const infoModalCard = document.querySelector('.info-modal-card');

const infoMessages = {
    'view-options': "I mainly work with Python and Django because I'm interested in exploring AI and ML. It's a solid foundation for that kind of stuff.",
    'settings': "I've always enjoyed doing backend development. I like dealing with logic—it's straightforward and satisfying.",
    'help': "This portfolio was inspired by Google Drive's design. Hopefully you can see the resemblance!"
};

infoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const infoKey = btn.dataset.info;
        infoText.textContent = infoMessages[infoKey];
        infoModal.classList.add('active');
        
        // Position modal to the left of the clicked icon
        const rect = btn.getBoundingClientRect();
        infoModalCard.style.top = rect.bottom + 8 + 'px';
        infoModalCard.style.right = window.innerWidth - rect.left + 8 + 'px';
    });
});

closeInfoModal.addEventListener('click', () => {
    infoModal.classList.remove('active');
});

// Close modal when clicking outside
infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        infoModal.classList.remove('active');
    }
});