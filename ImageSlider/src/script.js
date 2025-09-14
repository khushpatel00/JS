imageElement = document.getElementById("sliderImage");

image = ["./src/img/0.jpg", "./src/img/1.jpg", "./src/img/2.jpg", "./src/img/3.jpg"];
let imageIndex = 0;
function nextImage() {
  if (imageIndex < image.length) {
    //     console.log(imageIndex, image[imageIndex]);
    if (imageIndex <= image.length) imageIndex++;
  }
  if (image.length == imageIndex || imageIndex >= image.length) imageIndex = 0;

  //   console.log("final =", imageIndex, image[imageIndex]);
}
function prevImage() {
  if (imageIndex < image.length && imageIndex >= 0) {
//     console.log(imageIndex, image[imageIndex]);
    if (imageIndex <= image.length) {
      imageIndex--;
//       console.log("index reduced to", imageIndex);
      if (imageIndex < 0) {
        imageIndex = image.length - 1;
        // console.log("negetive found, setting to", imageIndex);
      }
    }
    return;
  }
  if (imageIndex <= 0 || imageIndex >= image.length) {
    imageIndex = image.length - 1;
//     console.log("2nd if runs");
  }
//   console.log(" final =", imageIndex, image[imageIndex]);
}


document.getElementById("next").addEventListener("click", function() {
  nextImage();
  imageElement.src = image[imageIndex];
  document.getElementById("imageIndex").innerText = imageIndex;
});
document.getElementById("prev").addEventListener("click", function() {
  prevImage();
  imageElement.src = image[imageIndex];
  document.getElementById("imageIndex").innerText = imageIndex;
});

