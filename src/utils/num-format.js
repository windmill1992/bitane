module.exports = {
    numFmt: function(num, flag) {
        let temp = '', temp2 = '', arr = [];
        if(!num || num.toString().trim() == ''){
            return 0;
        }else{
            if(num < 1){
                num = parseFloat(num).toFixed(8);
            }else{
                num = parseFloat(parseFloat(num).toFixed(2));
            }
            num = num.toString();
            if(num.indexOf('.') > -1){
                temp2 = num.split('.')[1];
                num = num.split('.')[0];
            }
            arr = num.split('').reverse();
            for(let i=0;i<arr.length;i++){
                temp += arr[i];
                if((i + 1) % 3 == 0 && i < arr.length - 1){
                    temp += ',';
                }
            }
            if(flag == 1){
                temp2 = '';
            }
            return temp.split('').reverse().join('') + (temp2 ? ('.' + temp2) : '');
        }
    }
}