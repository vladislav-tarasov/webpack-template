import logo from 'components/hello';

const app = {
  app: document.getElementById('app'),

  render() {
    const logoComponent = logo.render();

    this.app.append(logoComponent);
  },
};

export default app;
