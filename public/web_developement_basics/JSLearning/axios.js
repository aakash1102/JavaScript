import axios from 'axios';
async function getUser() {
    try {
      const response = await axios.get('https://swapi.dev/api/people/1');
      console.log(response.data.name);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();