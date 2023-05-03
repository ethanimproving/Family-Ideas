

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
![](https://lh3.googleusercontent.com/Z8YHpiJYJ7ELXWeaNNj_MJ1pJLe2iWeHsMyYVJdhG2uvqCPj2ZGa6tJbXP3wwuCK3Godw7pd15nhXOmR_6PfcpyJrMPMIKMyxwF_50uHmmvAJpdCqrXYm-0pWXRtIX6AG7NqVAj6LPGxm9IbzschoHSxYPeJ2UmHnIvp4lzgMZT2xp-FgZugjUvdhhJ_zLqNouQ59EMZ7_quM74A92a71VbGGMHW4E-dnq6PczVpkyo_c52FBfvxo-VKOBVAZIUxEIxyhCRXecEkY81GQzGsNPTwE8AMn3dA3CSszJK_bgkVNjL4pMxZTvq2-vUseokGofEw3JXpgJx6bD6MxSROoErUeexRTZD8k3EMWxUDh1SAeGoCf3vULJ0xVQFoDfmZ9YxfJd1yK6Z2AffWQBN3GL8mAKF0AlrymFvtFQLdR7oBkjAOSTduhc5NId653-kgYqrlf4PPhtsItn5vWvjlC_jil08BwJ6sv5Cw2qJ5Bqy8gpGJy3kY0iXX5QYJ4uVry5Fh55OEeF_0cCDV1jaSeM3pypEqk59KL_tTLj46RyrHMpZhGXUcqfEWnNDRxKFR2kFDNeXj14NiR82DNjWRBR0M9_ZTEenTKiWsdKSk-Mj_h1zU4iIpt9OzlEwxs6Zc4rAaheFgzxyeclJ40aaf3Gy251LS3ziTu7JUITrc0kqYFZm13PAglPEj044_g5sJ0opK4Z4RpxtgNkb5ZZScTGHHjv7EfReSUbjO4dZqPgcx9v9dLAhAvGxVpjSTuMNPKqtKo03r87RNbGKy1wfqVylCg4OnS7f2M69A3pn3UnskTylq6x9Bq-K2doO9zkVIsrr619xfr9LW5eIiJQWhY0WRRH2AZyV0x9RPSDPJweL3shflbyyAmD-9Cj39zrQk9z1OQY5auIf-J4wwj8N26nVtpfO64vKSETSj5IxLeZsjNQ=w579-h1255-s-no?authuser=0)

## Ingredients Page
![](https://lh3.googleusercontent.com/MbiyQ2mWEcPr4iqYOm5t62kTK8A3PbaGCEFjehZYb1KSkhKisiTpxiUAn99DIz50GttahMuL_9NVWsQcmm77p2e6tbxgn3assf3c1tJ8TaSHgyA_lxSxQrAfiqsu57Pbl_ja7w8VPBa1pjNATjYrfKYY6oiTc6jt9-I9r2VAnqHNV-IVyu16Bx40jnKky8vWs3wyWkeGwggMGNn2tj7dHRhxQ5yre_d6tkirc7VINm2s30NZuLazCO8tHxhI68NeWMQskJGhbAnxk5aIUtxAr8hSptVa9lqKb78ZNVD2gqwS0pfuPXE1KvjkLHlNf-ey_gMG32hueH6OTRaawQorQKAQZIUtq72oHQdPkrUyVzWSFix0jdpm9N6ggPh9GxxhKv3qsutA67JWEzm59EchTyTCG1KxVqI3c8ADXft59PLjOKTQYcJ3g23Cy_SxoQfHnGcyF91hS-6a8-04nSVmhbpIKycFaAenRFAt9SCa_Yjh9Qfe79lqCe_7LrB-6bu6Qob_Vax7-j32qVd2FAxZSOc3TCLs7Yv7cfuzxkQ2G5JA-87xJNX7k9aczzzr3AUAv5_vUsWc_iXCtXLk4yAMmwLMsdTqrOLYTEoZWN5UT_zn4Ih0wTCO0kvXLFuFh-8TA8tpNVxFhxNg1ldxkAdpRoKVqEr9PFSKc99e-pGb44sdvjrCZFlRjq9Bg2TOI9FgFAcTJrHaOhEOMQGVIaYXDZZ9xOjNBUuLch_L7RzaoCuizFVBL6c7yi-mx6wv3OB4REAnbyBRnvpa__xpeWQp6Nt0YTGtnGKETWc6jCHHbFdw6gB-ddSFXM3WYGlF9fx93qO3Prr4eT2qFA8Mm-kVoiPm3Xw64emSERwJ39BUypukW5eIjYfUoqKeca_yjYmcJhaWvNwYcOZvGfPUGHD6T3w7t85MhOOasrd9d3NOz1yP5Q=w579-h1255-s-no?authuser=0)

## Directions
![](https://lh3.googleusercontent.com/Db_Xk7FWG6s60MPQVGo-mZlPX5KbbY0eUXVK2kuevxIdtS-PnLSzCDjod67f59uxy0JiP6F_LO5zc-8dXfNd6Wg2VKW0j7Y3TZg6KuJGpKkdA4OFabFPC1d5skyu7GP500cb2VWsT8Y3YZJRHdUZBlV6FE5OXWDJDZvOntbuQvqh6hyErbA_7yeeNY-NFgbWrCe0ttY4r_IYYvFSiCkWewHgFMwWEYdPWAqplVzn1cdn943odOLf_0q_Yb25yFbRYgSyGRd0lE1IOw_o-bfsEXcMOQIOrCXnkg2Elbi_Xq6SbflGv4awpV8paOAqrNpjwdJtuAnqoUeiTfwhKcsz9R9PdjR1hLQiBeEjRVO7Fgn5TYILOg29LRHqGL_3SJe2RmnE0-5sgFnu0yT-tM0HB8FkE6GtrSEgss_dsVqWvmGbftWc47PkCQ18DcvuoEnHtdJx3j1ECQ97gWlX7_wEe1AGmx3xg_kNt8m2rZ4eBoJTby7bJZMXYxk9PT8a5bB6XGy9rfddr2ikHQktFim4IZQnOJ78H-sK7tSnxXrs3r5iNjxPJIl-vO8i5Q5W7jC2y19gCwvDN739tXKCvhdaJ9UVYzNIzi8chB9FhfFzUUTXKLisLY1h12A_W1N2HC611pJrMSaELO48snDL2bOc31gnAZucY7Hrabe-TYXjYwIiOyX_Wt3QHLprWy6AJ52g7tq-HaYvWnwYeig0rXU-6D4EKJ2XS2UbFhnbnSdGvK1_p093T5IJiT6760Fzhx78YQYC9g4Ck0nyMVtMs1boPzEZ3P-W3TALXMjqaLrdVysRWelc3qh2ADpL2g1Rd8wzZuo1mCOg5Vt1w8tt8ZSx2fECmYaZPgeOf5xCAZwPwjaHMP7XetLR04sP6Htq24W4EWFAoLI26zg49oRXwqr6MPcRksQE3kU_KulP6whx4usdZg=w579-h1255-s-no?authuser=0)

# Gallery View
![](https://lh3.googleusercontent.com/0l9nwO5TNLZLdig4wnjpC72Jh3wUX52dkxwdYMemsDZXiVeJpaf1Zb15oVB5ShshjT5KvgWyEvCMpitWF1y8h-10aSF9t2D3qlrvCUk5U0OCdtMbeNl6arC2xONfqr2uQfaIaKsyndYtO9Q0L0mKO6Y6cbdlK3xu7U_SNtg9xXW0mVUfEmaOYp856BlOkoTw56uLb857NVqMWV9RSwW7ET7Qty1qL_vMIIPsUhbfU_tn9ODECUzP7TUNUs0pXAg5SfNJAXiTDJd9rX12y4kq2GYlntKJeSy06s91otWehBRuKcVGIH-6E0tAW6_FMYS4HlLg5oeUfqJwrvterxI_W0WZCcBjGpfu5PepI6OqBHczwX8DMhnSJjAzui-3nQPXwALbt48Z138xkQrA0zmGVnklWTcXa8xC9ciGnd4qG3fYu0AMKYzquo2mhakmz-cQ7XTaRizDSisEmilVre3pc2jNObm3jZ52SRbkoiGsf6IPqij6Czxzk_XEDwwDBDfj9z62F7erPt0oBWLJtItCGWxouVVFD9nnoBXJ3fJxuW07yzOPI5LZslX38rFOXsxkuPXeuYNwm9zsf0VJH-srqhWCYqCzNZ2N9PuPpGbBcGKcUkLr8IXEbpJYeypUY20tT7vReMCpd5DHZ0fBlsQvV87uOcY5pAiHi6jY5F0yLp-rBGENtM453ZwY9Y3votiuXAgtdNl51su5C_wg6NKMEDD9AOl4G_V_k8OEBzKd3306maAxoU2ETiB3NStXoJF01HUXyW56ERAh4LT36kWiUga8p8AbaAdnqbAFE-4zJLVOvwV3SA3Pn7CGAAn0YWE-Cc22wp62yRHejtV5Q_9vUyVK_cHD43B0DNNW_HehJ-E47qP-Si8p7MD1zUwcPbt9YduCvXUrf9iz0OBWEKiZqU-cJy4k_ZbmBSIAcAqU0pFPmA=w579-h1255-s-no?authuser=0)

# Meal Planner

## Monthly View
![](https://lh3.googleusercontent.com/imsoIugy7R_xjJ62yxzd6Gh_uwfhOlGCXvhpiv0wIVHXRXkIWjzCLW9goHYGIum75YBt6yxlxZBl5A7VtkD9b7sL5o4bcTWH_owQJy3qHCinsbauF0yV15MfrSu2ymc2vHKBOs6cBPgXKB6lbI7HOztpKHUpAycc9wFF23Wfe0ZdIGjiSgniME6kSfq_QNjABaML0K2aw4Z-19wkMbV2DO1vPIqJc8mRow2Lu2hDu2NwUE8p1jLu7MYGe3CVKPjeLl4mHsBL1xH5zPEyEyy6wzYf8OIy-rR7ov02TyBSc8tj2r79XeOfcA6wPzpOiLXLTyfYNnVCwwjJ-Z9LDFY8cFhA-uN48ISMUjuKwM4k-NLSBqj6NHhiUPvc82sT2PZ7Tbq6nNQI7n6x0UpzOi2g0jDCLmBRhudej9b6HEA26sQ7blRlrVYAKULqHHfC09nqw8q76HWRQqAen381J2pExbnsx7ti458zZFtzrc_qaYUzS-zTiycnvkFCqQjLBKGDYin9vO_198ctqkESoVjsLji7de6N_nDeXZ9CrBo-pBMR-LEE4wT8I_wpll1zgOkm9u0R9nQUpk47q5c7T35QPeERw3KbXgaJeAQUSQH6Rhnrsw5YBA7wr16QfOKT33izYCFCh21NZDqOXV6rv9_nnZQOnv-1ciCI8d1eTemHzFj9-JS0nAlAbbdFSpubvEaQP2z0Qe2P8edmNfPf93i_8bBiPayklLUZB20zux3y4E3-alibBH-YsvO3Qq18kxiKIWhknGFeUK4N5-wiWvgM8nVFE84N6JLE5WXhGB7B19-ugkqiGi4YyZOo3Zr3udRd_saBkypYOKTRqWyMwb5qrDWKn8m8kz2zTjXxtvCqs4OiSQw6G5uhCVnTn8oyjLMQojZ9SEDh0eEDE6Kikws7p6fa0NyYyCcUrMHNJOjGjArPgQ=w579-h1255-s-no?authuser=0)

## Weekly View
![](https://lh3.googleusercontent.com/GO6RpOMe4R5w_33-IUkgrcsASRt7rGCXZGs7cPzhji_lzjCtCaVYjXv8ixdw9LI660uXlGEtIgzcnrQNEdAbu-4fEtxzdKZsvNeRwM4FfsVj8l70GQrnqZIchqRMP-Nw7tM1iQLKy1AAqs5vWJnCIO0YhUhNkboZjuyqhtJaCNy1zHinphQgZVd7zHnH_KTnnY1GKHKZ1B59VG_V7UTOFsLYXzCP586KbIdukVDCRF3_pIS2AbJdvQKzls5axghZZGqBNLw3vp6jdVmKLveu0S8HsjNeSLBSlxrwqRCg-iysDJCsb9Fb6v9_Gt5bpc3lq5j7BLj4-BH2DikJpbTvjom7DTpGbQLx0wgbew9vLuq5wLAFd_ClTbUE2ecsMBtCTOxlIiw_8owTpx1MARl4Ld_U9t5V5VZtN6oWs-2lrbFPoRz_y0iLRNZOWVpgi2sPujOtKw-TkX6nFnZbWbCbokaOGxMwV4xyJa8BC90D2J7Zq9tTX83N_ZePr9JYgCHi4IW557I3EitMh7g0G6FihVZfsAV8CfVQAjPsKaBRZdNLYuCREKUgwSaoqlp3H_VVB46AcHEhDpSmSkwpjX0H9YkMHRAF2W59OI0ZXPM5LuB6K4d7eAA8Eocj_9-NN0kOTjXrqJZF_QoCmZJKYWOzofg0s__lXqAgD0iUZd7sE5e8AfLHb7d46LG-5CZOtwlaT9v7jLMaof4ulcU9-bd5DbZA77DBoYKP6l4liOLXn6laZE1jULTpJq-ZtDbDXGxJtGEVc1CTM8ZbFiwshMWcPFLZ8zshkvTg6CFROE0BI9tt47jV9nXsbbM4oRnOgW0IXsUlf1er5Zgwb_8AxpsKIf0RGy_ISeAFjWXwLt7usUdFD53rd5166tqBDD1bsnq_Dc6bsvGEFB8DlJJWdz6gsgUg8601dAfQuvRYLz-P7sn85A=w579-h1255-s-no?authuser=0)

## Daily View
![](https://lh3.googleusercontent.com/8lYEuGK82O085_johFwnDMe9ttbTeuk5YY6jdyO5ZHHiBPSN8aElgTWoMRPx1FGYWGQ0xxWV0cMR1qpdfZPBoQFo_4WteJ-WZwB1AESD38RYY8u1Il6UtSUCHYPbOOuj2YhsvpyX5upFGwnm0bLFOg3fzOt7pdxgdCsyGjO-WebhgPg8WMxhx5ClenhBhccs7K5JI5Rx0ade3utpyosRBVgTlxwoM4zvWt5KD92qso9CiNUXAAMXun6B6Qs7X30Wlj4FZVZSM0xGQFirXxJDiS2XBCWOenzzqq9iaKrzLpdtRaWnbTt0ckfMrj33MldBN1RadQYh4lwlFYjKcts-5PD561BeihNfaAQJ1xhRJV2Rs53hw4z_YRZHH5XQf-JdHqX1SP9dyQ3XPMcOolwZyVv2lbMPVzp2HhCXgfr-D3LOKgHsQCPugqHQrgTiGKNea9YJUeGTN-QACM1cPF_8fCFzc17t1MLldDz_PoOBRboqYq-qsps1VtA2rEfGaw8r9FJ4Psr_8u_HVprIG4ERTiMR9N33-0zTSFo-bPZ-rjgGmU-q-_oLQJxwsvk5PQYwDwk4lHh_5o69PfTDbkyDY1GBThzbwP_y3EBso_v-qbyYy995RIemiQcDMTCh_SzXe0F05l5elVPtdYX7oLlhpaBDQdp463PQdzAfM21FPJOcUbH7WJfgvg-KHM18H0n1hGg6ssBm1jbddvPOBYF3IGWzy-0ywkTHzUhx2BYorUkBWmbGNX4_Jls8wgQ_GABbEIcOMwqc60B9j2wuHWjXWzm224cBS0JLsTjcYP8gziD87QqxhBgo5r7e2WZlUjzaLXMef98ycgxH0Omukeun7Xij0eRxzFiX8aWvHnqHnr7XShh2vyv1LQRBY1TmQym9CJjb4t6r_GC18ZbTPLSb5v3UFx77U_XQNmR4LDrLot5elA=w579-h1255-s-no?authuser=0)

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