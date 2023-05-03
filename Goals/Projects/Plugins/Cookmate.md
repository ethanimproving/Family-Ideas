
Features: 

- All recipes are stored under 1 directory.
- Frontmatter is used for recipe organization.
- 3 pages
	- Summery Page
		- Image
		- Title
		- Rating
		- Preparation time
		- Cooking time
		- Total time
		- Yield
		- Description
		- Nutrition
		- Linked Recipe (From Group)
	- Ingredients
	- Directions
		- Linked bulleted circles with line
		- Sources
			- Author
			- Link
- Add an Internet Recipe
- Meal Planner
	- Configurable Main Meals or Snacks
	- Based on desired calorie count and micronutrients
	- Calendar view
	- 3 Views
		- Month
		- Week
		- Day
- Shopping Lists

- (1) Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with cooking spray.
- (2) Blah BLah Blah


- [1] Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with cooking spray.
- [2] Cut the jalapenos in half lengthwise and use a spoon to scoop out the seeds and ribs.
- [1] In a medium bowl mix together the cream cheese, cheddar cheese, onion powder, salt and pepper.

1) This is the first one
2) This is
3) This is the next line

<ol id="directions" itemprop="recipeInstructions" class="edit_text editbox directions" title="Click to edit...">
    <div class="vr"></div>
    <li>Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with cooking spray.</li>
    <li>Cut the jalapenos in half lengthwise and use a spoon to scoop out the seeds and ribs.</li>
    <li>In a medium bowl mix together the cream cheese, cheddar cheese, onion powder, salt and pepper.</li>
    <li>Fill each jalapeno half with the cheese mixture.</li>
    <li>Cut the slices of bacon in half crosswise and wrap each pepper half in a slice of bacon, using a toothpick to
        secure the bacon.</li>
    <li>Arrange the peppers on the baking sheet and bake for 20-25 minutes until bacon is crispy and browned. Serve
        immediately.</li>
</ol>

```recipe
-1 Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with cooking spray.
-1 Blah BLah Blah
```

Here is the HTML from a website:

```html
<ol id="directions" itemprop="recipeInstructions" class="edit_text editbox directions" title="Click to edit...">
    <div class="vr"></div>
    <li>Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with cooking spray.</li>
    <li>Cut the jalapenos in half lengthwise and use a spoon to scoop out the seeds and ribs.</li>
    <li>In a medium bowl mix together the cream cheese, cheddar cheese, onion powder, salt and pepper.</li>
    <li>Fill each jalapeno half with the cheese mixture.</li>
    <li>Cut the slices of bacon in half crosswise and wrap each pepper half in a slice of bacon, using a toothpick to
        secure the bacon.</li>
    <li>Arrange the peppers on the baking sheet and bake for 20-25 minutes until bacon is crispy and browned. Serve
        immediately.</li>
</ol>
```

And here is the CSS:

```CSS
/*! CSS Used from: Embedded ; media=screen */
@media screen {
  .editbox {
    padding: 1px 23px 1px 1px;
  }

  #directions {
    counter-reset: step;
    padding-left: 3px;
    position: relative;
    margin: 8px 0 22px 0;
  }
  #directions li {
    list-style-type: none;
    counter-increment: step;
    padding-left: 45px;
    margin-bottom: 25px;
    font-size: 15px;
    font-weight: 500;
  }
  #directions li:before {
    content: counter(step);
    vertical-align: top;
    background: #74d1b6;
    -moz-border-radius: 22px;
    border-radius: 22px;
    font-weight: 400;
    font-size: 12px;
    position: relative;
    z-index: 2;
    height: 25px;
    width: 25px;
    display: inline-block;
    color: #fff;
    text-align: center;
    line-height: 25px;
    margin: 0 20px 0 -45px;
    float: left;
    background-image: initial;
    background-color: rgb(75, 137, 120);
    color: rgb(240, 235, 226);
  }
  #directions .vr {
    background-color: rgb(75, 137, 120);
    position: absolute;
    left: 14px;
    top: 10px;
    bottom: 0;
    z-index: 1;
    width: 1px;
  }
}
```

The  result is that each `<li>` element has a numbered green circle to the left, and each step has a line connecting to the next step. They are essentially bulleted circles with lines. I want you to recreate that CSS but for bullets in Obsidian. Below is an example of the HTML in Obsidian:

```html
<div class="HyperMD-list-line HyperMD-list-line-1 cm-line" style="text-indent:-12px;padding-inline-start:16px"><span
        class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-list-1"><span class="list-bullet">-</span>
    </span><span class="cm-list-1">(1) Preheat the oven to 400 degrees. Line a sheet pan with foil and coat it with
        cooking spray.</span></div>

<div class="cm-active HyperMD-list-line HyperMD-list-line-1 cm-line"
    style="text-indent:-12px;padding-inline-start:16px"><span
        class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-list-1"><span class="list-bullet">-</span>
    </span><span class="cm-list-1">(2) Blah BLah Blah</span></div>
```

Remember, you must create rules for the Obsidian HTML, not the HTML from the example website.

```css
input[data-task="<"]:checked {
}
```
