import angular from 'angular';
import Navbar from './components/navbar/navbar';
import Rooms from './components/rooms/rooms';
import Room from './components/room/room';

const components = 'app.components';

angular.module(components, [])
    .component('navbar', Navbar)
    .component('rooms', Rooms)
    .component('room', Room)
;

export default components;