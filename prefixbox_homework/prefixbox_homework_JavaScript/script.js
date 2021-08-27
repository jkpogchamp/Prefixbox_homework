'use strict';

const SALE_CHECKBOX = document.querySelector('.sale');
const PRODUCTS = Array.from(document.querySelectorAll('.product'));
const PRODUCTS_NOT_ON_SALE = PRODUCTS.filter(elem => !elem.querySelector('.product-old-price'));
const SELECT = document.querySelector('.order');

SELECT.addEventListener('change', sortProducts);
SALE_CHECKBOX.addEventListener('click', toggleCheckbox);

function toggleCheckbox() {
	SALE_CHECKBOX.checked ? PRODUCTS_NOT_ON_SALE.forEach(product => product.classList.add('hidden')) : PRODUCTS_NOT_ON_SALE.forEach(product => product.classList.remove('hidden'));
}

function sortProducts() {
	const PRODUCTS_WRAPPER = document.querySelector('.products');
	while (PRODUCTS_WRAPPER.firstChild) {
		PRODUCTS_WRAPPER.removeChild(PRODUCTS_WRAPPER.firstChild)
	}
	if (SELECT.value === '0') sortByPriceAscending().forEach(elem => PRODUCTS_WRAPPER.appendChild(elem));
	else if (SELECT.value === '1') sortByPriceDescending().forEach(elem => PRODUCTS_WRAPPER.appendChild(elem));
	else if (SELECT.value === '2')  sortByAlphabeticalOrder().forEach(elem => PRODUCTS_WRAPPER.appendChild(elem));
	else if (SELECT.value === '3') sortByReverseAlphabeticalOrder().forEach(elem => PRODUCTS_WRAPPER.appendChild(elem));
}

function sortByPriceAscending() {
	return PRODUCTS.sort((a, b) => (Number(a.querySelector('.product-price').innerHTML.replace(/\D/g, '')) > Number(b.querySelector('.product-price').innerHTML.replace(/\D/g, ''))) ? 1 : -1);
}

function sortByPriceDescending() {
	return PRODUCTS.sort((a, b) => (Number(a.querySelector('.product-price').innerHTML.replace(/\D/g, '')) < Number(b.querySelector('.product-price').innerHTML.replace(/\D/g, ''))) ? 1 : -1);
}

function sortByAlphabeticalOrder() {
	return PRODUCTS.sort((a, b) => a.querySelector('.product-name').innerHTML > b.querySelector('.product-name').innerHTML ? 1 : -1);
}

function sortByReverseAlphabeticalOrder() {
	return PRODUCTS.sort((a, b) => a.querySelector('.product-name').innerHTML < b.querySelector('.product-name').innerHTML ? 1 : -1);
}
