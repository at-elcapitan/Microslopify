const inputs = document.getElementById("inputs");

async function loadReplaceables() {
    for (const replaceable of defaultReplaceables) {
        await replaceable.loadConfigOrDefault();
        replaceable.createContainer();

        inputs.appendChild(replaceable.labelContainer);
        replaceable.checkbox.addEventListener("change", () => replaceable.save());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadReplaceables();
});