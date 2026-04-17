const storage = typeof browser !== "undefined" ? browser.storage.local : null;

class ReplaceableText {
    constructor(searchFor, convertation, defaultEnabled = false) {
        this.configName = convertation.replaceAll(' ', '');
        this.labelContainer, this.checkbox = null;
        this.defaultEnabled = defaultEnabled;
        this.convertation = convertation;
        this.searchFor = searchFor;
        this.enabled = null;
    }

    createContainer() {
        if (this.enabled === null) {
            return;
        }

        this.labelContainer = document.createElement("label");
        this.checkbox = document.createElement("input");

        this.checkbox.type = "checkbox";
        this.checkbox.checked = this.enabled;

        this.labelContainer.appendChild(this.checkbox);
        this.labelContainer.append(this.searchFor + " → " + this.convertation);
    }

    async loadConfigOrDefault() {
        if (typeof storage === 'undefined') {
            console.log("Unable to load config: storage unavailable");
            this.enabled = this.defaultEnabled;
            return;
        }

        try {
            const data = await storage.get(this.configName);

            if (data && data[this.configName] !== undefined) {
                this.enabled = data[this.configName];
                return;
            }

            this.enabled = this.defaultEnabled;
        } catch (e) {
            console.log(e);
            this.enabled = this.defaultEnabled;
        }
    }

    async save() {
        if (typeof storage === 'undefined') return;

        this.enabled = this.checkbox.checked;
        await storage.set({ [this.configName]: this.enabled });
    }

    convert(textNode) {
        if (!this.enabled || textNode.nodeType !== Node.TEXT_NODE) {
            return;
        }

        const escaped = this.searchFor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');

        textNode.textContent = textNode.textContent.replace(
            regex,
            this.convertation
        );
    }
}

const defaultReplaceables = [
    new ReplaceableText(
        "Microsoft Office",
        "Microsfop Sloffice",
        false
    ),
    new ReplaceableText(
        "Microsoft",
        "Microslop",
        true
    ),
    new ReplaceableText(
        "Copilot",
        "Slopilot",
        false
    ),
    new ReplaceableText(
        "Satya Nadella",
        "Slopya Nutella",
        true
    )
]