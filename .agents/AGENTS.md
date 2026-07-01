# Auto-Deployment Rule

Whenever the agent makes, edits, or updates files in this workspace, it MUST automatically run the deployment process to push these changes to GitHub.

## Deployment Steps
After completing edits:
1. Add changes: `git add .`
2. Commit changes: `git commit -m "Auto-deploy: <brief description of what was changed>"`
3. Push changes: `git push origin main`

This guarantees that any local changes made are immediately reflected on the GitHub Pages website.
