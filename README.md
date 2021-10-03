# Toggler

![Toggler](https://github.com/Chandra-sekhar-pilla/Toggler/blob/main/resouces/toggler%20(small).png "Toggler")

A package (atleast the code) to toggle properties of tags.

> I mostly use toggle classes while making a switch theme method, button interaction etc.

# How to use 
## through Toggler.js CDN

Official CDN:
```html
<script src="https://the-atelier.ml/external-scripts/Toggler.js"></script>
```
jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/Chandra-sekhar-pilla/Toggler/Toggler.js"></script>
```

You can use this in either body tag or in head tag

In you JavaScript file:

```js
 const toggler = new Toggler;
 toggler.toggleClass('elementID', 'fromClass', 'toClass');
 toggler.toggleImage('elementID', 'fromImage', 'toImage');
 toggler.toggleSlide('elementID', 'direction', speed);
 toggler.toggleProperty('elementID', 'propertyName', 'fromValue', 'toValue');
```

## Manually downloading the file

- You can clone the project or just download the Toggler.js (Will release as a npm package later).
- Include this script before including your main script.

**or else:**

- Download it from official site.
- And follow the steps below.

for example:

```html
<script src="Toggler.js"></script>
<script src="myscript.js"></script>
```
- After this you can use `toggler.toggleClass(elementId, fromClass, toClass)` method to toggle between classes `toggler.toggleImage(elementID, fromImage, toImage)` to toggle between images in your main script.

# New feature

**Toggle Properties:**

- Now toggle properties.

**Syntax:**

```js 
const toggler = new Toggler;
toggler.toggleProperty('elementID', 'propertyName', 'fromValue', 'toValue');
```

- Create a new object using `const toggler = new Toggler`.


**Toggle slides:**

- You can now toggle slides(an element).
- You can select upto 2 types of slide one is vertical side and horizontal slide.
- Vertical toggle is coded and can be used.

**Syntax:**

```js 
const toggler = new Toggler;
toggler.toggleSlide('elementID', 'direction', speed);
```

**Direction**:

- Direction says about in what direction the slide to start either horizontal slide or vertical slide.
(visit docs for more info link is below.)

**Speed:**

- Speed defines the speed of the toggling that mean how fast it should slide.

**Example:**

```js
const toggler = new Toggler;
toggler.toggleSlide('testElement', 'horizontal', 60);//toggles the slide horizontally i.e from left to right or right to left
toggler.toggleSlide('testElement2', 'vertical', 60);//toggles the slide vertical i.e from bottom to top or top to bottom
```

**Note: To avoid problems use `left:30px` or `top:30px` instead of `margin-left:30px` or `margin-top:30px` because the code calculats the offset values.**

# Planned improvements

- Upgrade Toggler so users can use class names too for toggling.
- Improve toggleSlide() for vertical toggles.
- Improve togglePrperty() cause only changing when it is clicked second time at the beginning.

**Note: You can request some features by opening a PR or issuing a feature request through issue.**

# Optimizations:

- Now Toggler is a class.
- Removed `InteractionCount()` which sometimes doesn't work properly.
- Added vertical slide support.

# How to download

**Downloading (through github):**

- Click on the code dropdown and click 'Download zip' to download.

**Cloning using command line (only for contribution purpose)**

- Open command line in your PC and type

```
$ git clone https://github.com/Chandra-sekhar-pilla/Toggler.git
```
- Repository will be cloned and you can use Toggler.js in your code.
- If you want to contribute changes can be pushed. (check the code before pushing to origin or push to 'other' branch)

**Downloading (through Official website):**

- Go to [Toggler official website](https://the-atelier.ml/Pages/Toggler/toggler.html).
- Click on the Download latest Toggler.js and choose path.
- Download it and use it by copying the file to your project folder.

**Or else:**
- Just copy paste the code.

**Note: While using Toggler.js please make sure you have a backup because if something goes wrong and you pushed the changes then things will become tedious to handle.**

# Syntax
```js
 const toggler = new Toggler;
 toggler.toggleClass('elementID', 'fromClass', 'toClass');
 toggler.toggleImage('elementID', 'fromImage', 'toImage');
 toggler.toggleSlide('elementID', 'direction', speed);
 toggler.toggleProperty('elementID', 'propertyName', 'fromValue', 'toValue');
```

**elementID:**

ID of the element to which you want to change the class.

**fromClass:**

element's current class name.

**toClass:**

New class name to the given element.

**Direction**:

- Direction says about in what direction the slide to start either horizontal slide or vertical slide.
(visit docs for more info link is below.)

**Speed:**

- Speed defines the speed of the toggling that mean how fast it to slide.

- Note that speed is int literal.

**Note: Remember all the arguments are strings except speed. And Toggler.js will work in reference with Id of the element so make sure you given a valid id for elements before using the methods.**

Remember to use this syntax in your main script not in Toggler.js

**Note: Don't try to manipulate the Toggler.js unless you know javascript.**

**For more info about the 'Toggler' visit [Toggler Docs.](https://the-atelier.ml/Pages/Toggler/toggler.html)**
# Contribution:
- You can contribute to this repo by creating a pull request for features and issue for bug reports

# License
- This repository is licensed under MIT.

# Contact us:
- You can join our official discord server [The Atelier](https://discord.gg/6Mcy5NpSpH)
- You can support us on [The Atelier team patreon](https://www.patreon.com/the_Atelier)
