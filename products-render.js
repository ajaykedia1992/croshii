const grid = document.getElementById("productsGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.images[product.defaultColor]}" alt="${product.name}">
    <h3>${product.name}</h3>
    <small class="product-id">ID: ${product.id}</small>
    <span>₹${product.price}</span>
  `;

  card.addEventListener("click", () => openModal(product));
  grid.appendChild(card);
});
