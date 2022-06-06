import request from 'supertest';
import app from '../../server.js';
import romanNumeralsService from '../../services/romanNumerals.js';

describe('GET /romannumerals', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return status code 400 when query parameter not provided', async () => {
    const res = await request(app).get('/romannumerals');

    expect(res.statusCode).toEqual(400);
    expect(res.text).toBe('Please specify the query parameter: /romannumerals?query={number}');
  });

  it('should return status code 400 when query parameter is not a number', async () => {
    const res = await request(app).get('/romannumerals?query=asd');

    expect(res.statusCode).toEqual(400);
    expect(res.text).toBe(romanNumeralsService.invalidInputMessage);
  });

  it('should return status code 500 if service throws error', async () => {
    jest.spyOn(romanNumeralsService, 'convertFromArabic').mockImplementation(() => {
      throw new Error();
    });
    const res = await request(app).get(`/romannumerals?query=123`);

    expect(res.statusCode).toEqual(500);
  });

  it('should return status code 200 when valid query parameter is provided', async () => {
    const number = 123;
    const res = await request(app).get(`/romannumerals?query=${number}`);

    expect(res.statusCode).toEqual(200);
    const messageObject = JSON.parse(res.text);
    expect(messageObject.roman).toEqual(romanNumeralsService.convertFromArabic(number));
    expect(messageObject.query).toEqual(number);
  });
});
