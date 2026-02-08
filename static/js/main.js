/* ======================
   DOM ELEMENTS
   ====================== */

const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
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
   DROPDOWN TOGGLES
   ====================== */

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.style.display = targetElement.style.display === 'none' ? 'block' : 'none';
            btn.classList.toggle('collapsed');
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
        icon: '📋'
    },
    {
        id: 'github-user-activity',
        name: 'GitHub User Activity',
        description: "a python command-line interface tool to fetch and display a Github's user recent activity directly in terminal.",
        icon: '🐙'
    },
    {
        id: 'expense-tracker',
        name: 'Expense Tracker',
        description: 'a command-line expense tracker built with Python to manage personal finances. track, update, and analyze expenses with simple commands.',
        icon: '💰'
    },
    {
        id: 'weather-cli',
        name: 'Weather CLI',
        description: 'a command-line application to fetch and display current weather information for any city using the OpenWeatherMap API',
        icon: '🌦️'
    },
    {
        id: 'number-guessing-game',
        name: 'Number Guessing Game',
        description: 'a cli-based number guessing game built with python using professional practices including OOP, modular structure, and git workflows.',
        icon: '🎮'
    },
    {
        id: 'unit-converter',
        name: 'Unit Converter',
        description: 'a unit conversion web app built with Django. supports conversion between units of length, weight, and temperature.',
        icon: '⚙️'
    },
    {
        id: 'personal-blog',
        name: 'Personal Blog System',
        description: 'a multi-user blogging platform where users can register, create, and manage their own articles. the platform includes a guest-facing section for browsing published articles and an authenticated user dashboard for content management.',
        icon: '📝'
    }
];

/* ======================
   RENDER PROJECTS
   ====================== */

function renderProjects() {
    projectsList.innerHTML = projects.map(project => `
        <div class="project-card" data-id="${project.id}">
            <div class="project-icon">${project.icon}</div>
            <div class="project-name">${project.name}</div>
            <div class="project-desc">${project.description}</div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.id;
            console.log('Clicked project:', projectId);
            // TODO: Navigate to project detail page or open modal
        });
    });
}

/* ======================
   SKILLS DATA
   ====================== */

const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Django', icon: 'fab fa-django' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'SQLite', icon: 'fas fa-database' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Linux', icon: 'fab fa-linux' },
];

/* ======================
   RENDER SKILLS
   ====================== */

function renderSkills() {
    skillsList.innerHTML = skills.map(skill => `
        <div class="skill-item" title="${skill.name}">
            <i class="${skill.icon}"></i>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');
}

/* ======================
   INITIALIZATION
   ====================== */

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    
    // Set first section as active
    navItems[0].classList.add('active');
    contentSections[0].classList.add('active');
});