const storage = typeof browser !== "undefined" ? browser.storage.local : null;
const microslop = document.getElementById("microslop");
const slopilot = document.getElementById("slopilot");
const sloffice = document.getElementById("sloffice");
const slopya = document.getElementById("slopya");

function loadData() {
    if (!storage) return;

    storage.get(["microslop", "slopilot", "slopya", "sloffice"]).then((data) => {
        microslop.checked = data.microslop ?? false;
        slopilot.checked = data.slopilot ?? false;
        slopya.checked = data.slopya ?? false;
        sloffice.checked = data.sloffice ?? false;
    });
}

function saveData() {
    if (!storage) return;

    storage.set({
        microslop: microslop.checked,
        slopilot: slopilot.checked,
        slopya: slopya.checked,
        sloffice: sloffice.checked
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    document.querySelector(".inputs").addEventListener("change", saveData);
});