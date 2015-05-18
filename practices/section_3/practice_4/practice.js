function create_updated_collection(collection_a, object_b) {
    var collection_c = [];
    var count;
    for(var i = 0; i < collection_a.length; i ++) {
         var exist = false;
         var element =  collection_a[i].length <1 ?  collection_a[i]:collection_a[i].substring(0,1);
         var num_element = collection_a[i].length > 2 ? num_element=parseInt(collection_a[i].substring(2)) : 1;
         for(var j = 0; j < collection_c.length; j++) {
               if(element == collection_c[j].key){
                       collection_c[j].count += num_element;
                       exist = true;
               }
         }
            if(!exist) {
                 collection_c.push({key: element, count: num_element});
             }
   }
   for(var i = 0;i < collection_c.length; i++){
       for(var j = 0; j< object_b.value.length; j++){
              if(collection_c[i].key == object_b.value[j]){
                     var k=parseInt(collection_c[i].count/3)
                           collection_c[i].count -= k;
                }
        }
  }
 return collection_c;
}

module.exports = create_updated_collection;
