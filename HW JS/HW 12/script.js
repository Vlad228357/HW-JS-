let dragItems = document.querySelectorAll('.itemIngridients');
const size = document.querySelectorAll('.radio')
const dropZone = document.querySelector('.table');
const sauceIds = ["sauceClassic", "sauceBBQ", "sauceRikotta"];
const priceElement = document.getElementById("price");

dragItems.forEach(itemIngridients => {
    itemIngridients.addEventListener('dragstart', handlerDragstart);
    itemIngridients.addEventListener('dragend', handlerDragend)
    itemIngridients.addEventListener('drag', handlerDrag)
});

dropZone.addEventListener('dragenter', handlerDragenter);
dropZone.addEventListener('dragleave', handlerDragleave);
dropZone.addEventListener('dragover', handlerDragover);
dropZone.addEventListener('drop', handlerDrop);


function handlerDragstart(event) {
    event.dataTransfer.setData("dropItem", this.dataset.item);
}

function handlerDragend(event) {
}

function handlerDrag(event) {
}

function handlerDragenter(event) {
    event.preventDefault();
}

function handlerDragleave(event) {
}

function handlerDragover(event) {
    event.preventDefault();
}

// Посчет цены пиццы
dragItems.forEach(item => {
  item.addEventListener("dragend", calculatePrice);
});

function calculatePrice() {
  const selectedItems = Array.from(dragItems).filter(item => item.dataset.selected === "true");

  const sum = selectedItems.reduce((acc, curr) => acc + parseFloat(curr.title), 0);
  
  const price = isNaN(sum) ? 0 : parseInt(sum);
  priceElement.innerHTML = "<p>Цена: " + price + "</p>";
}

dragItems.forEach(item => {
  item.addEventListener("dragstart", function() {
    this.dataset.dragging = "true";
  });
});

dragItems.forEach(item => {
  item.addEventListener("dragenter", function() {
    if (this.dataset.dragging === "true") {
      this.dataset.selected = "true";
    }
  });
});

// Функция дропа элементов
let droppedItems = [];

function handlerDrop(event) {
    event.preventDefault();
    const dragFlag = event.dataTransfer.getData("dropItem");
    const dropItem = document.querySelector(`[data-item="${dragFlag}"`);
    const clone = dropItem.cloneNode(true)
    if (droppedItems.includes(dragFlag)) {
        return alert('Этот элемент уже перенесен!')
    } else {
        droppedItems.push(dragFlag);
        if (sauceIds.includes(dragFlag)) {
        sauceIds.forEach(sauceId => {
        const existingSauce = document.getElementById(sauceId);
            if (existingSauce && existingSauce.parentNode === dropZone) {
                dropZone.removeChild(existingSauce);
          }
          this.append(clone);
        });
        }
      this.append(clone);
    }
}

// Обработчик на кнопку сброса элементов и цены
const resetBtn = document.querySelector('#reset_table');

resetBtn.addEventListener('click', () => {
  const table = document.querySelector('.table');
  const items = table.querySelectorAll('.itemIngridients');

  items.forEach(item => item.remove());
  droppedItems = [];

  const selectedItems = Array.from(dragItems).filter(item => item.dataset.selected === "true");
  selectedItems.forEach(item => {
    item.dataset.selected = "false";
  });
  priceElement.innerHTML = "<p>Цена:</p>";
  
  calculatePrice();
});

// Рандом. перемещение скидки
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const banner = document.querySelector('#banner');

banner.addEventListener('mouseenter', () => {
    banner.style.left = `${random(0, 90)}%`;
    banner.style.top = `${random(0, 90)}%`;
});


// Проверка формы на валидность
const form = document.querySelector('form[name="info"]');
const nameInput = form.querySelector('input[name="name"]');
const phoneInput = form.querySelector('input[name="phone"]');
const emailInput = form.querySelector('input[name="email"]');
const successMessage = document.querySelector('.container')

const submitBtn = form.querySelector('input[name="btnSubmit"]');
submitBtn.addEventListener('click', () => {
  if (validateForm()) {
    window.location.href = "./thank-you.html";
  }
});

function validateForm() {
  if (!validateName(nameInput.value)) {
    alert('Введите корректное имя');
    nameInput.focus();
    return false;
  }

  if (!validatePhone(phoneInput.value)) {
    alert('Введите корректный номер телефона');
    phoneInput.focus();
    return false;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Введите корректный email');
    emailInput.focus();
    return false;
  }

  return true;
}

function validateName(name) {
  return /^[a-zA-Zа-яА-ЯёЁ]{2,}$/.test(name);
}

function validatePhone(phone) {
  return /^\+?3?8?(0\d{9})$/.test(phone);
}

function validateEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}