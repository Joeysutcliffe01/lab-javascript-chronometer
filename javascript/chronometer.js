class Chronometer {

  constructor() {
    
    this.currentTime = 0;
    this.sec = 0;
    this.min = 0;
    
    this.intervalId = null;

    console.log();
  }

  start(callback) {

    const myInterval = setInterval(() => {
      this.currentTime++


    }, 1000);

  }
  
  

  

  getMinutes(callback) {
    
    if(this.currentTime === 60){
      this.min++ 
    }

    const minPast = this.min;

    return minPast
  }



  getSeconds(callback) {

    this.sec = this.currentTime

    // console.log(this.sec);

    return this.sec
  }

  computeTwoDigitNumber(value) {

    let num = value

    if(num < 9){

      return "0" + num.toString()
    }else {

      return num.toString()
    }
    
  }

  stop() {
    clearInterval()
  }

  reset() {
    this.currentTime = 0;
    this.sec = 0;
    this.min = 0;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


// console.log(this.currentTime);