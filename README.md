# Real Project Overview

We're being contracted for **PART** of a new web app. The client company is an used car dealership, and our point of contact within it ("our client") does have full authority over this project, nor have all technical details at hand.

What I've gathered so far has been:
- Someone is already redesigning their site, and they will provide most functionality/forms for customers to do a loan application
- We have to wait until that site is done to actually work on our side, since there are a lot of knowledge gaps as to what will ACTUALLY be there, and we want to make sure we don't have redo work of what they already have.

## Must Haves
- User creation based on First+Last Name, DOB, and Drivers License # (so no emails for now)
- Tracking functionality: `we would like [our customers] to see ... [and] follow up with their loan process online`
- She also wants that `new site redirect[s] to our current [domain]`. I'm under the impression that Wordpress currently handles their domain routing. I've asked for the Wordpress account details, but to no avail - We'll need to figure it out once we're given the built site.
- She `would also like to see places for ads to be placed around the border`

## Nice to Have
- `A page [or way] that allows customers to ... send in requests, questions, and comments` - **NEED TO DEFINE:** what's a request?




# Coding Guidelines

*Links DO NOT open a new tab for you*

### General
- **SPACING**: A 'tab' in all file formats (html, css, js) should be TWO (2) SPACES. There's ways to automatically configure this in Sublime (and pretty sure other editors), and to convert tabs into spaces (i.e. when you hit 'tab', it'll actually write two spaces). People how use spaces over tabs make MORE MONEY <sup>[[1]](#note1)</sup><sup>[[2]](#note2)</sup>
- No globals in [production](#vocab). Only use them for debugging
- Write **descriptive** variable and function names (< 50 characters), so your code speaks for itself. Comments are _lies waiting to happen_ <sup>[[3]](note3)</sup>, therefore only use them to document high level logic, or external APIs functionality.
- Make your code 'maintainable' and modular, meaning it'll be easy to extend with as little changes as possible (meaning 1, **AT MOST 2** changes), and that these changes don't break something else
    - Eg. Don't hard code or rely in constant sizes (lengths/widths) for 2D Arrays
    - *More examples in the works*


*Below sub-sections are in the works*

### Heroku
- Add an 'env' file with the environment variables available in Heroku so process.env.VARIABLE_NAME works while in [development](#vocab)

### JavaScript, bad vs better
- JS Specific examples of bad vs better code (*need **more***)
    ``` javascript
    // bad
    var config,
        longer_variable;

    // better
    var config;
    var longer_variable;
    ```

### CSS/Styling
- Avoid styling/CSS in HTML files. If you need it, keep it to only one property
- Having issues with placing/moving things around the page? Try out CSS Grids:
    - [Slides](https://www.slideshare.net/mor10/css-grid-changes-everything-about-web-layouts-wordcamp-europe-2017/22)
    - [Entire Video, watch at 1.5x](https://www.youtube.com/watch?v=7kVeCqQCxlk)
    - [To the points](https://youtu.be/7kVeCqQCxlk?t=337)
    - [Actual documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    - [Browser Support](http://caniuse.com/#feat=css-grid)

## TO DECIDE:
- Naming convention: CamelCase vs name_with_underscores
- Comments: ```// vs /**/```, but tbh the HATED ones are the html ones...
- Chaining of functions in JavaScript, specially for dreaded promises...
    ``` javascript
    Listings.getAll().then(
      function(response) {
        $scope.loading = false;
        $scope.listings = response.data;
      },
      function(error) {
        $scope.loading = false;
        $scope.error = 'Unable to retrieve listings!'
        console.log(error);
      }
    );
    ```


## TO DO: Write linter to enforce this

## Vocab
- Production => Customer Facing Environment, i.e. REAL Application
- Development => 'Plz work'/Stitching everything together Environment
- Sources:
    + <a id="note1">1</a>: [Spaces Article](https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/)
    + <a id="note2">2</a>: [Salaries Chart](http://evelinag.com/blog/2017/06-20-stackoverflow-tabs-spaces-and-salary/salary_distribution_junior-1.png)
    + <a id="note3">3</a>: [Comments Article](http://codelikethis.tumblr.com/post/35280704192/comment-like-this)
