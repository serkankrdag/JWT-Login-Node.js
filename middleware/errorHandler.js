const errorHandler = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Hata oluştu:", error);
      res.status(500).json({ success: false, message: "Bir hata oluştu." });
    }
};
  
module.exports = errorHandler;
  