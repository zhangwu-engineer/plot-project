import MOCK_DATA from './mock.data.json'

const getScenarios = (req, res) => {
  const size = req.query.size || 10;
  const page = req.query.page - 1 || 0;
  const search = req.query.search || '';
  const MOCK_DATA_2 = [...MOCK_DATA, ...MOCK_DATA];
  const totalPages = Math.ceil(MOCK_DATA_2.length / size);
  const startIndex = size * page;

  setTimeout(() => {
  res.json({
    count: MOCK_DATA_2.length,
    totalPages,
    page,
    data: MOCK_DATA_2.slice(startIndex, startIndex + size)
  })}, 1000);
};

const addScenario = (req, res) => {
  setTimeout((() => {
    res.status(200).json({
      status: "Ok",
      message: "A new scenario has been added!"
    });
  }), 2000);
}

export {
  getScenarios,
  addScenario,
};
