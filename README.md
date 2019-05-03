# Apperrific

A simple static site project

Should consist of:
  - homepage (index.html)
  - stylesheet (style.css)


## How to Develop

```bash
$ git clone git@github.com:thedevlabs/apperrific.git
$ cd apperrific
$ git status
$ git checkout -b someFeatureBranch
$ git push --set-upstream origin someFeatureBranch
```

Code. Commit. Pull Requests. Rinse. Repeat.

## Deploying to Heroku

Once the repo has the homepage and stylesheet on the main branch, meaning all pull requests are merged in. CD into the project root and deploy the master branch.

```bash
$ cd [project repo root directory]
$ git checkout master 
$ heroku apps
$ heroku create
$ git remote -v
$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static
$ git push heroku master
```

https://[your custom subdomain here].herokuapp.com/

### Resources

We are using the Github workflow, illustrated here:

https://guides.github.com/introduction/flow/


For more review and details, consider using the new Git lab courses:

  https://lab.github.com

- Intro to Github

  https://lab.github.com/githubtraining/introduction-to-github

- Create a release based workflow

  https://lab.github.com/githubtraining/create-a-release-based-workflow
