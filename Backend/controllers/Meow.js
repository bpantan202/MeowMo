const Meow_log = require("../model/Meow_log");

exports.getMeows = async (req, res, next) => {
    try {
        const meows = await Meow_log.find();
        res.status(200).json({ success: true, data: meows });

    }catch (err) {
        res.status(400).json({ success: false });
      }
};

exports.getMeow = async (req, res, next) => {
  try {
    const meow = await Meow_log.findById(req.params.id);

    if (!meow) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: meow });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.createMeow = async (req, res, next) => {
  try {
    const meow = await Meow_log.create(req.body);
    res.status(200).json({ success: true, data: meow });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateMeow = async (req, res, next) => {
    try {
        const meow = await Meow_log.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if (!meow) {
          res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: meow });
      } catch (err) {
        res.status(400).json({ success: false });
      }
};

exports.deleteMeow = async (req, res, next) => {
    try {
        const meow = await Meow_log.findByIdAndDelete(req.params.id);
    
        if (!meow) {
          res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(400).json({ success: false });
      }
};
