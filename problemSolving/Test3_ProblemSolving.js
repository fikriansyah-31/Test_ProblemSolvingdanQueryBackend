function timeConversion(s) {
    const isPM = s.includes('PM');
    const timeArray = s.slice(0, 8).split(':');
  
    let hours = parseInt(timeArray[0]);
    const minutes = timeArray[1];
    const seconds = timeArray[2];
  
    if (isPM && hours < 12) {
      hours += 12;
    } else if (!isPM && hours === 12) {
      hours = 0;
    }
  
    const militaryTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    return militaryTime;
  }
  
  
  const inputTime = '07:05:45PM';
  
  const militaryTime = timeConversion(inputTime);
  
  console.log(militaryTime); 
  