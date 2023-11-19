const { Person: PersonModel } = require("../models/Person");

const personController = {

    createPerson: async (req, res) => {
        try {
            const person = {
                name: req.body.name,
                document: req.body.document,
                email: req.body.email,
                type: req.body.type,
                maximumNumberOfClasses: req.body.maximumNumberOfClasses
            }

            const response = await PersonModel.create(person);

            return res.json({ response, msg: "Pessoa criada com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    updatePerson: async (req, res) => {
        try {
            const personId = req.body.id;

            const existingPerson = await PersonModel.findById(personId);
            if (!existingPerson) {
                return res.status(404).json({ error: "Pessoa não encontrada." });
            }

            existingPerson.name = req.body.name || existingClassOffer.name;
            existingPerson.document = req.body.document || existingClassOffer.document;
            existingPerson.email = req.body.email || existingClassOffer.email;
            existingPerson.type = req.body.type || existingClassOffer.type;
            existingPerson.maximumNumberOfClasses = req.body.maximumNumberOfClasses || existingClassOffer.maximumNumberOfClasses;
            existingPerson.classes = req.body.classes || existingClassOffer.classes;

            const updatedPerson = await existingPerson.save();

            return res.json({ updatedPerson, msg: "Pessoa atualizada com sucesso!" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erro ao atualizar a pessoa." });
        }
    },
    getPersonById: async (req, res) => {
        try {
            const personId = req.body.id;
            const response = await PersonModel.findById(personId);
            return res.json(response);
        } catch (error) {
            return res.status(404).json({ error: "Pessoa não encontrada." });
        }
    }

};

module.exports = personController;