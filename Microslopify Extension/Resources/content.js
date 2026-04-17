async function initReplaceables() {
    for (const replaceable of defaultReplaceables) {
        await replaceable.loadConfigOrDefault();
    }
}

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        for (const replaceable of defaultReplaceables) {
            replaceable.convert(node);
        }
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        for (const child of node.childNodes) {
            replaceText(child);
        }
    }
}

(async () => {
    await initReplaceables();
    replaceText(document.body);
})();
