function getFileAsDataURI(fileType) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = fileType === "audio" ? "audio/*" : "image/*";
  return new Promise((resolve, reject) => {
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) {
        reject("No file selected");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(`Error reading file: ${error}`);
      };

      reader.readAsDataURL(file);
    });
    input.click();
  });
}
