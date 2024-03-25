const canDeleteMovie = (req, res, next) => {
  // Extract user role from the request object
  const userRole = req.user && req.user.role;
  if (userRole === "admin") {
    next();
  } else {
    res.status(403).send({
      message: "Unauthorized. Only admin users can delete movies",
    });
  }
};

export default canDeleteMovie;
