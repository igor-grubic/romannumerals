import romanNumeralsService from '../services/romanNumerals.js';
import messaging from '../messaging';

/**
 * @desc getRomanNumerals
 * Convert number to it's roman numeral rappresentation
 *
 * @param req {Object} The request.
 * @param res {Object} The response.
 * @param req.query.query {String} The number to convert.
 * @param {Function} next
 * @return {undefined}
 *
 * @example
     http://localhost:8080/romannumerals?query=123
 */
const getRomanNumerals = async (req, res, next) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res
        .status(400)
        .send('Please specify the query parameter: /romannumerals?query={number}');
    }
    if (isNaN(query)) {
      return res.status(400).send(romanNumeralsService.invalidInputMessage);
    }

    const serviceRes = romanNumeralsService.convertFromArabic(parseInt(query));

    if (serviceRes.status === messaging.status.success) {
      return res.status(200).send({query: parseInt(query), roman: serviceRes.message});
    } else {
      return res.status(messaging.statusCodes[serviceRes.status]).send(serviceRes.message);
    }
  } catch (e) {
    next(e);
  }
};

export default {
  getRomanNumerals,
};
