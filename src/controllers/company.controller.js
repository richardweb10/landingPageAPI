let _companyService = null;
class CompanyController {
  constructor({ CompanyService }) {
    _companyService = CompanyService;
  }

  async get(req, res) {
    const { companyId } = req.params;
    const company = await _companyService.get(companyId);
    return res.send(company);
  }
  async create(req, res) {
    const { body } = req;
    const createdCompany = await _companyService.create(body);
    return res.status(201).send(createdCompany);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const companys = await _companyService.getAll(pageSize, pageNum);
    return res.send(companys);
  }

  async update(req, res) {
    const { body } = req;
    const { companyId } = req.params;
    const updatedCompany = await _companyService.update(companyId, body);
    return res.send(updatedCompany);
  }

  async delete(req, res) {
    const { companyId } = req.params;
    const deletedCompany = await _companyService.delete(companyId);
    return res.send(deletedCompany);
  }
}

module.exports = CompanyController;
