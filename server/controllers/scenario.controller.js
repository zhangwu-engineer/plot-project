import MOCK_DATA from './mock.data.json'

const getScenarios = (req, res) => {
  const size = req.query.size || 5;
  const page = req.query.page || 0;
  const search = req.query.search || '';

  res.json(MOCK_DATA);

};

export {
  getScenarios,
};
