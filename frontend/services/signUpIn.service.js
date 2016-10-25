export default function ($http, $q){

	 this.user = null;

     this.isLoggedIn = function() {
      if(this.user) {
        return true;
      } else {
        return false;
      }
    }

    

    this.getUserStatus = function() {
     
      return $http.get('/user/status')
      
      .then((r) => {
        if(r.data.status){
          this.user = true;
        } else {
          this.user = false;
        }
      },
         (e) =>{
            this.user = false;
         }
      )
      
          }


    this.login = function(username, password) {

      return $http.post('/user/signin', {username, password}).then(r => {
       this.user = true;
        
        return r;
      })
      .catch((e) =>{
        console.log(e);
        this.user = false;
        
        return e;
      })

    }

    this.logout = function() {

      var deferred = $q.defer();

      $http.get('/user/logout')

        .success((data) => {
          this.user = false;
          deferred.resolve();
        })
        
        .error((data) => {
          this.user = false;
          deferred.reject();
        });

      return deferred.promise;

    }


    this.register = function(username, password){


    return $http.post('/user/signup', {username, password}).then(r => r);


  }


}