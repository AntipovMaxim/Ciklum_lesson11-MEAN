export default function(signService, $location){
	this.name = '';
	this.password = '';
	this.error = false;
    this.disabled;

    this.errorMessage = "";


	
	this.login = function () {
       
       this.disabled = true;

      // call login from service
      signService.login(this.name, this.password)
        // handle success
        .then( (r) => {
          // console.log(r)
          

          if(r.status == 200){
          	
          	$location.path('/');
            this.disabled = false;

          }else{
          	  
          	  this.error = true;
	          this.errorMessage = "Invalid username and/or password";
	          this.disabled = false;
          }
          
        })
        // handle error
        // .catch((e) => {
        //   // this.error = true;
        //   this.error = true;
        //   //console.log(e)
        //   this.errorMessage = "Invalid username and/or password";
        //   this.disabled = false;
          
        // });
           
    };


}