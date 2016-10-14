import angular from 'angular';
import Navbar from './components/navbar/navbar';
import Rooms from './components/rooms/rooms';
import Room from './components/room/room';
import Game from './components/game/game';

const components = 'app.components';

angular.module(components, [])
    .component('navbar', Navbar)
    .component('rooms', Rooms)
    .component('room', Room)
    .component('game', Game)
;

export default components;