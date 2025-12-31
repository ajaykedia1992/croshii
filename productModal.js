const modal = document.getElementById("productModal");

function openModal(product) {
  // Modal fields
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalId").textContent = `ID: ${product.id}`;
  document.getElementById("modalPrice").textContent = `₹${product.price}`;
  document.getElementById("modalDescription").textContent = product.description;

  const modalImage = document.getElementById("modalImage");

  // Track selected color
  let selectedColor = product.defaultColor;
  modalImage.src = product.images[selectedColor];

  // Color options
  const colorBox = document.getElementById("colorOptions");
  colorBox.innerHTML = "";

  Object.keys(product.images).forEach(color => {
    const dot = document.createElement("span");
    dot.style.background = color;

    if (color === selectedColor) {
      dot.classList.add("active");
    }

    dot.onclick = () => {
      selectedColor = color;
      modalImage.src = product.images[color];

      // Update active UI
      document
        .querySelectorAll("#colorOptions span")
        .forEach(el => el.classList.remove("active"));
      dot.classList.add("active");

      updateWhatsAppLink();
    };

    colorBox.appendChild(dot);
  });

  // WhatsApp message builder
  function updateWhatsAppLink() {
    const whatsappMessage =
      "Hello Croshii Team,\n\n" +
      "I would like to place an order for the following item:\n\n" +
      "- Product Name: " + product.name + "\n" +
      "- Product ID: " + product.id + "\n" +
      "- Price: ₹" + product.price + "\n" +
      "- Color: " + selectedColor + "\n\n" +
      "Please let me know:\n" +
      "- Availability\n" +
      "- Delivery timeline\n" +
      "- Payment process\n\n" +
      "Thank you";

    document.getElementById("modalWhatsapp").href =
      "https://wa.me/918058447000?text=" + encodeURIComponent(whatsappMessage);
  }


  // Initial WhatsApp link
  updateWhatsAppLink();

  // Instagram
  document.getElementById("modalInstagram").href =
    "https://ig.me/m/croshii_official";

  // Open modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").onclick = closeModal;

// Close on backdrop click
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
