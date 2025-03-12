const { generateId } = require('../utils/idGenerate.js');

const initialPageRender = async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(`🚀 ~ initialPageRender ~ error:`, error);
    }
};

const uploadFile = async (req, res) => {
    try {
        const file = req.body;
        const id = generateId(10);
        return res.status(200).json({ id });
    } catch (error) {
        console.log(`🚀 ~ uploadFile ~ error:`, error);
    }
};

const fileReceiver = async (req, res) => {
    try {
        const { id: shared_code } = req.params;
        console.log(`🚀 ~ fileReceiver ~  shared_code:`, shared_code);
    } catch (error) {
        console.log(`🚀 ~ fileReceiver ~ error:`, error);
    }
};

module.exports = {
    initialPageRender,
    uploadFile,
    fileReceiver,
};
