const addContentEnglish = async (req, res, db) => {
    try {
        const { title, content } = req.body;
        const data = await db
            .insert({
                title: title,
                content: content,
            })
            .into('english')
        res.status(200).send({ response: "Added" })
    } catch (error) {
        console.error(error.message);
    }

}


module.exports = {
    addContentEnglish
}