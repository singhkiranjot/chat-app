"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_js_1 = __importDefault(require("./routes/auth.route.js"));
const app = (0, express_1.default)();
app.use("/api/auth", auth_route_js_1.default);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
