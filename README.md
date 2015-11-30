# CoverWallet Frontend Developer Coding Exercise

This is the source code for the coding exercise for the [CoverWallet software developer position](http://www.coverwallet.com/jobs/frontend-developer).

A working demo can be found [here](https://github.com/N8-B).

___

### Coding Exercise Notes

**Development Tools and Tech:**
- **Webpack** and **Babel** used for compiling, bundling and building JavaScript, CSS/SASS, fonts and images.
- **React** used for client-side views.
- All styles are written in **Sass** with the Bourbon and Neat libraries.
- Code written in Atom.io IDE alongside Chrome and the Chrome Developer Tools.
- Site mock-up is **responsive** and has been **tested in IE, Chrome and FF**.

**Hidden Message:**
HTML comment from the header of the software developer job opening page. Nice one!

`<!-- ### -->` <br />
`<!-- hey dude, tell us if you like what you see here: jobs@coverwallet.com ;) -->` <br />
`<!-- ### -->`

**TODO:**
- Add **React Router** and hook up routing for the dashboard section views.
- Revisit/refactor grid for the section content views. Perhaps the use of `ul/li` for the notification section layout would be simpler (i.e. less ugly).
- Investigate why background images referenced in CSS sometimes work and sometimes result in a 404. Might have to do with source maps and webpack-dev-server.

### Installation

To run this on your machine, clone or download this repo, cd into the root of the directory and run `npm install`.

Once all of the dependencies have been installed, run `npm start`. This will kick off Webpack and fire up the dev-server on `localhost:8080`.

If you have any questions, feel free to [get in touch](https://twitter.com/n8bn8).

_Thanks!_
