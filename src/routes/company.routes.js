const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");

module.exports = function ({ CompanyController }) {
  const router = Router();

  router.get(
    "",
    [ParseIntMiddleware, AuthMiddleware],
    CompanyController.getAll
  );
  router.post("", AuthMiddleware, CompanyController.create);
  router.get("/:companyId", AuthMiddleware, CompanyController.get);
  router.patch("/:companyId", AuthMiddleware, CompanyController.update);
  router.delete("/:companyId", AuthMiddleware, CompanyController.delete);

  return router;
};
