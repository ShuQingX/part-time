const PricticeService = require("../services/prictices");
const JSONResolve = require("../lib/helper");
const { pricitceValidate: validate } = require("../lib/validator");

class PricticeCtrl {
  // 分类接口
  pricticeClassify(ctx) {
    const v = PricticeService.pricticeClassify();
    ctx.body = JSONResolve.json(v);
  }
  // 城市分类接口
  async parttimeClassify(ctx) {
    const v = await PricticeService.parttimeClassify(ctx)
    ctx.body = JSONResolve.json(v)
  }

  // 实习/兼职创建
  async addAdminPrictice(ctx) {
    ctx.verifyParams({
      category: validate.category,
      salary: validate.salary,
      begin_time: validate.begin_time,
      end_time: validate.end_time,
      shop_img: validate.shop_img,
      shop_name: validate.shop_name,
      post: validate.post,
      company_auth: validate.company_auth,
      cityName: validate.cityName,
      areaName: validate.areaName
    });

    const v = await PricticeService.addAdminPrictice(ctx);
    ctx.body = JSONResolve.json(v);
  }
  async setAdminPrictice(ctx) {
    ctx.verifyParams({
      category: validate.category,
      salary: validate.salary,
      begin_time: validate.begin_time,
      end_time: validate.end_time,
      shop_img: validate.shop_img,
      shop_name: validate.shop_name,
      post: validate.post,
      company_auth: validate.company_auth,
      cityName: validate.cityName,
      areaName: validate.areaName
    });

    const v = await PricticeService.setAdminPrictice(ctx);
    ctx.body = JSONResolve.json(v);
  }
  async delAdminPrictice(ctx) {
    await PricticeService.delAdminPrictice(ctx);
    ctx.body = JSONResolve.success();
  }

  // 获取实习/兼职列表
  async getPrictice(ctx) {
    const v = await PricticeService.getPrictice(ctx);
    ctx.body = JSONResolve.json(v);
  }

}

module.exports = new PricticeCtrl();
