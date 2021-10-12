module.exports = {
  addMyList: (req, res) => res.end(),
  plantList: (req, res) => {
    const theme = req.query.theme;

    if (theme) {
      //! 쿼리가 들어오면 실행
      res.end();
    } else {
      //! 아니면 일반 플랜트리스트 전체 조회
      res.end();
    }
  },
};
