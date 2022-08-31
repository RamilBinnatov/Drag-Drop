let uploadBtn = document.querySelector("button");
let table = document.querySelector(".table");   

uploadBtn.addEventListener("click", function () {
    this.nextElementSibling.click();
})


uploadBtn.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;

            table.lastElementChild.innerHTML += `<tr>
            <td>${file.size/1024} Kb</td>
            <td>${file.name}</td>
            <td><img src="${base64}" width="100px" height="100px" alt=""></td>
          </tr>`

        }

        reader.readAsDataURL(file)

    }
})

