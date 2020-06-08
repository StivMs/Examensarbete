function addingImages(limit) {
    for (var i = 1; i <= limit; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "../images/" + i + ".jpg");
        image.setAttribute("height", "380px");
        image.setAttribute("width", "420px");
        document.querySelector(".gallery").appendChild(image);
    }
}

