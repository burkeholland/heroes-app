const baseAPI = '/api';

const heroService = {
  async get() {
    let response = await fetch(`${baseAPI}/heroes`);
    let json = await response.json();

    return json;
  },

  async create(hero) {
    let response = await fetch(`${baseAPI}/hero`, {
      method: 'PUT',
      body: JSON.stringify(hero),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    let json = response.json();

    return json;
  },

  async update(hero) {
    let response = await fetch(`${baseAPI}/hero`, {
      method: 'POST',
      body: JSON.stringify(hero),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    let json = response.json();

    return json;
  },

  async destroy(hero) {
    let response = await fetch(`${baseAPI}/hero/${hero.id}`, {
      method: 'DELETE'
    });
    let json = await response.json();

    return json;
  }
};

export default heroService;
