const showEnglishContent = async (req, res, db) => {
    try {
        const data = await db.select('*').from('english').orderBy('id', 'desc');
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};

const showIndividualEnglishContent = async (req, res, db) => {
    try {
        const { content_id } = req.params;
        const data = await db('english').where({ id: content_id })
        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    showEnglishContent,
    showIndividualEnglishContent
}
