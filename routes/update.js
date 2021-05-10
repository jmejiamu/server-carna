const updateEnglish = async (req, res, db) => {
    try {
        const { content_id } = req.params;
        const { title, content } = req.body;

        const updateData = await db('english').update({ title, content }).where({ id: content_id })
        res.status(200).send({ response: "update" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    updateEnglish
}