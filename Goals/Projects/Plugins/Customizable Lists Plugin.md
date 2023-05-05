

```bash
# Activate Environment
$ source venv/Scripts/activate
# Run the program
$ python -m autogpt --manual
```

Name: ObsidianPluginDeveloperAI
Role: A Principle Software Engineer with expert coding skills and decades of experience in Typescript and front-end technologies, as well work experience at Obsidian, Google, Amazon, Red Hat, and others.
Goals:
Starting with a cloned version of https://github.com/obsidianmd/obsidian-sample-plugin using Git, create an Obsidian Plugin that allows users to customize how lists are displayed. Lists that begin with a parenthesis, i.e. "1)", should display as a circle with the number in the center of the circle by default. Each bulleted circle should be connected to the next with a very thin line. Users can adjust what shape it should display as from a dropdown in the settings. Also what color it displays as can be altered by the user. Users can also toggle the line connector on or off. Save your changes to the GitHub repository. Shutdown.

# Other Ideas

- [Cooking For Engineers](https://www.cookingforengineers.com/recipe/108/Banana-Nut-Bread/trn)
- [Cooklang – Managing Recipes in Git](https://brianlovin.com/hn/30582877)

Two problems with the `.cook` extension:

1. You can't publish to Digital Garden via dg-publish.
2. You can't use Wikilinks to refer to `.cook` files.

# Main Features

## Summery
![](https://lh3.googleusercontent.com/pw/AJFCJaVE1jvdYnGiv6iTvsjdZKupYIdcRthuJ22NiHUo-yHO4kpbdAtD9Y7Lcl0KIix4bvtyuXPZnrcZ9VFauHtykxoMEJV70jeNQcA9wV1aOxipvuz9YuG3Hjs-um5UxUBizPNrcz363roJqLqZTAtIwgpp8g=w579-h1255-s-no?authuser=1)

## Ingredients Page
![](https://lh3.googleusercontent.com/pw/AJFCJaULqHULMI8K78Cm_L1xIq1hKyM8ooWNoYQrKt_JoYEBfdDG5IHI3qGk5vHOYXfHZew0ZSdH-tLGInYns2PVb1Gwj3Gye-pdj4yY9nEN9ykYBNYzEnSssbHZ83fCo4lzS0uEfliiRR8AYTxb1s63nangbw=w579-h1255-s-no?authuser=1)

## Directions
![](https://lh3.googleusercontent.com/pw/AJFCJaXHLKdmEBN5ldLrpOQLlmDerY56Ca-nIhxKLQsj5EyqeXBEI4uY2moScv4-YJrwBu_pMIQ9ZNxWuIZC1-ltP91nY3ZY21CCCYIUAicVLcTqvzrIF6kAc2c_QVCHNDQ4m9wR1UwZYgrIOPwgVkrptcXAQg=w579-h1255-s-no?authuser=1)

# Gallery View
![](https://lh3.googleusercontent.com/pw/AJFCJaWo6A4hsdoBmCwgGYmswPP03MeMHKh6ASA_xu0ERCfd7LYpvAgePO88Jc5YhpeeSaWxXupvAdeKRq3UJ6Fz5NtlrgCxlg5ynh4BoexuVCccthcfZDgTWR9BflTlXvhLXw3lXj8jFHhPoWGxewdx42YQ_A=w579-h1255-s-no?authuser=1)

# Meal Planner

## Monthly View
![](https://lh3.googleusercontent.com/pw/AJFCJaW6oFcmDhKYehwe8UjFFpOeJKJXi6wkZBVjaR_9bBuCMq27Vnjs3AlDwttYxuWCn7rn6VSdLFPEP-k0XXnWjjxeSU7ZwaYK-taEUbz6TXyjpE7HerQMaymho5u6TJH05f-ydS2Jo-my-4sBVPgFSqB8jA=w579-h1255-s-no?authuser=1)

## Weekly View
![](https://lh3.googleusercontent.com/pw/AJFCJaWFJoBuAOPieTyRvghSxygI7VwuBgvlK2MPqfPWN4iw-AF6wyEu-Ti0tsacYknKT7OQlPDyCWAhwRXMEC-KBBy3UkeObnOBwqhQ7isLs_SYvM3rh6QwpTkn1jUsv-SvWYtJcnbCLZ_XHsM5qsGbSBn79A=w579-h1255-s-no?authuser=1)

## Daily View
![](https://lh3.googleusercontent.com/pw/AJFCJaUsTPS9j9N68ZHU9L5hXs4JomDS3zBLnx_ujchaAEKzq3P557RRe4bdQmpafJspmYi8cx_6yggzRyd7Uo9YUHfOH7QViFMLSG6NGFJVwG7XyxLNrerEna-n3J7DTlCuqVVcAYbo3dgE1FyZaG3yJ20Mmg=w579-h1255-s-no?authuser=1)

# Modify CookLang Plugin

There is an Obsidian plugin at https://github.com/deathau/cooklang-obsidian.git that registers files with the extension .cook to render recipes. I want to modify the plugin to do the same thing but with .md files instead, so that other files can use wikilinks with them. Instead of registering .cook files, we can register files with the tag "cookmate". Below is the main.ts. Can you modify it to achieve this?

```ts
import './styles.scss'
import { Plugin, WorkspaceLeaf, addIcon } from 'obsidian';
import './lib/codemirror'
import './mode/cook/cook'
import { CookView } from './cookView'
import { CookLangSettings, CookSettingsTab } from './settings'

export default class CookPlugin extends Plugin {

  settings: CookLangSettings;

  async onload() {
    super.onload();
    this.settings = Object.assign(new CookLangSettings(), await this.loadData());

    // register a custom icon
    this.addDocumentIcon("cook");

    // register the view and extensions
    this.registerView("cook", this.cookViewCreator);
    this.registerExtensions(["cook"], "cook");

    this.addSettingTab(new CookSettingsTab(this.app, this));

    // commands:
    // - Create new recipe
    // - Create recipe in new pane
    // - Convert markdown file to `.cook`

    this.addCommand({
      id: "create-cook",
      name: "Create new recipe",
      callback: async () => {
        const newFile = await this.cookFileCreator();
        this.app.workspace.getLeaf().openFile(newFile);
      }
    })

    this.addCommand({
      id: "create-cook-new-pane",
      name: "Create recipe in new pane",
      callback: async () => {
        const newFile = await this.cookFileCreator();
        await this.app.workspace.getLeaf(true).openFile(newFile);
      }
    })

    // register the convert to cook command
    this.addCommand({
      id: "convert-to-cook",
      name: "Convert markdown file to `.cook`",
      checkCallback: (checking:boolean) => {
        const file = this.app.workspace.getActiveFile();
        const isMd = file.extension === "md";
        if(checking) {
          return isMd;
        }
        else if(isMd) {
          // replace last instance of .md with .cook
          this.app.vault.rename(file,file.path.replace(/\.md$/, ".cook")).then(() => {
            this.app.workspace.activeLeaf.openFile(file);
          });
        }
      }
    })
  }

  cookFileCreator = async () => {
    let newFileFolderPath = null;
    const newFileLocation = (this.app.vault as any).getConfig('newFileLocation');
    if(!newFileLocation || newFileLocation === "root") {
      newFileFolderPath = '/';
    }
    else if(newFileLocation === "current") {
      newFileFolderPath = this.app.workspace.getActiveFile()?.parent?.path;
    }
    else{
      newFileFolderPath = (this.app.vault as any).getConfig('newFileFolderPath');
    }

    if(!newFileFolderPath) newFileFolderPath = '/';
    else if(!newFileFolderPath.endsWith('/')) newFileFolderPath += '/';

    const originalPath = newFileFolderPath;
    newFileFolderPath = newFileFolderPath + 'Untitled.cook';
    let i = 0;
    while(this.app.vault.getAbstractFileByPath(newFileFolderPath)) {
      newFileFolderPath = `${originalPath}Untitled ${++i}.cook`;
    }
    const newFile = await this.app.vault.create(newFileFolderPath, '');
    return newFile;
  }

  // function to create the view
  cookViewCreator = (leaf: WorkspaceLeaf) => {
    return new CookView(leaf, this.settings);
  }

  reloadCookViews() {
    this.app.workspace.getLeavesOfType('cook').forEach(leaf => {
      if(leaf.view instanceof CookView) {
        leaf.view.settings = this.settings;
        if(leaf.view.recipe) leaf.view.renderPreview(leaf.view.recipe);
      }
    });
  }

  // this function provides the icon for the document
  // I added a modification of the CookLang icon with no colours or shadows
  addDocumentIcon = (extension: string) => {
    addIcon(`document-${extension}`, `
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 48C39.9411 48 48 39.9411 48 30H12C12 39.9411 20.0589 48 30 48Z" fill="currentColor"/>
    <circle cx="18" cy="18" r="4" fill="currentColor"/>
    <circle cx="42" cy="18" r="4" fill="currentColor"/>
    <circle cx="30" cy="16" r="4" fill="currentColor"/>
    </svg>
    `);
  }
}
```