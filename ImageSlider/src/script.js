imageElement = document.getElementById("sliderImage");

image = ["./src/img/0.jpg", "./src/img/1.jpg", "./src/img/2.jpg", "./src/img/3.jpg"];
let imageIndex = 0;

function render() {
  if (!imageElement) return;
  imageElement.src = image[imageIndex];
  const badge = document.getElementById("imageIndex");
  if (badge) badge.innerText = `${imageIndex + 1} / ${image.length}`;
}

function nextImage() {
  if(imageIndex >= (image.length - 1)) imageIndex = 0;
  else imageIndex = (imageIndex + 1);
  render();
}

function prevImage() {
  if(imageIndex <= 0) imageIndex = image.length;
  imageIndex = (imageIndex - 1);
  render();
}

document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});
render();