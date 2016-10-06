import angular from 'angular';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Rooms from './components/rooms/rooms';

const components = 'app.components';

angular.module(components, [])
    .component('home', Home)
    .component('navbar', Navbar)
    .component('rooms', Rooms)
;

export default components;