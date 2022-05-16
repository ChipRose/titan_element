const levelValue = {
  LOW: 0,
  MID: 1000,
  NORMAL: 1500,
  HIGH: 2000,
};

const colorValue = {
  LOW: 'red',
  MID: 'gold',
  HIGHT: 'green',
}

const waterLevelInput = document.querySelector('#element-value');
const elementScale = document.querySelector('#element-scale-range');
const elementIndicator = document.querySelector('#element-indicator');
const elementMinMark = document.querySelector('#element-min-mark');
const elementMaxMark = document.querySelector('#element-max-mark');
const themeForm = document.querySelector('#theme-switch');
const body = document.querySelector('.body');

const setState = (value) => {
  if (value >= levelValue.LOW && value <= levelValue.HIGH) {
    const scaleRange = value * 98 / levelValue.HIGH;

    elementScale.style.height = `${scaleRange}%`;
    elementScale.style.backgroundColor = colorValue.LOW;

    elementIndicator.textContent = value;

    if (value > levelValue.MID && value <= levelValue.NORMAL) {
      elementScale.style.backgroundColor = colorValue.MID;
    } else if (value > levelValue.NORMAL && value <= levelValue.HIGH) {
      elementScale.style.backgroundColor = colorValue.HIGHT;
    }

    if (value > 1900) {
      elementMaxMark.style.display = 'none';
    } else {
      elementMaxMark.style.display = 'block';
    }

    if (value < 210) {
      elementMinMark.style.display = 'none';
    } else {
      elementMinMark.style.display = 'block';
    }
  }

};

const checkEmptyField = (field) => {
  if (field.validity.valueMissing) {
    field.setCustomValidity('Это обязательное поле');
  }
};

const checkValideWaterLevel = (field) => {
  if (+field.value < levelValue.LOW) {
    field.setCustomValidity(`Уровень должен быть больше ${levelValue.LOW}`);
  } else if (+field.value > levelValue.HIGH) {
    field.setCustomValidity(`Максимальный уровень ${levelValue.HIGH}`);
  } else {
    field.setCustomValidity('');
  }
};

setState(waterLevelInput.value);

waterLevelInput.addEventListener('input', () => {
  setState(waterLevelInput.value);
  checkValideWaterLevel(waterLevelInput);
  waterLevelInput.reportValidity();
});

const setTheme = () => {
  body.classList.add('body--light-theme');
  body.classList.remove('body--dark-theme');
  if (themeForm.querySelector('input:checked').id === 'dark-theme') {
    body.classList.remove('body--light-theme');
    body.classList.add('body--dark-theme');
  }
};

setTheme();

themeForm.addEventListener('change', () => {
  setTheme();
})
