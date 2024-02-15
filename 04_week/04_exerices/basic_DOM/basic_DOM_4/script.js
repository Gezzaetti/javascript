const form = document.querySelector(".form-container");
//querrySelector() returns the 1st element, ig matches found otherwise returns 'null'.

const priceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const priceBanner = document.querySelector("#totalprice");

  let totalAmount = parseInt(typeSelect.value);
  //parses a string argument and returns an integer//
  for (const item of checkboxes) {
    if (item.checked) {
      totalAmount += parseInt(item.value);
    }

    priceBanner.textContent = `$${totalAmount}`;
  }

  form.addEventListener("change", priceCalc);
};

/*The method addEventListener() works by adding a function, or an object
 */
