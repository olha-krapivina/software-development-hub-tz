"use strict";

var users = [
  {
    id: 1,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 2,
    hotel: "Rosewood Little Dix Bay",
    supplier: "Rosewood",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 3,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 4,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 5,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 6,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 7,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 8,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 9,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
  {
    id: 10,
    hotel: "Grand Hotel du Palais Royal",
    supplier: "Fairmont",
    location: "Paris, France",
    vibe: "Sophisticated",
    perks: "Virtuoso",
    price: "10,5k",
    amenities: "",
  },
];

var tableHTML = document.querySelector("#suppliersProfile");

// function tableContent() - ф-я автоматично додає в таблицю дані про готелі, перебираючи масив
function tableContent(profile) {
  for (var user of users) {
    var trTag = document.createElement("tr");

    trTag.className = "colorless";

    trTag.innerHTML = `
        <td>
          <div class = "hotel">
            <form>
              <div class = "fx-row">
                  <input type="checkbox" id="hotel"
                  <label for="hotel">${user.hotel}</label>
              </div>
            </form>
          </div>
        </td>

        <td>
          <div class = "supplier">
            ${user.supplier}
          </div>
        </td>

        <td>
          <div class = "location">
            ${user.location}
          </div>
        </td>

        <td>
          <div class = "vibe">
            ${user.vibe}
          </div>
        </td>

        <td>
          <div class = "perks">
            <div class="square"></div>
            ${user.perks}
          </div>
        </td>

        <td>
          <div class = "price">
            US$ ${user.price}
          </div>
        </td>

        <td>
          <div class = "amenities">
            <img src="/img/icons_table/jump-rope_svg.svg" alt="jump-rope">
            <img src="/img/icons_table/swimming_svg.svg" alt="swimming">
            <img src="/img/icons_table/pizza_svg.svg" alt="pizza">
          </div>
        </td>
        `;
    profile.appendChild(trTag); // додає в кінець тега tr тег td

    var userName = trTag.querySelector(".first-name");
  }
}
tableContent(tableHTML);
