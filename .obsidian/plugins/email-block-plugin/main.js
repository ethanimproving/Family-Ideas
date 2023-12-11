/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MailBlockPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var MailBlockPlugin = class extends import_obsidian.Plugin {
  async onload() {
    console.log("email block loading...");
    this.registerMarkdownCodeBlockProcessor("email", async (src, el, ctx) => {
      let parameters = null;
      try {
        parameters = this.readParameters(src, ctx);
      } catch (e) {
        el.createEl("h3", { text: "Email parameters invalid: \n" + e.message });
        return;
      }
      try {
        const rootEl = el.createEl("div", { cls: "email-block email-block-border" });
        if (parameters.from !== void 0) {
          rootEl.createEl("div", { cls: "email-block-info", text: "From:" });
          rootEl.createEl("div", { cls: "email-block-info-value", text: this.renderAddress(parameters.from) });
        }
        if (parameters.to !== void 0) {
          rootEl.createEl("div", { cls: "email-block-info", text: "To:" });
          rootEl.createEl("div", { cls: "email-block-info-value", text: this.renderAddress(parameters.to) });
        }
        if (parameters.cc !== void 0) {
          rootEl.createEl("div", { cls: "email-block-info", text: "Cc:" });
          rootEl.createEl("div", { cls: "email-block-info-value", text: this.renderAddress(parameters.cc) });
        }
        if (parameters.bcc !== void 0) {
          rootEl.createEl("div", { cls: "email-block-info", text: "Bcc:" });
          rootEl.createEl("div", { cls: "email-block-info-value", text: this.renderAddress(parameters.bcc) });
        }
        rootEl.createEl("div", { cls: "email-block-info", text: "Subject:" });
        rootEl.createEl("div", { cls: "email-block-info-value", text: parameters.subject });
        const bodyContent = rootEl.createEl("div", { cls: "email-block-body" });
        await this.renderBody(bodyContent, parameters.body, parameters.variables, ctx);
        if (parameters.showmailto) {
          const data = "mailto:" + this.encodeToHtml(parameters.to) + "?subject=" + this.encodeToHtml(parameters.subject) + (parameters.cc !== void 0 ? "&cc=" + this.encodeToHtml(parameters.cc) : "") + (parameters.bcc !== void 0 ? "&bcc=" + this.encodeToHtml(parameters.bcc) : "") + (bodyContent.innerText.length !== 0 ? "&body=" + this.encodeToHtml(bodyContent.innerText) : "");
          const mailToButton = rootEl.createEl("div", { cls: "email-block-mailto" }).createEl("a", { href: data, text: "Mailto" });
          (0, import_obsidian.setIcon)(mailToButton, "mail");
        }
      } catch (error) {
        el.createEl("h3", { text: error });
      }
    });
  }
  readParameters(yamlString, ctx) {
    if (yamlString.contains("[[") && !yamlString.contains('"[[')) {
      yamlString = yamlString.replace("[[", '"[[');
      yamlString = yamlString.replace("]]", ']]"');
    }
    let extraBody = "";
    if (yamlString.contains("---")) {
      let data = yamlString.split("---");
      yamlString = data[0];
      extraBody = data[1];
    }
    const parameters = (0, import_obsidian.parseYaml)(yamlString);
    parameters.to = this.fixAddress(parameters.to);
    parameters.cc = this.fixAddress(parameters.cc);
    parameters.bcc = this.fixAddress(parameters.bcc);
    if (parameters.subject == void 0) {
      parameters.subject = "";
    }
    if (parameters.showmailto == void 0) {
      parameters.showmailto = true;
    }
    if (parameters.body === void 0) {
      parameters.body = extraBody;
    }
    if (parameters.variables === void 0) {
      parameters.variables = {};
    }
    const sourceFile = this.app.metadataCache.getFirstLinkpathDest(ctx.sourcePath, "");
    if (sourceFile != null) {
      const sourceCache = this.app.metadataCache.getFileCache(sourceFile);
      if (sourceCache != null) {
        if (sourceCache.frontmatter != void 0) {
          for (const [key, value] of Object.entries(sourceCache.frontmatter)) {
            parameters.variables[key] = value.toString();
          }
        }
      }
    }
    return parameters;
  }
  fixAddress(address) {
    if (address === void 0) {
      return void 0;
    }
    let fixedAddress = address.replace(/\s/g, "").replace(";", ",");
    return fixedAddress;
  }
  renderAddress(address) {
    return address.split(",").join(", ");
  }
  async renderBody(bodyContentEl, bodyContent, variables, ctx) {
    if (bodyContent === void 0) {
      return;
    }
    if (bodyContent.startsWith("[[")) {
      bodyContent = bodyContent.substring(2, bodyContent.length - 2);
      const mdFile = this.app.metadataCache.getFirstLinkpathDest(bodyContent, ctx.sourcePath);
      if (mdFile != null) {
        let mdContent = await this.app.vault.read(mdFile);
        for (const [variable, value] of Object.entries(variables)) {
          if (value != void 0) {
            mdContent = mdContent.replace("{{" + variable + "}}", value);
          }
        }
        await import_obsidian.MarkdownRenderer.renderMarkdown(mdContent, bodyContentEl, mdFile.path, new import_obsidian.Component());
      }
    } else {
      for (const [variable, value] of Object.entries(variables)) {
        if (value != void 0) {
          bodyContent = bodyContent == null ? void 0 : bodyContent.replace("{{" + variable + "}}", value);
        }
      }
      let lines = bodyContent.split("\n");
      lines.forEach((line) => {
        bodyContentEl.createEl("div", { cls: "email-block-body-line", text: line });
      });
    }
  }
  encodeToHtml(rawStr) {
    if (rawStr === void 0) {
      return "";
    }
    return encodeURIComponent(rawStr);
  }
  onunload() {
    console.log("Unloading email plugin...");
  }
};