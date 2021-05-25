// Navigation

const mainNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".page-header__toggle");

mainNav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
});

// Slider

const min = "0";
const max = "100";

const range = document.querySelector(".range");
const targetText = document.querySelector(".slider__hint span");
targetText.textContent = `${range.value}%`;
const targetDivider = document.querySelector(".slide-divider");
targetDivider.style.left = "50%";
const targetSlider = document.querySelector(".slide--target");
targetSlider.style.right = "50%;";
const topSlider = document.querySelector(".slide--top");
topSlider.style.left = "50%";

const targetBeforeButton = document.querySelector(".slider-button--before");
const targetAfterButton = document.querySelector(".slider-button--after");

function getValue(value) {
  const element = "%";
  const result = String(100-value);
  return result + element;
}

function takeValue() {
  const element2 = "%";
  const result2 = String(0 + range.value);
  return result2 + element2;
}

range.addEventListener("input", (event) => {
  targetText.textContent = `${range.value}%`;
  targetDivider.style.left = `${range.value}%`;
  targetSlider.style.right = getValue(range.value);
  topSlider.style.left = takeValue();
});

targetAfterButton.addEventListener("click", (event) => {
  range.value = max;
  targetText.textContent = `${max}%`;
  targetDivider.style.left = `${max}%`;
  targetSlider.style.right = getValue(max);
  topSlider.style.left = takeValue(min);
});

targetBeforeButton.addEventListener("click", (event) => {
  range.value = min;
  targetText.textContent = `${min}%`;
  targetDivider.style.left = `${min}%`;
  targetSlider.style.right = getValue(min);
  topSlider.style.left = takeValue(max);
});

// Mobile slider

const slide = document.querySelector(".slide");
const slideTop = document.querySelector(".slide--top");
const slideTarget = document.querySelector(".slide--target");
const sliderButtonBefore = document.querySelector(".slider-button--before");
const sliderButtonAfter = document.querySelector(".slider-button--after");
const slideToggle = document.querySelector(".toggle-control__button");


slideTarget.classList.add("slide--hidden-mobile");

sliderButtonBefore.addEventListener('click', (event) => {
  slideTop.classList.remove("slide--hidden-mobile");
  slideToggle.classList.remove("toggle-control__button--after");
  slideTarget.classList.add("slide--hidden-mobile");
  slideToggle.classList.add("toggle-control__button--before");
})

sliderButtonAfter.addEventListener('click', (event) => {
  slideTarget.classList.remove("slide--hidden-mobile");
  slideToggle.classList.remove("toggle-control__button--before");
  slideTop.classList.add("slide--hidden-mobile");
  slideToggle.classList.add("toggle-control__button--after");
})
