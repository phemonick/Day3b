
Array.prototype.toTwenty = function(){
   //f(this)
    for(var i = 1; i <= 20; i++){
        this[0]=1;
        this[i]=++i;
    }

   return this;
}

var oneToTwenty = [].toTwenty();

console.log(oneToTwenty[1]);

Array.prototype.toForty = function(){
  
    for(var i =2; i <= 40; i += 2){
       this[0]=2;
        this.push(i);
    }
   return this;
}

var twoToForty = [].toForty();

console.log(twoToForty[19]);



Array.prototype.toOneThousand = function(){
  
    for(var i =10; i <= 1000; i += 10){
       this[0]=10;
        this.push(i);
    }
   return this;
}

var tenToOneThousand = [].toOneThousand();

console.log(oneToTwenty[0]);


Array.prototype.search = function(d){ //Create a function search to implement binary search
  var minIndex= 0;
  var count = 0;
  var no = 0;
  maxIndex=this.length - 1;
  len=this.length;
  midIndex = Math.floor((maxIndex + minIndex) / 2); // findthe value of the element of the array at middle index
      while((this[midIndex] !== d) && (minIndex < maxIndex)){
          if (d < this[midIndex]){
              maxIndex = midIndex- 1;
          } else if (d === this[minIndex]){
            return count;
          } else if (d > this[midIndex]){
              minIndex = midIndex + 1;
          }
          midIndex = Math.floor((maxIndex + minIndex)/2);
          count++

      }
      if (this[midIndex] == d){
        return {'count':count,'index': midIndex-1,'length':len};
      }
      else{
        return {'count':count,'index': -1,'length': len
      };
    }}
    
console.log( tenToOneThousand.search(40))
module.exports = Array.prototype;
