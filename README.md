# Lerna react mono repo _(One repo to rule them all)_
React next.js app  built with different sub projects using lerna monorepo

This is what you see:
```
master-app (next.js app)
|-page-home (page)
|-page-about (page)
```

This is what it really is:
```
root
|-master-app (next.js app)
|-page-home (create-react-app)
|-page-about (next.js app)
|-components-bundle (common react components bundle)
```

## How it works?

The idea is simple, you have different type of React webapp projects and you want to integrate them all in a single one.

> In this project I've used for example one `create-react-app`(page.home) and one `next.js` (page-about).

For every sub-project you have, you export all of it as a single React component. Either babel or rollup are used in this repo to bundle up plain components or even a full application with nested dependencies.

Once you have bundles for every app, you are now able to make use of their exposed element in any of the sibling sub-projects. You like:

```
# page component from a next.js-app (master-app sub project)
...
import PageHome from 'page-home';

const Home = () => (
  <Fragment>
    <Nav />
    <PageHome/>
  </Fragment>
)

export default Home
...
```
Here we are importing the `PageHome` component from one of the sub-projects "`page-home`" in one of the other sub-projects `master-app`.

## The Lerna key feature
Lerna is so cool that it's able to detect if one of the listed dependencies matches one of the sub-projects by package name & version. If it does not get a match he'll try to fetch it from the registry. This means that people can keep creating versions in their own sub-project just like an independent repo and use either the local or published modules when needed.


## Setup
1. Install all dependencies with Lerna! _(not npm install)_
    ```
    npm run install:all
    ```
    Lerna will install all dependencies for all of the sub-repos. If they include similar dependencies, lerna will take one to the root level `node_modules` so they only make use on a single module and not to have it in every sub-repo `node_modules` folder. _(Save space, save time!)_

2. Compile the sub-repos to exportable modules
    ```
    npm run bundle:all
    ```

3. Fix react module duplicated dependency.
    ```
    npm run fix-react-modules
    ```
    Even if lerna takes care of unifying dependencies for your projects, there might be sometimes that more than one `react/react-dom` modules are being used. In this specific project this specific behavior happens, and it causes an issue when trying to use React Hooks as they get in conflict once they detect the app is using different react instances.

    This script fixes that by linkin the inner modules from the sub-projects to the one that lerna is keeping in the root of the project (_Once that lerna bootstrap --hoist was called_)

4. Run!
    ```
    npm run start
    ```
    At the end we wanted to build a single next.js app containing every sub-react-app as a single page. This command will start the `next dev` command of that app.

5. Enjoy!  
    Toggle between:
    * Home page - It is a `create-react-app`
    * About page - It is a `next.js app`

