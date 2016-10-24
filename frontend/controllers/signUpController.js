export default function(signService, $location){
	this.name = '';
	this.password = '';
	
    console.log(signService.test)
	

	this.register = function () {

      // initial values
      this.error = false;
      this.disabled = true;

      // call register from service
      signService.register(this.name, this.password)
        // handle success
        .then(function () {
          $location.path('/signin');
          this.disabled = false;
          console.log('signUp')
          
        })
        // handle error
        .catch(function (e) {
          this.error = true;
          this.errorMessage = "Something went wrong!";
          this.disabled = false;
          console.log(e)
          
        });
  

   
}

}