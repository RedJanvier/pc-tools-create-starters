// Models
const Index = require('../models/index');

// @desc      Test Route
// @route     GET /api/v1/
// @access    Public
exports.testRoute = async (req, res, next) => {
   try {
       const indexes = await Index.find();

       res.status(200).json({
           success: true,
           count: indexes.length,
           data: indexes
       });
   } catch (err) {
       console.log(`Error: ${err.message}`.red);
       res.status(500).json({
           success: false,
           error: `Server Error`
       });
   }
};