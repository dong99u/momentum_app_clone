/*
const imageWidth = 1920;
const imageHeight = 1080;
const collectionID = 8469893; // Warm Toned Mediterranean(106 photos)
fetch(
  `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`
)
  .then(response => {
    const jsBody = document.querySelector('body');
    jsBody.style = `background-image: url('${response.url}')`;
  })
  .catch(err => {
    console.log(err);
  });
*/



const imageWidth = 1920;
const imageHeight = 1080;
const ACCESS_KEY = "uEGPiaVNgAW9UpC1ULOV9tuBL-Mr9s51rpctuwKtbeg";
const url = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=landscape`;

fetch(url).then(response => response.json())
  .then(data => {
  const jsBody = document.querySelector("body");
  jsBody.style.backgroundImage = `url(${data.urls.full})`;
})