import logoImg from 'assets/peter.jpg';
import 'styles/hello/styles.scss';

import cloneTemplate from 'js/utils/cloneTemplate';

const hello = {
  logoTemplate: cloneTemplate('logo-template'),

  get logo() {
    return this.logoTemplate.querySelector('.logo');
  },

  get toggleThemeButton() {
    return this.logoTemplate.querySelector('.button');
  },

  render() {
    this.logo.src = logoImg;
    this.logo.alt = 'logo';

    this.toggleThemeButton.onclick = () => {
      const theme = document.body.getAttribute('data-theme');

      document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    };

    return this.logoTemplate;
  },
};

export default hello;
