const counterInput = document.getElementById("counter_books");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const totalPriceElement = document.getElementById("total_price");
const priceBook = document.getElementById("book_price");

function updateTotalPrice() {
    const bookPrice = Number(priceBook.innerText);
    const quantity = Number(counterInput.value);
    if (isNaN(bookPrice) || isNaN(quantity)) {
        // Handle invalid input (e.g., non-numeric values)
        totalPriceElement.textContent = "Invalid input";
      } else {
        totalPriceElement.textContent = (bookPrice * quantity).toFixed(2);
      }  
    }
  counterInput.addEventListener('input', () => {
    if (counterInput.value <= 0) {
      counterInput.value = 1;
    } else if (counterInput.value > 42) {
      counterInput.value = 42;
    }
    updateTotalPrice();
  });
  
  increaseBtn.addEventListener('click', () => {
    counterInput.stepUp();
    updateTotalPrice();
  });
  
  decreaseBtn.addEventListener('click', () => {
    counterInput.stepDown();
    updateTotalPrice();
  });
