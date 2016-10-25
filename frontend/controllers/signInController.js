export default function(signService, $location, $rootScope){
	this.name = '';
	this.password = '';
	this.error = false;
    this.disabled;

    this.errorMessage = "";

	
	this.login = function () {
       
       this.disabled = true;

      signService.login(this.name, this.password)
        
        .then( (r) => {
          
          if(r.status == 200){
          	
          	$location.path('/');
            this.disabled = false;
             //emit logging event to header
             $rootScope.$emit( "log", 'log in' );


          }else{
          	  
          	  this.error = true;
	          this.errorMessage = "Invalid username and/or password";
	          this.disabled = false;
          }
          
        })
           
    };


}