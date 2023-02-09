var data = {
    odd : [],
    even : [],
    setter함수 : function(...x){
        x.forEach(i=>{
            if(i%2==0){
                this.even.push(i);
            }
            else{
                this.odd.push(i);
            }
        });
    },
    get getter함수(){
        return[...this.odd, ...this.even].sort()
    }
}
data.setter함수(1,2,3,4,5)
console.log(data.getter함수)