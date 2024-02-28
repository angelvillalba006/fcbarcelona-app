# Git Workflow Guide

## Branch Naming Conventions

Branch names should provide clear information about the purpose and type of changes. Follow the format: `FE/BE/type/task-name`

### Components of a Branch Name:

1. **FE/BE (Frontend/Backend):**

   - Indicate whether the changes are related to the frontend (`FE`) or backend (`BE`) of the application.

2. **Type:**

   - Specify the type of changes using one of the following:
     - `feature`: For introducing new features.
     - `bugfix`: For fixing bugs or issues.
     - `hotfix`: For addressing critical issues in production.
     - `release`: For preparing a new release.

3. **Task Name:**
   - Include a concise and descriptive task name that summarizes the purpose of the changes. Use hyphens or underscores for spaces.

### Examples:

- **Feature Branch:**

  - `FE/feature/user-authentication`
  - `BE/feature/database-migration`

- **Release Branch:**
  - `FE/release/v1.0`
  - `BE/release/v2.1`

## Git Commands

### Creating and Switching to a Branch

```bash
# Create a new branch
git checkout -b FE/feature/user-authentication

# Switch to an existing branch
git checkout FE/feature/user-authentication
```

### Pulling Changes from the Remote Repository

```bash
# Pull changes from remote repo
git pull origin main
```

### Merging Branches

```bash
# Switch to the target branch (e.g., develop)
git checkout develop

# Update the main branch with changes from the remote repository
git pull origin main

# Merge the feature branch into develop
git merge FE/feature/user-authentication

# Push the changes to the remote repository
git push origin develop
```

### Deleting a Branch

```bash
# Delete a local branch
git branch -d FE/feature/user-authentication

# Delete a remote branch
git push origin --delete FE/feature/user-authentication
```

## Pull Requests

1. Create a branch and add your changes.
2. Make a Pull Request from your branch to the develop branch.
3. Discuss and review changes (with team members).
4. Perform the merge when the Pull Request is approved.
