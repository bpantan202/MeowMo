exports.getMeows = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Meow Meow" });
};

exports.getMeow = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Meow id ${req.params.id}` });
};

exports.createMeow = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new Meow` });
};

exports.updateMeow = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Edit Meow id ${req.params.id}` });
};

exports.deleteMeow = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Remove Meow id ${req.params.id}` });
};
