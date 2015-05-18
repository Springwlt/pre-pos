function count_same_elements(collection) {
    var result = [];
    var count;
    for(var i = 0; i < collection.length; i ++) {
         var exist = false;
         var element =  collection[i].length <1 ?  collection[i]:collection[i].substring(0,1);
         var num_element = collection[i].length > 2 ? num_element=parseInt(collection[i].substring(2)) : 1;
         for(var j = 0; j < result.length; j++) {
               if(element == result[j].key){
                       result[j].count += num_element;
                       exist = true;
               }
         }
            if(!exist) {
                 result.push({key: element, count: num_element});
             }
   }
   return result;
}

module.exports = count_same_elements;
