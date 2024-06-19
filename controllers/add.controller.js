const add = (req, res) => {
  return res.render("home", {
    result: parseInt(req.body.num1) + parseInt(req.body.num2),
  });
};

export { add };
