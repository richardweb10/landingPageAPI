const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const CompanySchema = new Schema({
  companyFullName: { type: String, required: true },
  nit: { type: Number, required: true },
  mobile: { type: Number, required: true },
  cityName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  productCode: { type: String, required: true },
});

module.exports = mongoose.model("company", CompanySchema);
