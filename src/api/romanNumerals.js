import romanNumeralsService from '../services/romanNumerals.js';
import messaging from '../messaging';

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
