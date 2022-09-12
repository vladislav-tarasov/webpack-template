import logoImg from 'assets/peter.jpg';
import 'styles/hello/styles.scss';

const hello = {
  render() {
    const logoTemplate = document.getElementById('logo-template').content.cloneNode(true);

    const logo = logoTemplate.querySelector('.logo');
    logo.src = logoImg;
    logo.alt = 'logo';

    const button = logoTemplate.querySelector('.button');
    button.onclick = () => {
      const theme = document.body.getAttribute('data-theme');

      document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    };

    return logoTemplate;
  },
};

export default hello;
