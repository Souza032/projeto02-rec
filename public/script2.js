
const modalImage = document.querySelector("#image-disneymod");
const modalName = document.querySelector("#name-disneymod");
const modalid = document.querySelector("#id-disneymod");
const modalqa = document.querySelector("#qa-disneymod");
const modalqb = document.querySelector("#qb-disneymod");
const modaltv = document.querySelector("#qtv-disneymod");




async function disneypers() {
    const resp = await fetch("https://api.disneyapi.dev/characters");
    const data = await resp.json();
    /*  console.log(data.data) */
    /*  const pers = [data.data[0].name] */
    /* console.log(pers) */

    data.data.forEach((name) => {
        length++
        document.getElementById("#disney-list").insertAdjacentHTML("beforeend",
            `<div class="card">
        <img class="image-disney" width="200px"  src=${data.data[length].imageUrl
            } alt=${`Imagem do ${data.data.name}`} />
        <div>
            <h2 class="name-disney">${data.data[length].name}</h2>
            <p class="id-disney"></p>
            <h4>Quantidade de longas metragens</h4>
            <h2 class="name-disney">${data.data[length].films.length}</h2>
            <h4>Quantidade de curtas-metragens</h4>
            <p class="tipo-disney"> <h2 class="name-disney">${data.data[length].shortFilms.length}</h2></p>
            
            
            <h4>Quantidade de programas de TVs</h4>
            <p class="tipo-disney"> <h2 class="name-disney">${data.data[length].tvShows.length}</h2></p>

            <span class="character-id" style="display: none ">${data.data[length]._id}</span>
        </div>
    </div>
    `)

        const cards = document.querySelectorAll(".card");
        const modal = document.querySelector("#modal-overlay");

        console.log(cards)

        cards.forEach((card) => {
            card.addEventListener("click", async function (event) {
                console.log(event)
                  const cardElement = event.path.filter((item) => item.className == "card");
                  const idCard = cardElement[0].children[1].children[6].innerHTML;
                  const resp = await fetch(
                      `https://api.disneyapi.dev/characters`
                  );
                  const data = await resp.json();
      
                  modal.style.display = "flex";
      
                  modalImage.setAttribute("src", data.data[length].imageUrl);
                  modalName = data.data[length].name;
                  modalid.innerText = data.species;
                  modalGender.innerText = data.gender;
                  modalOrigin.innerText = data.origin.name;
                  modalLocation.innerText = data.location.name;
                  modalStatus.innerText = data.status; 
            })

            window.addEventListener("click", function (event) {
                if (!event.target.classList.contains("modal-item")) {
                    modal.style.display = "none";
                }
            });
        }


        )


    })



    window.addEventListener("click", function (event) {
        if (!event.target.classList.contains("modal-item")) {
            modal.style.display = "none";
        }
    });

    window.addEventListener("scroll", function () {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {
            viewMore();
        }
    });


}







disneypers()
