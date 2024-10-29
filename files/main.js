async function displayData() {
  const giphyApi = "H2Jye2cTqSbWrfpwWSoSG626gMWnfGSK";
  const endPointGet =
    "https://api.giphy.com/v1/gifs/search?api_key=H2Jye2cTqSbWrfpwWSoSG626gMWnfGSK&q=yes&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clip";

  try {
    const response = await fetch(endPointGet);
    console.log(response);
    let data = await response.json();
    data.data.forEach((element) => {
      let newImage = document.createElement("img");
      newImage.src = element.images.original.url;
      console.log(element.images.original.url);
      newImage.className = "giphy-img";

      let section_image = document.getElementById("section_image");
      console.log(section_image);
      section_image.appendChild(newImage);
    });
  } catch {}
}
displayData();
/*
  fetch(giphyApi).then((response) => {
    if (!response.ok) throw new Error("Network Response Error");
    return response.json();
  });
}
*/
