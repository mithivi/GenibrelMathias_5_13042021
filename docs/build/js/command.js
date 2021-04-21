const submitInfo = async() => {
  const userInput = document.querySelectorAll(".form__input");

  const contact = {
    firstName: userInput[0].value.toLowerCase(),
    lastName: userInput[1].value.toLowerCase(),
    address: userInput[2].value.toLowerCase(),
    city: userInput[3].value.toLowerCase(),
    email: userInput[4].value.toLowerCase(),
  };
  const productCart = JSON.parse(localStorage.getItem("cart"));
  const products = [];
  for (element of productCart) {
    products.push(element.id);
  }

  orderIdMemomry(await postAPI(contact, products));
};

const postAPI = async(contact, products) => {
  const response = await fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contact, products }),
  });

  return response.json();
};

const orderIdMemomry = (resApi) => {
  localStorage.setItem("contact", JSON.stringify(resApi.contact));
  localStorage.setItem("orderId", JSON.stringify(resApi.orderId));
};