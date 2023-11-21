const copyPage = document.querySelector("body.copy");
if (copyPage) {
    const finalMark = document.querySelector(".total p span span");
    let notes = document.querySelectorAll(".notes div p span input")
    let subNotes = document.querySelectorAll(".notes div ul")

    subNotes.forEach(sub => {
        sub.querySelectorAll('li span input').forEach(subInput => {
            subInput.addEventListener("change", () => {
                let subTotal = 0;
                sub.querySelectorAll('li span input').forEach(subInput => {
                    if (subInput.value) {
                        subTotal += parseFloat(subInput.value)
                    }
                })
                sub.parentElement.children[0].querySelector("span input").value = subTotal;
                updateTotalMark();
            })
        })
    });

    function updateTotalMark() {
        let total = 0;
            notes.forEach(point => {
                if (point.value) {
                    total += parseFloat(point.value);
                }
            })
            finalMark.innerHTML = total;
    };

    notes.forEach(point => {
        point.addEventListener("change", () => {
            updateTotalMark();
        })
    });
}

const homePage = document.querySelector("body.home");
if (homePage) {
    
    function changeImg(imageElement, nameAsString) {
        setTimeout(() => {
            imageElement.src = "img/" + nameAsString + ".png";
        }, 1000)
    }
    
    const gridElement = document.querySelectorAll(".grid-container div");
    gridElement.forEach(div => {
        let img = div.querySelector("img");
        let imgNameAsInt = parseInt(img.src.split("/")[img.src.split("/").length - 1].replace(".png",""));
        let number = 0;
        img.src = "img/0.png"
        img.removeAttribute("hidden");
        setInterval(() => {
            if (number < imgNameAsInt + 1) {
                changeImg(img, number.toLocaleString())
                number++
            } else if (imgNameAsInt === 0) {
                changeImg(img, 0);
            }
        }, 50)

        div.addEventListener("click", () => {
            window.location = "lot.html";
        })
    })
    
}

const lotPage = document.querySelector("body.lot");
if (lotPage) {
    const gridElement = document.querySelectorAll(".grid-container div");
    gridElement.forEach(div => {
        div.addEventListener("click", () => {
            window.location = "copy.html";
        })
    })
    
}