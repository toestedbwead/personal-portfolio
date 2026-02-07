"""
Views for the portfolio app.
"""

from django.shortcuts import render
import projects
import forms


def index(request):
    """Main portfolio page with all sections."""
    context = {
        'projects': projects.PROJECTS,
    }
    return render(request, 'index.html', context)


def project_detail(request, project_id):
    """Show detailed view of a single project."""
    project = projects.get_project_by_id(project_id)
    if not project:
        return render(request, '404.html', status=404)
    
    context = {
        'project': project,
    }
    return render(request, 'project_detail.html', context)