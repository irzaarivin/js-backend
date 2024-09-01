const Joi = require('joi')

const validate = (data) => {
    const schema = Joi.object({
        id: Joi.number().required()
    });

    const { error } = schema.validate(data);
    return error;
}

const getUsers = async (repositories, id) => {
    const { getOneUser } = repositories.userRepositories

    const validation = await validate({id});
    if(validation) return { status: "Failed", error: validation.message }

    const data = await getOneUser(id)

    if(data) return { status: "Success", data }
    return { status: "Failed" }
}

module.exports = getUsers