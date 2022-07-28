import express from "express"
import fs from "fs"
import uniqid from "uniqid"
import path,{dirname} from "path";
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const authorsFilePath = path.join(__dirname, "authors.json");
const router = express.Router();

// get all authors
router.get("/", async (req, res, next) => {
    try {  
      const fileAsBuffer = fs.readFileSync(authorsFilePath);
      const fileAsString = fileAsBuffer.toString();
      const fileAsJSON = JSON.parse(fileAsString);
      res.send(fileAsJSON);
    } catch (error) {
      res.send(500).send({ message: error.message });  
    }
});

// get single author
router.get("/:id", async (req, res, next) => {
    try {
    } catch (error) {
      res.send(500).send({ message: error.message})
    }
})

// create author
router.post("/", async (req, res, next) => {
    try {
        const { name, surname, email, dateOfBirth } = req.body;
        const author = {
            id: uniqid(),
            name,
            surname,
            email,
            dateOfBirth,
            avatar: `https://ui-avatar.com/api/?name=${name}+${surname}`,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const fileAsBuffer = fs.readFileSync(authorsFilePath);
        const fileAsString = fileAsBuffer.toString();
        const fileAsJSONArray = JSON.parse(fileAsString);
        fileAsJSONArray.push(author);
        fs.writeFileSync(authorsFilePath, JSON.stringify(fileAsJSONArray));
        res.send(author)
    }   catch (error) {
        res.send(500).send({ message: error.message})
    }
})

// delete author
router.delete("/:id", async (req, res, next) => {
    try {
    } catch (error) {
      res.send(500).send({ message: error.message})
    }
})

// update author
router.put("/:id", async (req, res, next) => {
    try {
    } catch (error) {
      res.send(500).send({ message: error.message})
    }
})

export default router;