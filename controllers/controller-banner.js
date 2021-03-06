const { Banner, Sequelize } = require ('../models')
const {gt, lte, ne, in: opIn} = Sequelize.Op;

class ControllerBanner {
    static async get (req, res, next) {
        try {
            const bannerList = await Banner.findAll()
            res.status(200).json(bannerList)
        } catch (err) {
            next(err)
        }
    }
    static async post (req, res, next) {
        try {
            console.log(req.body)
            const data = await Banner.create(req.body)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async getById (req, res, next) {
        try {
            const data = await Banner.findByPk(req.params.id)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async update (req, res, next) {
        try {
            const data = await Banner.update(req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async delete (req, res, next) {
        try {
            const data = await Banner.destroy({
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
    static async patch (req, res, next) {
        try {
            const data = await Banner.update(req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async updateAll (req, res, next) {
        try {
            const bannerList = await Banner.findAll()
            const toUpdate = []
            bannerList.forEach(el => {
                toUpdate.push(el.id)
            });
            const data = await Banner.update(req.body, {
                where: {
                    id: {
                        [opIn]: toUpdate
                    }
                },
                returning: true
            })
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerBanner