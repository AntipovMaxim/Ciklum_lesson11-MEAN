export default function ($http, $q){

	 this.user = null;

     this.isLoggedIn = function() {
      if(user) {
        return true;
      } else {
        return false;
      }
    }





    this.getUserStatus = function() {
     
      return $http.get('/user/status')
      // handle success
      .success(function (data) {
        if(data.status){
          user = true;
        } else {
          user = false;
        }
      })
      // handle error
      .error(function (data) {
        user = false;
      });
    }

    this.login = function(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/user/signin',
        {username, password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    this.logout = function() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/user/logout')
        // handle success
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    this.test = 'test';

    this.register = function(username, password){

    let deferred = $q.defer();



    $http.post('/user/signup', {username: username, password: password})

      .then(

        (res) => {

          if(res.status === 200 && res.data.status) {

            deferred.resolve();

          } else {

            deferred.reject();

          }

        }, 

        (res) => {

          deferred.reject();

        }

      );

    return deferred.promise;

  }


}