import angular from 'angular';
import AuthService from './services/auth.service'
import SocketService from './services/socket.service'

const services = 'app.services';

angular.module(services, [])
    .service('AuthService', AuthService)
    .service('SocketService', SocketService)
;

export default services;