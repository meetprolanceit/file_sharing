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

        const id = generateId(8);
    } catch (error) {
        console.log(`🚀 ~ uploadFile ~ error:`, error);
    }
};

const fileReceiver = async (req, res) => {
    try {
    } catch (error) {
        console.log(`🚀 ~ fileReceiver ~ error:`, error);
    }
};

module.exports = {
    initialPageRender,
    uploadFile,
};
