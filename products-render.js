
const grid = document.getElementById("productsGrid");
const sortSelect = document.getElementById("sortPrice");

function renderProducts(list){
  grid.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<img src="${p.images[p.defaultColor]}" alt="${p.name}">
      <h3>${p.name}</h3><small>ID: ${p.id}</small><br><span>₹${p.price}</span>`;
    card.addEventListener("click", () => openModal(p)); 
    grid.appendChild(card);
  });
}

// Initial render
renderProducts(products);

// Listen to sort changes
sortSelect.addEventListener("change", ()=>{
  let sorted = [...products];
  const sort = sortSelect.value;
  if(sort === "asc") sorted.sort((a,b)=>a.price - b.price);
  else if(sort === "desc") sorted.sort((a,b)=>b.price - a.price);

  renderProducts(sorted);
});
