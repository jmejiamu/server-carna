const deleteEnglish = async (req, res, db) => {
    try {
        const { content_id } = req.params;
        const deleteData = await db('english').where({ id: content_id }).del()
        res.status(200).send({ response: "deleted!" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    deleteEnglish

}

