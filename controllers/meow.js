const Meow = require("../model/Meow");

exports.getMeows = async (req, res, next) => {
    try {
        const meows = await Meow.find();
        res.status(200).json({ success: true, data: meows });

    }catch (err) {
        res.status(400).json({ success: false });
      }
};

exports.getMeow = async (req, res, next) => {
  try {
    const meow = await Meow.findById(req.params.id);

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
    const meow = await Meow.create(req.body);
    res.status(200).json({ success: true, data: meow });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.updateMeow = async (req, res, next) => {
    try {
        const meow = await Meow.findByIdAndUpdate(req.params.id, req.body, {
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
        const meow = await Meow.findByIdAndDelete(req.params.id);
    
        if (!meow) {
          res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(400).json({ success: false });
      }
};
