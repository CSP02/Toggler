# Toggler
A package(atleast the code) to toggle properties of tags.

> I mostly use toggle classes while making a switch theme method, button interaction etc.

# New feature:

**Toggle images too:**

- Now toggle images with an ease.

**Syntax:**

```js 
InteractionCount();
toggleImage('elementID', 'fromImage', 'toImage');
```

**Note: To make it work you** ***must*** **use `InteractionCount()` method. Notice that in `InteractionCount()` method 'I' and 'C' are capital** 
# How to download:

**Downloading:**

- Click on the code dropdown and click 'Download zip' to download.

**Cloning using cmd(only for contribution purpose)**

- To clone the repo click on the code dropdown and there you can copy the link.
- Then open cmd in your pc and type

```
$ git clone url
```
- Replace 'url' with the copied link and click enter.
- Repository will be cloned and you can use Toggler.js in your code.
- If you want to contribute changes can be pushed(check the code before pushing to origin or push to 'other' branch).

**Or else:**
- Just copy paste the code.

**Note: While using Toggler.js please make sure you have a backup because if something goes wrong and you pushed the changes then things will become tedious to handle.**

# How to use:

- You can clone the project or just download the ToggleClass.js. (Will release a npm package later)
- include this script before including your main script.

for example:
```html
<script src = "Toggler.js"></script>
<script src = "myscript.js"></script>
```
- After this you can use `toggleClass(elementId, fromClass, toClass)` method to toggle between classes `toggleImage(elementID, fromImage, toImage)` to toggle between images in your main script.

**Note: To make it work you** ***must*** **use `InteractionCount()` method. Notice that in `InteractionCount()` method 'I' and 'C' are capital** 

# Syntax:
**In HTML file**:
```html
<head>
    <script src = "Toggler.js"></script>
    <script src = "myscript.js"></script>
</head>
```
- You can use these in <body></body> too.

**Your main JavaScript file**:
```js
 InteractionCount();
 toggleClass('elementID', 'fromClass', 'toClass')
```

**Note: InteractionCount method should be above the toggle method if you have multiple toggle methods you can use `InteractionCount()` only once at the beggining of the first toggle method()**

**For example:**

```js
 InteractionCount();
 toggleClass('elementID', 'fromClass', 'toClass');
 toggleImage('elementID', 'fromImage', 'toImage');
```

**elementID:**

ID of the element to which you want to change the class.

**fromClass:**

element's current class name.

**toClass:**

New class name to the given element.

**Note: Remember all the arguments are strings.**

Remember to use this syntax in your main script not in ToggleClass.js

**Note: Don't try to manipulate the ToggleClass.js unless you know javascript.**

**For more info about the 'Toggler' visit [Toggler Docs.](https://the-atelier.ml/Pages/Toggler/toggler.html)
# Contribution:
- You can contribute to this repo by creating a pull request for features and issue for bug reports

# license:
- This repository is licensed under MIT.

# Contact us:
- You can join our official discord server [The Atelier](https://discord.gg/6Mcy5NpSpH)
- You can support us on [The Atelier team patreon](https://www.patreon.com/the_Atelier)