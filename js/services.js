( function() {
    angular.module('services',[])
        .factory('AttendesService',function () {
        
            var attendes =[];
            var addAttende = function (attende){
                attendes.push(attende);
            };

            var removeAttende = function (attendeIndex){
              attendes.splice(attendeIndex,1);  
            };

            return {
                'attendes': attendes,
                'addAttende': addAttende,
                'removeAttende': removeAttende
            };
        
        });
    
    
})();