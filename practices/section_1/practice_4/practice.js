function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var  common= [];
for (var  i = 0;  i < collection_a.length; i ++){
    for(var j = 0; j < 4; j++){
           if(collection_a[i].key ==object_b.value[j]){
                 common.push(collection_a[i].key);
           }
    }
}
       return common;
}

module.exports = collect_same_elements;
