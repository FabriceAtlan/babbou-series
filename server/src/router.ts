import express from "express";
import servListSeries from "./modules/program/programActions";
import sayActions from "./modules/say/sayActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/", sayActions.sayWelcome);
router.get("/api/programs", servListSeries.browse);

export default router;
