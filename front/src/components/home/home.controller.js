export default class HomeController {
  constructor(ExampleService, SocketService){
    this.message = ExampleService.test();
  }
}
HomeController.$inject = ['ExampleService', 'SocketService'];