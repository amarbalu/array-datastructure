// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Array - DataStructures</h1>`;

class MyArray {
  constructor(){
    this.main={},
    this.length=0;
  }
  push(value){ //O[1]
    this.main[this.length]=value;
    this.length++;
    return this.length;
  }
  pop(){ //O[1]
    const value=this.main[this.length];
    delete this.main[this.length];
    this.length--;
    return value;
   
  }
  shift(){ //O[n]
    for(let i=0;i<this.length-1;i++){
      this.main[i]=this.main[i+1]
    }
    delete this.main[this.length-1]
    this.length--;
    return this.main[0];
    }
   unshift(value){ //O[n]
       for(let i=1;i<=this.length;i++){
      this.main[i]=this.main[i-1]
    }
    this.main[0]=value;
      this.length++;
    return this.length;
    
  }
}


const array = new MyArray();
array.push(1);
array.shift()
array.unshift(2);
console.log(array)