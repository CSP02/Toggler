# Toggler
A package(atleast the code) to toggle properties of tags.

> I mostly use toggle classes while making a switch theme method, button interaction etc.

# New feature:

**Toggle images too:**

- Now toggle images with an ease.

**Syntax:(only for image toggling general syntax is given below)**

```js 
Count();
toggleImage('elementID', 'fromImage', 'toImage');
```

**Note: To make it work you** ***must*** **use `Count()` method. Notice that in `Count() method 'C' is capital** 

# How to use:
- You can clone the project or just download the ToggleClass.js. (Will release a npm package later)
- include this script before including your main script.
for example:
```html
<script src = "ToggleClass.js"></script>
<scipt src = "myscript.js"></script>
```
- After this you can use `toggleClass(elementId, fromClass, toClass)` method to toggle between classes `toggleImage(elementID, fromImage, toImage)` to toggle between images in your main script.

**Note: To make it work you** ***must*** **use `Count()` method. Notice that in `Count() method 'C' is capital** 

# Syntax:
**In HTML file**:
```html
<head>
    <script src = "ToggleClass.js"></script>
    <script src = "myscript.js"></script>
</head>
```
**Your main JavaScript file**:
```js
 Count();
 toggleClass('elementID', 'fromClass', 'toClass')
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
# Contribution:
- You can contribute to this repo by creating a pull request for features and issue for bug reports

# license:
- This repository is licensed under MIT.

# Contact us:
- You can join our official discord server [The Atelier](https://discord.gg/6Mcy5NpSpH)
- You can support us on [The Atelier team patreon](https://www.patreon.com/the_Atelier)