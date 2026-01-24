# Cay del Junco

## Setup

First, clone the project:

```sh
git clone REMOTE_PROJECT_HOST
```

## Running the project

You will need to start a local http server since we are currently loading `lit-html` from a CDN:

```sh
python3 -m http.server 8080
```

Navigating to http://localhost:8080/ should load the `index.html` file. You can then start making changes to the site as needed, and refresh the page to see those changes reflected locally.

## Deployment

This is really simple now :) Just commit your changes and push them to Github and the updates should be live within a couple minutes.

---

### Cay notes to self

- Where the code is that I should actually edit:
  - index.html : contains the nav bar and, on desktop, the contact links.
  - src/scripts/pages: contains .js files for each page
    - On mobile, contact items are in About.js
  - src/styles: contains styles