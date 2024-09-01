const { Op } = require('sequelize')

module.exports = async (User) => {
    return {
        getUsers: async (params) => {
            try {
                const { sold, stock, status } = params;

                let whereClause = {};
                let orderClause = [];
                            
                if (status) {
                    whereClause.status = status;
                }
                            
                if (sold === 'ASC' || sold === 'DESC') {
                    orderClause.push(['total_sold', sold]);
                }

                if (stock === 'ASC' || stock === 'DESC') {
                    orderClause.push(['stock', stock]);
                }

                const users = await User.findAll({ where: whereClause, order: orderClause });

                return users;
            } catch (error) {
                console.log({error})
                throw new Error(error)
            }
        },

        getOneUser: async (id) => {
            try {
                const user = await User.findOne({
                    where: { id }
                });
                return user;
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },

        createUser: async (data) => {
            try {
                return await User.create(data)
            } catch (error) {
                console.log({error})
                throw new Error(error)
            }
        },

        updateUser: async (id, data) => {
            try {
                const [rowsAffected] = await User.update(data, { where: { id } });
                if (rowsAffected > 0) {
                    const updatedUser = await User.findOne({ where: { id } });
                    return updatedUser
                } else {
                    throw new Error("User tidak ditemukan!")
                }
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },

        deleteUser: async (id) => {
            try {
                const rowsAffected = await User.destroy({ where: { id } });
                if (rowsAffected > 0) {
                    return { message: "User berhasil dihapus" };
                } else {
                    throw new Error("User tidak ditemukan")
                }
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        }
    }
}