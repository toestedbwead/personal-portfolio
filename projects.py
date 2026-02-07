"""
Portfolio projects data.
This is the data structure for all showcase projects.
Fill in the [PLACEHOLDER] sections with actual content.
"""

PROJECTS = [
    {
        'id': 'task-tracker',
        'name': 'Task Tracker',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/task-tracker.jpg',
    },
    {
        'id': 'github-user-activity',
        'name': 'GitHub User Activity',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/github-user-activity.jpg',
    },
    {
        'id': 'expense-tracker',
        'name': 'Expense Tracker',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/expense-tracker.jpg',
    },
    {
        'id': 'weather-cli',
        'name': 'Weather CLI',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/weather-cli.jpg',
    },
    {
        'id': 'number-guessing-game',
        'name': 'Number Guessing Game',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/number-guessing-game.jpg',
    },
    {
        'id': 'unit-converter',
        'name': 'Unit Converter',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/unit-converter.jpg',
    },
    {
        'id': 'personal-blog',
        'name': 'Personal Blog System',
        'short_description': '[SHORT_DESC_1_2_LINES]',
        'full_description': '[FULL_DESC_LONGER_VERSION]',
        'tech_stack': ['[TECH1]', '[TECH2]', '[TECH3]'],
        'github_url': '[GITHUB_LINK]',
        'live_demo_url': '[LIVE_DEMO_LINK_OR_NONE]',
        'image_url': '/static/images/projects/personal-blog.jpg',
    },
]


def get_project_by_id(project_id):
    """Get a single project by ID."""
    for project in PROJECTS:
        if project['id'] == project_id:
            return project
    return None
