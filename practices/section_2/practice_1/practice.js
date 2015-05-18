function count_same_elements(collection) {
        var result = [];
        var count;
        for(var i = 0; i < collection.length; i ++) {
             var exist = false;

             for(var j = 0; j < result.length; j++) {
                   if(collection[i] == result[j].key){
                           result[j].count++;
                           exist = true;
                   }
             }
                if(!exist) {
                     result.push({key: collection[i], count: 1});
                 }
       }
       return result;
}
module.exports = count_same_elements
