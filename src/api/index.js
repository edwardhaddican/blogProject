import axios from 'axios';

const BASE = 'http://clever-neumann-583.herokuapp.com/'

export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

