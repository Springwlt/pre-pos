function collect_same_elements(collection_a, object_b) {
        var  common= [];
        for (var  i = 0;  i < collection_a.length; i ++){
            for(var j = 0; j < 4; j++){
                if(collection_a [i] ==object_b.value[j]){
                 common.push(collection_a[i]);
                }
            }
        }
       return common;
}

module.exports = collect_same_elements;
