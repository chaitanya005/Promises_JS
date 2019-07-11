
function testCall(Url){
    return new Promise(function(resolve, reject){

        var request = new XMLHttpRequest();
        request.open('GET',Url);    

        request.onload =  function(){
            if(request.status  == 2000){
                resolve(request.response);
            } else{
                reject(Error(request.statusText));
            }

            request.onerror = function(){
                reject(Error('NetWork Isues'));
            }

            request.send();
        }
  });
}

testCall('https://randomuser.me/api')
.then(function(response){
    console.log('hurray');
}, function(Error){
    console.log('Error there');
});

