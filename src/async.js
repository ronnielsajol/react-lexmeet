function delay(time) {
    return new Promise((resolve, reject) => {
      if (isNaN(time)) {
        reject(new Error('Invalid time'));
      } else {
        setTimeout(() => {
          resolve(`Delay complete after ${time} milliseconds`);
        }, time);
      }
    });
  }
  
  async function runDelay() {
    try {
      const result = await delay(2000);
      console.log(result);
    } catch (error) {
      console.error('Error delaying function', error);
    }
  }
  
  runDelay();
  