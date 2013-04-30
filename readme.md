SMOKE.JS - 0.1.2
------------------

Notify or get approval from your users quickly and with style. This alert system uses css animations and background (so there are no images or js animation code...so it's really lightweight).

It's trivial to implement and really easy to change the style. 

Take a look at the demo: [http://smoke-js.com/](http://smoke-js.com/)

Also, we've made some cool themes for you: [http://github.com/jyoungblood/smoke-themes/](http://github.com/jyoungblood/smoke-themes/)



NEW IN 0.1.2
------------------
- AMD module
- new .quiz() method
- updated (and v v smooth) default style
- moved themes to their own repo
- cleaned up the repo so it's just the css/js files (all demos/docs: [http://smoke-js.com/](http://smoke-js.com/))




Supported Browsers
------------------
- Chrome
- Firefox
- Safari
- IE 6+ (usable, no animation [who cares], visual IE6 support [transparencies, etc] is up to you)
- iOS Mobile Safari

(widespread mobile support [android, blackberry, windows] uncertain (I mean, it probably works, but I can't really say that))




Current User Notices
---------------------
- If you're using custom themes, you might want to check yourself. The markup/structure hasn't changed, but the base styles are different from the way they've always been, so just think about that for a while.


Bugs/Contributing
-----------------
- If you find a bug or have a cool idea for a feature, fork this repo and add a pull request. Your changes will probably get added as long as they're legit.
- If you've made any cool themes, add them to [http://github.com/jyoungblood/smoke-themes/](http://github.com/jyoungblood/smoke-themes/)



Planned Updates
---------------
- Uniform callback implementation for everything (it's currently being done a little differently for .prompt/.confirm() and .alert())
	- Callbacks might be handy for .signal(), too? This whole aspect could be a bit more elegant.
- Stop all the click/esc/enter listeners once a dialog is closed.
- Helpful code comments.
- This thing used to pass JSLint, but it doesn't now. Whatever...




Thanks, dudes!
--------------
- Hugo Diaz
- Michal Zielenkiewicz
- Leon Fedotov
- Lautaro Orazi
- Leonardo Souza
- Carlos Brito Lage






License
--------

(MIT License)

Copyright (c) 2011-2013 Jonathan Youngblood &lt;jonathan.youngblood@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.