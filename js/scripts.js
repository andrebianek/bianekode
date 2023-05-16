countdown()

function countdown()
{
  // Start date
  const startDate = new Date('October 28, 2021 00:00:00');

  // Get the start element
  const startElement = document.getElementById('cdBegin');

  // Update every second
  setInterval(updateCountdown, 1000);

  function updateCountdown() 
  {
    // Current date and time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - startDate;

    // Convert milliseconds to days, minutes, and seconds
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Display the result
    startElement.innerHTML = `It began ${days} days ago.`;
  }

  // End date
  var finishDate = new Date("Feb 18, 2025 12:00:00").getTime();

  // Get the end element
  const endElement = document.getElementById('cdEnd');

  // Update the countdown every second
  var x = setInterval(function() 
  {
    // Current date and time
    var currentDate = new Date().getTime();

    // Calculate the time difference in milliseconds
    var timeDiff = finishDate - currentDate;

    // Time calculations
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the result
    endElement.innerHTML = `And it will end in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;

    if (timeDiff < 0) 
    {
      clearInterval(x);
      endElement.innerHTML = "FREEDOM";
    }
  }, 1000);
}