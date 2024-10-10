
## Branch Types and their Purpose

- `master`:  Holds the production-ready code.
- `develop`: This branch is used for development. Features and fixes are integrated here.
- `feature`: These branches are used to develop new features. They branch off from `develop`. Naming convention: `feature/feature-name`.
- `hotfix`: Used to quickly patch production code. It branches off from `master` to fix critical issues in production and is merged back into both `master`. Naming convention: `hotfix/hotfix-name`.

# Basic Git Commands

`git init` initializes a new Git repository y.
`git clone <repository-url>` clones an existing Git repository.
`git status` displays the state of the working directory.
`git add <file>` adds changes from the working directory to the staging area.
`git commit -m "Commit message"` saves the staged changes to the local repository with a descriptive message.
`git push origin <branch-name>` uploads local repository content to a remote repository.
`git pull origin <branch-name>` fetches and integrates changes from a remote repository to the local working directory.
`git branch` lists branches. To create a new branch, use `git branch <branch-name>`.
`git checkout <branch-name>` switches between branches. To create and switch to a new branch, use `git checkout -b <branch-name>`.
`git merge <branch-name>` combines changes from one branch into another.
`git stash` temporarily stores modified files and cleans the working directory. Retrieve stashed changes using `git stash apply`.
