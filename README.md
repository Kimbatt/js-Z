# js-Z
Javascript obfuscator, using the power of zalgo


Try it here: https://kimbatt.github.io/js-Z

With this tool, you can make your javascript code pretty unreadable.  
See demo page here: https://kimbatt.github.io/js-Z/demopage

Disclaimer: this tool is not really a powerful obfuscator; with the right tools, the original code can be easily recovered (it works pretty well against online deobfuscators though).  
So if you really want to hide your code, you should run it through a *real* obfuscator first (like [this one](https://github.com/javascript-obfuscator/javascript-obfuscator)), then put its output in here.

### Using as a library
Add [lib.ts](lib.ts) to your project (or [dist/lib.js](dist/lib.js) if you are using javascript), then call the `Obfuscate` function.  
See comments at the `Obfuscate` function and the `ObfuscationOptions` interface in [lib.ts](lib.ts) for more information.

### License
[WTFPL](LICENSE.txt)
