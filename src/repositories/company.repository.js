const BaseRepository = require("./base.repository");
let _company = null;

class CompanyRepository extends BaseRepository {
  constructor({ Company }) {
    super(Company);
    _company = Company;
  }
}

module.exports = CompanyRepository;
