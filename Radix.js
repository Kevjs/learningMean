function radix(arr){
    let buckets;
    var index = 1;
    var temp = true;
    while(temp){
        buckets = [[],[],[],[],[],[],[],[],[],[]];
        temp = false;
        for(let i = 0; i < arr.length; i++){
            let num = arr[i];
            num = Math.floor(num/index);
            if(num > 9){
                temp = true;
            }
            num = num%10;
            buckets[num].push(arr[i]);
        }
        var arr = []
        for(let i = 0; i < 10; i++){
            arr.push(...buckets[i]);
        }
        index *= 10;
    }
    console.log(arr);
}

radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([6,19,4,123,9,29,51,88,55,1111,13]);
radix([1000, 10000000, 100, 10000]);