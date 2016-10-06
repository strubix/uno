import angular from 'angular';
import ExampleService from './services/example.service'
import SocketService from './services/socket.service'

const services = 'app.services';

angular.module(services, [])
    .service('ExampleService', ExampleService)
    .service('SocketService', SocketService)
;

export default services;