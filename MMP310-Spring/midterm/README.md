# Midterm
## Multimedia Programming II (MMP 310)

Spring 2017

Instructor: Roy Vanegas

## Description
The midterm is designed to get you to practice working with JavaScript’s object notation, or JSON, specifically with padded JSON, or JSONP.

Your task is to populate `index.html` with content from the files `nav.json` and `content.json`, both of which are in the `data` folder, and also by using some basic scripting techniques in the `footer` element.

## Rules
* **Do not** alter the HTML.
* **Do not** alter `nav.json` in the `data` folder.
* **Do not** alter `content.json` in the `data` folder.
* Write all your JavaScript in `js/app.js`.
* Use JavaScript and Font Awesome to populate the `footer` element with icons for Facebook, Twitter, Instagram, and YouTube. (The Font Awesome library is already included in the `head` of `index.html`.)
* The `nav` should be populated with an unordered list, and each item in the list should contain an anchor. The content of the anchor should be the value to the `label` property in `nav.json`, and the anchor’s link should the value to the `url` property.
* Compile the CSS from the root folder of this project with the following command:

      sass --unix-newlines --sourcemap=none --style expanded --watch sass/main.scss:css/main.css

See the images in the `screenshots` folder for examples of what the final output should look like.

## Due
This assignment is due by 11:59 PM on Tuesday, 25 April 2017.

## Submitting
Create a pull request (read more [here](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)) from your current branch into the `master` branch of the [assignments repo](https://github.com/code-warrior/mmp310-assignments).
