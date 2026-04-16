const storage = typeof browser !== "undefined" ? browser.storage.local : null;

let config = {
    microslop: false,
    sloffice: false,
    slopya: false,
    slopilot: false
};

function loadData() {
    if (!storage) return Promise.resolve();

    return storage.get(["microslop", "slopilot", "slopya", "sloffice"])
        .then((data) => {
            config.microslop = data.microslop ?? false;
            config.slopilot = data.slopilot ?? false;
            config.slopya = data.slopya ?? false;
            config.sloffice = data.sloffice ?? false;
        });
}

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        
        if (config.sloffice === true) {
            text = text.replace(/Microsoft Office/g, "Microslop Sloffice");
        }

        if (config.microslop === true) {
            text = text.replace(/Microsoft/g, "Microslop");
        }

        if (config.slopilot === true) {
            text = text.replace(/Copilot/g, "Slopilot");
        }

        if (config.slopya === true) {
            text = text.replace(/Satya Nadella/g, "Slopya Nutella");
        }

        node.textContent = text;
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(replaceText);
    }
}

(async () => {
    await loadData();
    replaceText(document.body);
})();
