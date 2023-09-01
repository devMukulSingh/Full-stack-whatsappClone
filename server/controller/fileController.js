import fileModel from "../modal/File.js";

export const addFile = async(req,res) => {
   try {
    console.log(req.fileData);
    console.log(req.file);
     const File = new fileModel({
                                originalName: req.fileData.originalname,
                                data: req.fileData.buffer,
                                size: req.fileData.size,
                                contentType:req.fileData.mimetype});

     await File.save();
    return res.status(200).json(`File uploaded `);
    
   } catch (error) {
      return res.status(500).json(error);
   }
}