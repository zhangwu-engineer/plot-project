import MOCK_DATA from './mock.data.json'

const getScenarios = (req, res) => {
  const size = req.query.size || 5;
  const page = req.query.page || 0;
  const search = req.query.search || '';

  setTimeout(() => {
  res.json({
    count: MOCK_DATA.length,
    data: MOCK_DATA
  })}, 2000);
};

export {
  getScenarios,
};
