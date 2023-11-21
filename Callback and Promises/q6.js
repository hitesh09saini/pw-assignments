function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data from API:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  
  fetchDataFromAPI();
  