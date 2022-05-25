import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard_dev_root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container
// and we should export the mount function
export { mount };