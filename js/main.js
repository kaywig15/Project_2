async function displayData(searchTerm) {
  const giphyApi = "H2Jye2cTqSbWrfpwWSoSG626gMWnfGSK";
  const endPointGet = `https://api.giphy.com/v1/gifs/search?api_key=H2Jye2cTqSbWrfpwWSoSG626gMWnfGSK&q=${searchTerm}&limit=50&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`;

  try {
    const response = await fetch(endPointGet);
    if (!response.ok) {
      throw new Error("Network response was not successful");
    }
    let data = await response.json();
    let section_image = document.getElementById("section_image");
    section_image.innerHTML = "";

    data.data.forEach((element) => {
      const newImage = document.createElement("img");
      newImage.src = element.images.original.url;
      newImage.className = "giphy-img";
      section_image.appendChild(newImage);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.getElementById("searchButton").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchTerm").value;
  if (searchTerm) {
    displayData(searchTerm);
  } else {
    alert("Please enter a search term");
  }
});
