## Jekyll + React

A site that is generated by Jekyll but includes [React Plotly](https://plotly.com/javascript/react/) components.

Rendered at https://dellaert.github.io/gh-pages-plotly/

### Setup

1. Clone the repository.
2. In the root directory run

    ```shell
    yarn        # installs all the dependencies
    yarn build  # build and bundle the code using webpack
    yarn start  # start the jekyll server
    ```

**NOTE** If you're asked to pick a version of `babel-core`, please pick any version `>7.0.0`.