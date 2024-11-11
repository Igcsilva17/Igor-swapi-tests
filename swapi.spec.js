const request = require('supertest');

describe('Star Wars API Tests', () => {

  // Teste 1: Verificar se é possível buscar planetas
  test('Should fetch planets', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  // Teste 2: Verificar se é possível buscar naves
  test('Should fetch starships', async () => {
    const response = await request('https://swapi.dev/api').get('/starships/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  // Teste 3: Buscar um planeta específico
  test('Should fetch specific planet by ID', async () => {
    const response = await request('https://swapi.dev/api').get('/planets/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine');
  });

  // Teste 4: Verificar busca de filmes
  test('Should fetch films', async () => {
    const response = await request('https://swapi.dev/api').get('/films/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  // Teste 5: Buscar um filme específico
  test('Should fetch specific film by ID', async () => {
    const response = await request('https://swapi.dev/api').get('/films/1/');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('A New Hope');
  });

  // Teste 6: Verificar resposta para rota inexistente (erro)
  test('Should return 404 for an unknown endpoint', async () => {
    const response = await request('https://swapi.dev/api').get('/heroes/');
    expect(response.status).toBe(404);
  });

  // Teste 7: Buscar uma pessoa específica
  test('Should fetch specific person by ID', async () => {
    const response = await request('https://swapi.dev/api').get('/people/1/');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker');
  });

  // Teste 8: Verificar a resposta de veículos
  test('Should fetch vehicles', async () => {
    const response = await request('https://swapi.dev/api').get('/vehicles/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  // Teste 9: Testar busca de naves com ID inexistente
  test('Should return 404 for non-existent starship ID', async () => {
    const response = await request('https://swapi.dev/api').get('/starships/9999/');
    expect(response.status).toBe(404);
  });

  // Teste 10: Verificar se rota de espécies retorna corretamente
  test('Should fetch species', async () => {
    const response = await request('https://swapi.dev/api').get('/species/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });
});
