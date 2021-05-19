// Slider

const min = "0";
const max = "100";

const range = document.querySelector('.range');
const targetText = document.querySelector('.slider__hint span');
targetText.textContent = `${range.value}%`;
const targetDivider = document.querySelector('.slide-divider');
targetDivider.style.left = "50%";
const targetSlider = document.querySelector('.slide--target');
targetSlider.style.right = "50%;";
const topSlider = document.querySelector('.slide--top');
topSlider.style.left = "50%";

const targetBeforeButton = document.querySelector('.slider-button--before');
const targetAfterButton = document.querySelector('.slider-button--after');

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

range.addEventListener('input', (event) => {
  targetText.textContent = `${range.value}%`;
  targetDivider.style.left = `${range.value}%`;
  targetSlider.style.right = getValue(range.value);
  topSlider.style.left = takeValue();
});

targetAfterButton.addEventListener('click', (event) => {
  range.value = max;
  targetText.textContent = `${max}%`;
  targetDivider.style.left = `${max}%`;
  targetSlider.style.right = getValue(max);
});

targetBeforeButton.addEventListener('click', (event) => {
  range.value = min;
  targetText.textContent = `${min}%`;
  targetDivider.style.left = `${min}%`;
  targetSlider.style.right = getValue(min);
});
