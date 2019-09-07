# Clara del Junco

## Setup

First, clone the project:

```sh
git clone REMOTE_PROJECT_HOST
```

I've used [Yarn](https://yarnpkg.com/lang/en/) - a JavaScript package manager - to install a few dependencies for this project. You can find download instructions for Yarn based on your OS [here](https://yarnpkg.com/en/docs/install#mac-stable).

Once you've installed Yarn, cd into the project directory and install the dependencies. In your terminal, just run:

```sh
yarn
```

Once everything has finished downloading, you can run the project locally. 

```sh
yarn watch
```

It should open the project automatically in your browser once everything is up and running. If it doesn't, just navigate to `localhost:8080`.

When you have the project running, you will be able to make changes to the CSS or JS files and see those changes reflected without having to manually refresh the page. Wooo!

## Deployment

Since I'm transferring ownership of the repo to you, you might need to set up GitHub pages all over again. I know you've done this before, but this [guide](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) is super helpful if anything is unclear.

I believe GH pages will just use whatever is in the `index.html` file at the root of the project as the landing page. You shouldn't have to do this initally, but if you want to make/publish any changes to any of the pages, just run:

```sh
yarn build
```

This will regenerate the `bundle.js` and `main.css` files in the `public` directory (both of these are included in our `index.html` file). 

After that, you can just push the new files to the `master` branch of the repo and everything should be live on the site shortly.

## Dependencies, etc.

All of the dependencies for this project, as well as the scripts to run it locally and build for production, can be found in the `package.json` file. I just wanted to go over some of them quickly to give you some general context on why certain packages were included and what they do.

First of all, you will notice that the packages are split between `devDependencies` and `dependencies` (there's only one for this project). As the name suggests, `devDependencies` are generally either used when building the project for local development, or play some role in transforming/packaing the code when it's time to deploy. They are not included in the code that gets deployed to GitHub pages. 

There are a few packages/groups of packages I want to highlight specifically:

`live-server` - this is used to server the project locally when you run `yarn watch`.

--

[`webpack`](https://webpack.js.org/) - this is a super powerful JavaScript build tool. For this project, it is basically taking all of our JavaScript code and packaging it into a single `bundle.js` file (which we are including at the bottom of our `index.html` file). It is also transforming all of our `.scss` files and packaging them into a `main.css` file, which is included in the `<head>` of `index.html` (more on this later).

To get a better sense of what is going on here (or perhaps just to get a bit more confused...), you can take a look at the `webpack.config.js` file. Here we are doing a few things:

`entry` - Passing webpack and array that specifies where it should look to start building our `bundle.js` and `main.css` files, respectively.

`output` - Telling webpack where to put those files once they have been built, and what to call our bundled JavaScript file.

`module` - Giving webpack more specific instructions on how to handle different types of files it may encounter while building those bundled files. Webpack uses different [loaders](https://webpack.js.org/loaders/) to process each type of file.

--

`@babel/core`, `@babel/preset-env`, `babel-loader` - [Babel](https://babeljs.io/) is a JavaScript compiler/transpiler that takes any flavour of JavaScript code and transforms it in such a way that it can be run in any browser. JavaScript has a long, complicated history that has made this necessary for most projects these days. This [post](https://mgadams.com/modern-javascript-development-part-1-d271f3790c1c?gi=87113280105f) actually does a pretty good job of summarizing some of this history and explaining why this transpilation step is now necessary, if you're curious. It's all very silly to be honest.

--

`autoprefixer`, `css-loader`, `cssnano`, `mini-css-extract-plugin`, `node-sass`, `optimize-css-assets-webpack-plugin`, `postcss-loader`, `postcss-preset-env`, `postcss-sass`, `sass-loader`, `style-loader`

This massive group of packages is used to:

1. Take `.scss` files and compile them to `.css` files. I decided to use [Sass](https://sass-lang.com/) instead of Vanilla CSS because it's cleaner/faster to write, and easier to split your styling into smaller, more specific files (in this case `_navbar.scss`, `_page.scss`, and `_variables.scss`, which are all combined in `index.scss`). It allows for nested style rules and using variables for frequently repeated values, so something like this:

```scss
.page {
  display: flex;

  &--about {
    background-color: $color-blue;
  }
}
```

will be transformed into:

``css
.page--about {
  display: flex;
  background-color: #2000FF;
}
```

You can also totally write vanilla CSS in a `.scss` file and it will parse it properly - it's really just a matter of personal preference.

2. Autoprefix all of our styling rules so that our styles will work across different browsers. Specifically, the `autoprefixer` package saves us the trouble of always having to write things like:

```css
display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
display: -ms-flexbox;  /* TWEENER - IE 10 */
display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
display: flex;
```

where the different prefixes are targeting specific groups of browsers.

3. Transforming and optimizing our CSS assets so that they will play nicely with webpack. Basically webpack was initally built to only support JavaScript, so we need additional loaders to tell it how to handle `.scss` and `.css` files. Additionally, we are using `optimize-css-assets-webpack-plugin` to ["minify"](https://developers.google.com/web/tools/lighthouse/audits/minify-css) our CSS in order to reduce the size of our CSS files.

--

Finally, [`lit-html`](https://github.com/polymer/lit-html) is our sole `dependency`, meaning it actually becomes part of the production `bundle.js` file that gets deployed to GitHub pages. It's just a small JavaScript template engine. Using JavaScript templates as opposed to writing different `.html` files for our various pages makes it so that we can do all of our routing on the front end. More specifically, it means that all the assets for the website are loaded at once when you first load the page, so when you are subsequently navigating between the `About` and `Academics` page, you are actually just switching between JavaScript templates, rather than making a request to a server to fetch a new `.html` file. Overall it makes the website feel a little faster, as you are only ever making that initial HTTP request and each template loads almost instantly.

For more details on how switching between pages works, you can take a look at the code in `scripts/utils/router.js`.

--

Ok, so was all of this necessary / was this the simplest way to do things? Definitely not. But I had fun doing it and playing around with these tools, some of which I have used for work and some of which were totally new to me. It should be set up in such a way that you can easily build on top of it - either by adding more pages, changing text and images, or even doing more complex things in the future if you like.

Hopefully you can have some fun editing it, or maybe this has been overly complicated enough to put you off of JavaScript and front end development forever 😱. If so, that is understandable & I'm sorry!!