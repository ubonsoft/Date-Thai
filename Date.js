function getDateTime(){
    var now = new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Bangkok',
      hour12 : false,
      formatMatcher : "basic"
    });
    let currentDate = now;
    return currentDate;
}
console.log(getDateTime());
