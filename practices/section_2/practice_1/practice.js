function count_same_elements(collection) {
    var a_commom=[];
    var e_commom=[];
    var h_commom=[];
    var t_commom=[];
    var f_commom=[];
    var c_commom=[];
    var g_commom=[];
    var b_commom=[];
    var d_commom=[];
    var array=[];
    var obj = {};
    var obja = {},obje = {},objh={},objt={},objf={},objc={},objg={},objb={},objd={};
    for(var i = 0; i < collection.length; i++){
        if(collection[i]=='a'){
                 a_commom.push(collection[i]);
        }
        else if(collection[i]=='e'){
                   e_commom.push(collection[i]);
        }
        else if(collection[i]=='h'){
                  h_commom.push(collection[i]);
        }
        else if(collection[i]=='t'){
                  t_commom.push(collection[i]);
        }
        else if(collection[i]=='f'){
                    f_commom.push(collection[i]);
        }
        else if(collection[i]=='c'){
                   c_commom.push(collection[i]);
        }
        else if(collection[i]=='g'){
                   g_commom.push(collection[i]);
        }
        else if(collection[i]=='b'){
                     b_commom.push(collection[i]);
        }
        else if(collection[i]=='d'){
                  d_commom.push(collection[i]);
        }
    }
    obja.key='a';
    obja.count=a_commom.length;
    array.push(obja);

    obje.key='e';
    obje.count=e_commom.length;
    array.push(obje);

    objh.key='h';
    objh.count=h_commom.length;
    array.push(objh);

    objt.key='t';
    objt.count=t_commom.length;
    array.push(objt);

    objf.key='f';
    objf.count=f_commom.length;
    array.push(objf);

    objc.key='c';
    objc.count=c_commom.length;
    array.push(objc);

    objg.key='g';
    objg.count=g_commom.length;
    array.push(objg);

    objb.key='b';
    objb.count=b_commom.length;
    array.push(objb);

    objd.key='d';
    objd.count=d_commom.length;
    array.push(objd);



    return array;
}
module.exports = count_same_elements
