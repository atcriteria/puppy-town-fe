const dogsWrapper = document.getElementById("dogs-wrapper")
let tempData = [
    {
        id: "0000001",
        breed: "boxer",
        price: "$2,500",
        image: "https://static2.bigstockphoto.com/0/2/2/large1500/220603201.jpg"
    },
    {
        id: "0000002",
        breed: "boxer",
        price: "$2,000",
        image: "https://www.rover.com/blog/wp-content/uploads/2021/06/boxxerjack-edited.jpg"
    },
    {
        id: "0000003",
        breed: "boxer",
        price: "$2,750",
        image: "https://i.pinimg.com/originals/d5/7c/a3/d57ca3194d1c475eb2d44905469d2320.jpg"
    },
    {
        id: "0000004",
        breed: "boxer",
        price: "$5,000",
        image: "https://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg"
    },
    {
        id: "0000005",
        breed: "boxer",
        price: "$600",
        image: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
    }
];

const makeDataContainer = (data) => {
    for (let i = 0; i < data.length; i++){
        let wrapper = document.createElement("div");
        wrapper.classList.add("card-wrapper");
        let image = document.createElement("img");
        image.classList.add("card-image");
        image.src = data[i].image;
        let textContainer = document.createElement("div");
        textContainer.classList.add("card-text-wrapper");
        let idPara = document.createElement("p");
        idPara.classList.add("card-id");
        idPara.innerText = data[i].id
        let breedPara = document.createElement("p");
        breedPara.classList.add("card-breed");
        breedPara.innerText = data[i].breed
        let pricePara = document.createElement("p");
        pricePara.classList.add("card-price");
        pricePara.innerText = data[i].price

        textContainer.appendChild(idPara);
        textContainer.appendChild(breedPara);
        textContainer.appendChild(pricePara);
        wrapper.appendChild(image);
        wrapper.appendChild(textContainer);
        dogsWrapper.appendChild(wrapper);
    }
}
makeDataContainer(tempData);
console.log(dogsWrapper);