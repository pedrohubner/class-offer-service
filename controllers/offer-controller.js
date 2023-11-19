const { ClassOffer: ClassOfferModel } = require("../models/ClassOffer");

const classOfferController = {

    createClassOffer: async (req, res) => {
        try {
            const classOffer = {
                title: req.body.title,
                maximumNumberOfStudents: req.body.maximumNumberOfStudents,
                type: req.body.type,
                initialDate: req.body.initialDate,
                finalDate: req.body.finalDate,
                schoolDays: req.body.schoolDays,
                period: req.body.period,
                openingTime: req.body.openingTime,
                closingTime: req.body.closingTime
            }

            const response = await ClassOfferModel.create(classOffer);

            return res.json({ response, msg: "Disciplina criada com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    updateClassOffer: async (req, res) => {
        try {
            const classOfferId = req.body.id;

            const existingClassOffer = await ClassOfferModel.findById(classOfferId);
            if (!existingClassOffer) {
                return res.status(404).json({ error: "Oferta de classe não encontrada." });
            }

            existingClassOffer.title = req.body.title || existingClassOffer.title;
            existingClassOffer.maximumNumberOfStudents = req.body.maximumNumberOfStudents || existingClassOffer.maximumNumberOfStudents;
            existingClassOffer.type = req.body.type || existingClassOffer.type;
            existingClassOffer.initialDate = req.body.initialDate || existingClassOffer.initialDate;
            existingClassOffer.finalDate = req.body.finalDate || existingClassOffer.finalDate;
            existingClassOffer.schoolDays = req.body.schoolDays || existingClassOffer.schoolDays;
            existingClassOffer.period = req.body.period || existingClassOffer.period;
            existingClassOffer.openingTime = req.body.openingTime || existingClassOffer.openingTime;
            existingClassOffer.closingTime = req.body.closingTime || existingClassOffer.closingTime;

            const updatedClassOffer = await existingClassOffer.save();

            return res.json({ updatedClassOffer, msg: "Disciplina atualizada com sucesso!" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erro ao atualizar a disciplina." });
        }
    },
    getClassOffers: async (req, res) => {
        try {
            const response = await ClassOfferModel.find();
            return res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    getClassOfferById: async (req, res) => {
        try {
            const classOfferId = req.body.id;
            const response = await ClassOfferModel.findById(classOfferId);
            return res.json(response);
        } catch (error) {
            return res.status(404).json({ error: "Oferta de classe não encontrada." });
        }
    }

};

module.exports = classOfferController;