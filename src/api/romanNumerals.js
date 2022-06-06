import romanNumeralsService from '../services/romanNumerals.js';

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

    const roman = romanNumeralsService.convertFromArabic(parseInt(query));

    res.status(200).send({query: parseInt(query), roman});
    next();
  } catch (e) {
    next(e);
  }
};

export default {
  getRomanNumerals,
};
