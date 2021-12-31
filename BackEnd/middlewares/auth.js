const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const idUser = decodedToken.idUser;
    if (!req.headers.idUser) {
        throw 'Bad idUser request';
    } else if (req.headers.idUser !== idUser) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
};