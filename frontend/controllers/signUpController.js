export default function(signService, $location){
	this.name = '';
	this.password = '';
	this.error = false;
    this.disabled = false;
	
    
	

	this.register = function () {

      // initial values
      
      this.disabled = true;

      // call register from service
      signService.register(this.name, this.password)
        // handle success
        .then((r) => {
          console.log(r)
          $location.path('/signin');
          this.disabled = false;
          console.log('signUp')
          
        })
        // handle error
        .catch((e) => {
          this.error = true;
          this.errorMessage = "Something went wrong!";
          this.disabled = false;
          console.log(e)
          
        });
  

   
}

}