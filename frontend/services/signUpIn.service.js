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
      // handle success
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

      // create a new instance of deferred
      // var deferred = $q.defer();

      // send a post request to the server
      return $http.post('/user/signin', {username, password}).then(r => {
       console.log(r)
       this.user = true;
        return r;
      })
      .catch((e) =>{
        console.log(e);
        this.user = false;
        return e;
      })

        

        // handle success
      //   .success(function (data, status) {
      //     if(status === 200 && data.status){
      //       user = true;
      //       deferred.resolve();
      //     } else {
      //       user = false;
      //       deferred.reject();
      //     }
      //   })
      //   // handle error
      //   .error(function (data) {
      //     user = false;
      //     deferred.reject();
      //   });

      // // return promise object
      // return deferred.promise;

    }

    this.logout = function() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/user/logout')
        // handle success
        .success((data) => {
          this.user = false;
          deferred.resolve();
        })
        // handle error
        .error((data) => {
          this.user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    this.test = 'test';

    this.register = function(username, password){

    // let deferred = $q.defer();



    return $http.post('/user/signup', {username, password}).then(r => r);

      // .then(

      //   (res) => {

      //     if(res.status === 200 && res.data.status) {

      //       deferred.resolve();

      //     } else {

      //       deferred.reject();

      //     }

      //   }, 

      //   (res) => {

      //     deferred.reject();

      //   }

      // );

    // return deferred.promise;

  }


}