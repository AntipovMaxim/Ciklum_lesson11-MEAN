export default function(signService, $location){
	this.name = '';
	this.password = '';
	this.error = false;
    this.disabled = false;
	
    
	this.register = function () {
      
      this.disabled = true;

      signService.register(this.name, this.password)
        
        .then((r) => {
         
          $location.path('/signin');
          this.disabled = false;
          
        })
       
        .catch((e) => {
          this.error = true;
          this.errorMessage = "User with such data is already registered!";
          this.disabled = false;
          console.log(e)
          
        });
 
}

}