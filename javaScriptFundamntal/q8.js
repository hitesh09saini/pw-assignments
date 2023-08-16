function daysUntilEvent(startDate) {
    const currentDate = new Date();
    const eventDate = new Date(startDate); 
    const timeDifference = eventDate - currentDate;  
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  
 
  const eventStartDate = '2023-08-31'; 
   

//   console.log( new Date(eventStartDate));
 
  console.log(`There are ${daysUntilEvent(eventStartDate)<=0?0:daysUntilEvent(eventStartDate)} days until the event.`);
  