function updateTime() {
    const date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const time = hours + ':' + minutes + ':' + seconds;
  
    document.querySelector('.time').textContent = time;
  }
  
  setInterval(updateTime, 1000);
  