const modal = document.getElementById("productModal");

function openModal(product) {
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalId").textContent = `ID: ${product.id}`;
  document.getElementById("modalPrice").textContent = `₹${product.price}`;
  document.getElementById("modalDescription").textContent = product.description;

  const modalImage = document.getElementById("modalImage");
  modalImage.src = product.images[product.defaultColor];

  // Colors
  const colorBox = document.getElementById("colorOptions");
  colorBox.innerHTML = "";

  Object.keys(product.images).forEach(color => {
    const dot = document.createElement("span");
    dot.style.background = color;
    dot.onclick = () => modalImage.src = product.images[color];
    colorBox.appendChild(dot);
  });

  // Buttons
  document.getElementById("modalWhatsapp").href =
    `https://wa.me/918058447000?text=${encodeURIComponent(product.waText)}`;

  document.getElementById("modalInstagram").href =
    "https://ig.me/m/croshii_official";

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // 🔒 lock background
}

// Close modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = ""; // 🔓 restore scroll
}

document.getElementById("modalClose").onclick = closeModal;

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
