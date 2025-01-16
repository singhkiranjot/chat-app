"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/signup", (req, res) => {
    res.json('signup route');
});
router.get('/signin', (req, res) => {
    res.json('signin route');
});
router.get('/logout', (req, res) => {
    res.json('logout route');
});
exports.default = router;
