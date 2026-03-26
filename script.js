const fileInput = document.getElementById("fileElem");
const dropArea = document.getElementById("drop-area");

fileInput.addEventListener("change", handleFiles);

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.background = "rgba(255,255,255,0.2)";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.background = "transparent";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.background = "transparent";
    const files = e.dataTransfer.files;
    handleFiles({ target: { files: files } });
});

function handleFiles(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById("score-text").innerText =
            "Uploaded: " + file.name;

        // Auto-generate score after upload
        setTimeout(generateScore, 1000);
    }
}