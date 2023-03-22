// INTERFACE is only for typescript
// It allows us to create an array that tell out code what every
// key needs to have has a value, so we can avoid passing wrong information that will not work on the web

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Functionality from '../pages/Functionality';


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    },
    {
      path: "/functionality",
      component: Functionality,
      name: "Functionaloty",
      protected: false
    }
  ]

export default routes