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
