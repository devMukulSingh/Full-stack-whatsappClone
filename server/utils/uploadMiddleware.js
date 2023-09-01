

export const uploadMiddleware = async(req,res,next) => {
    try {
        console.log(req.file);
        req.fileData = {
            originalName: req.file.originalname,
            buffer : req.file.buffer,
            mimetype: req.file.mimetype,
            size: req.file.size,
        };
    } catch (error) {
        return res.status(500).json(`Error in uploadMiddleware ${error}`);
    }
    next();
}

export default uploadMiddleware;