export default function(signService){
	this.name = '';
	this.password = '';
	this.error = false;
    this.disabled = true;


	this.login = function () {

      // initial values
      this.error = false;
      this.disabled = true;

      // call login from service
      signService.login(this.name, this.password)
        // handle success
        .then(function () {
          $location.path('/');
          this.disabled = false;
          
        })
        // handle error
        .catch(function () {
          this.error = true;
          this.errorMessage = "Invalid username and/or password";
          this.disabled = false;
          
        });

    };


}