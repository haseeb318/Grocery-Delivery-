import expres from "express";
import { auth } from "../middleware/auth.js";
import multer from "multer";

const router = expres.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
  } catch (error) {}
});
