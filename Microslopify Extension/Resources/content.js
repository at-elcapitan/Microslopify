const storage = typeof browser !== "undefined" ? browser.storage.local : null;

let config = {
    microslop: "false",
    sloffice: "false",
    slopya: "false",
    slopilot: "false"
};

function loadData() {
    if (!storage) return;

    storage.get(["microslop", "slopilot", "slopya", "sloffice"]).then((data) => {
        config.microslop = data.microslop ?? false;
        config.slopilot = data.slopilot ?? false;
        config.slopya = data.slopya ?? false;
        config.slopilot = data.sloffice ?? false;
    });
}

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;

        if (config.sloffice) {
            text = text.replace(/Microsoft Office/g, "Microslop Sloffice");
        }

        if (config.microslop) {
            text = text.replace(/Microsoft/g, "Microslop");
        }

        if (config.slopilot) {
            text = text.replace(/Copilot/g, "Slopilot");
        }

        if (config.slopya) {
            text = text.replace(/Satya Nadella/g, "Slopya Nutella");
        }

        node.textContent = text;
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(replaceText);
    }
}

loadData();
replaceText(document.body);