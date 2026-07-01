# Auto-Deployment Rule

Whenever the agent makes, edits, or updates files in this workspace, it MUST automatically run the build and deploy process to push these changes to GitHub.

## Deployment Steps
After completing edits, execute the following commands to update both the source code and the live website:

1. **Commit and Push Source Code**:
   - `git add .`
   - `git commit -m "Auto-deploy: <brief description of what was changed>"`
   - `git push origin main:source --force` (sends React source code to the 'source' branch)

2. **Build and Deploy Built Website**:
   - Run build: `npm run build`
   - Initialize git in dist directory if not already initialized:
     - Check if `.git` folder exists in `dist/`. If not:
       - Run `git init` in the `dist/` directory.
       - Run `git remote add origin https://leandroyata07:<YOUR_TOKEN>@github.com/leandroyata07/atividadesufrb.git` (substituting the token during setup)
   - Add build files: `git add .` (inside `dist/`)
   - Commit build: `git commit -m "Auto-deploy: Update compiled built website"` (inside `dist/`)
   - Force push build: `git push -f origin HEAD:main` (inside `dist/`)
