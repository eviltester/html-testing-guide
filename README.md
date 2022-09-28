# HTML Testing Guide

A WIP Notes and reference information on HTML Web Testing.


## Repo Setup

This is using a slightly non-standard config for a Docusaurus project just to keep everything simple for me.

Instead of deploying from branches and using the docusaurus deploy.

I amended the npm deploy job to copy the docusaurus build folder into the root `docs` folder so that gitpages can serve up the content.

## To Contribute

- clone the repo
- `cd src`
- `npm install`
- `npm run start`
- see the pages on the local server http://localhost:3000/
- edit files and see changes in browser
- submit pull requests
- don't add files in the public docs folder to any pull requests

## To Deploy

- `npm run build`
- `npm run deploy`
    - this will copy the build folder into the root `docs` folder for gitpages to use



