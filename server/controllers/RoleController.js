const db = require('../../database/models');

class RoleController {

    static async getRoles(req,res){
        try {
            await db.sequelize.transaction(async t => {
                const roles = await db.Permiso.findAll();
                if (roles.length > 0) {
                    res.status(200).send(roles);
                } else {
                    res.status(200).json({
                        msg: 'No se encontraron permisos.'
                    });
                }
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async store(req,res){
        const { nombre } = req.body;
        try {
            await db.sequelize.transaction(async t => {
                await db.Permiso.create({ nombre: nombre });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }

    static async remove(req, res){
        try {
            await db.sequelize.transaction(async t => {
                await db.Permiso.destroy({ where: { id_permiso: req.params.id } });
                res.status(200).send('success');
            });
        } catch (error) {
            res.status(500).json({
                msg: 'Error interno del servidor.'
            });
        }
    }
}

module.exports = RoleController;