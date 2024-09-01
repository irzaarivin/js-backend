const Joi = require('joi')

const validate = (data) => {
    const schema = Joi.object({
        id: Joi.number().required().messages({
            'number.base': 'id harus berupa angka.',
            'any.required': 'id diperlukan dan tidak boleh kosong.'
        })
    });

    const { error } = schema.validate(data);
    return error;
}

const updateUser = async (repositories, id) => {
    const { deleteUser } = repositories.userRepositories

    const validation = validate({id});
    if(validation) return { status: "Failed", error: validation.message }

    const callback = await deleteUser(id)

    if(callback) return { status: "Success", data: callback }
    return { status: "Failed" }
}

module.exports = updateUser