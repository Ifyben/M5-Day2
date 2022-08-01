import path,{dirname} from "path";

import { fileURLToPath } from "url";

import multer from "multer"; 

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const publicDirectory = path.join(__dirname, "../../public");

export const parseFile = multer(); 

export const uploadFile = (req, res, next) => {
    try {
        console.log(req.file);
    } catch (error) {
        
    }
}