# Personal Portfolio Website

A clean, professional Django portfolio showcasing backend development projects.

## Project Structure

```
portfolio_project/
├── manage.py                 # Django management utility
├── settings.py               # Django settings
├── urls.py                   # URL routing
├── wsgi.py                   # WSGI entry point
├── forms.py                  # Contact form
├── views.py                  # View logic
├── projects.py               # Project data (fill in placeholders here)
├── static/
│   ├── css/
│   │   └── style.css        # Custom styling
│   └── images/
│       └── projects/        # Project screenshots (add your images here)
├── templates/
│   ├── base.html            # Base template
│   ├── home.html            # Home/landing page
│   ├── projects_list.html   # Projects list view
│   ├── project_detail.html  # Project detail view
│   ├── skills.html          # Skills/tech stack page
│   ├── contact.html         # Contact form
│   ├── contact_success.html # Success message
│   └── 404.html             # 404 error page
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## Setup Instructions

### 1. Create and Activate Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run Migrations
```bash
python manage.py migrate
```

### 4. Create Superuser (optional, for Django admin)
```bash
python manage.py createsuperuser
```

### 5. Start Development Server
```bash
python manage.py runserver
```

Visit `http://localhost:8000` in your browser.

## Customization

### Add Your Project Data

Edit `projects.py` and replace all `[PLACEHOLDER]` values with your actual project information:

```python
{
    'id': 'project-id',
    'name': 'Project Name',
    'short_description': 'Brief 1-2 line description',
    'full_description': 'Longer description of what the project does',
    'tech_stack': ['Python', 'Django', 'PostgreSQL'],
    'github_url': 'https://github.com/yourusername/repo',
    'live_demo_url': 'https://your-project-url.com',
    'image_url': '/static/images/projects/project-name.jpg',
}
```

### Add Project Images

1. Create a `static/images/projects/` directory if it doesn't exist
2. Add your project screenshots as `.jpg` or `.png` files
3. Reference them in `projects.py` (e.g., `/static/images/projects/task-tracker.jpg`)

### Customize Styling

Edit `static/css/style.css` to change colors, fonts, and layout. The site uses Bootstrap 5 with custom CSS on top.

### Update Skills

Edit the `skills()` view in `views.py` to customize the skills section with your actual technologies.

### Setup Contact Form

The contact form is currently set up to show a success message but doesn't send emails yet. To enable email functionality:

**Option 1: Send Emails (Simple)**
```python
from django.core.mail import send_mail

# In views.py contact() function:
send_mail(
    subject=form.cleaned_data['subject'],
    message=form.cleaned_data['message'],
    from_email=form.cleaned_data['email'],
    recipient_list=['your-email@example.com'],
)
```

**Option 2: Use Formspree (No Backend Setup)**
- Replace the form with a Formspree form (one-line change)
- This handles emails without server configuration

**Option 3: Use a Service (Production)**
- Configure an email provider (SendGrid, Mailgun, etc.)
- Update Django settings with email credentials

## Pages

- **Home** (`/`) - Landing page with intro and highlights
- **Projects** (`/projects/`) - List of all projects with clickable cards
- **Project Detail** (`/projects/<id>/`) - Full details, screenshots, links
- **Skills** (`/skills/`) - Tech stack with icons
- **Contact** (`/contact/`) - Contact form

## Features

✅ Responsive design (mobile-first)
✅ Clean, professional styling
✅ Easy to customize project data
✅ Contact form with validation
✅ Bootstrap 5 + custom CSS
✅ Font Awesome icons
✅ Proper Django structure

## Deployment

### To Heroku, Railway, or Similar:

1. Set `DEBUG = False` in `settings.py`
2. Add your domain to `ALLOWED_HOSTS`
3. Generate a secure `SECRET_KEY`
4. Use PostgreSQL in production (not SQLite)
5. Collect static files: `python manage.py collectstatic`
6. Deploy according to your hosting provider's docs

## Next Steps

1. Fill in all `[PLACEHOLDER]` values in `projects.py`
2. Add project images to `static/images/projects/`
3. Customize styling in `static/css/style.css`
4. Test all pages locally
5. Deploy to your hosting provider
6. Set up custom domain (optional)

## Notes

- This is a lightweight portfolio focused on showcasing backend work
- No fancy animations or complex frontend—just clean, professional design
- Use Django as a backend developer would (proper structure, forms, etc.)
- Easy to extend with more features later
