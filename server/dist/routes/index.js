"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res) {
    console.log("testing 1234");
    res.render('index', { title: 'Express' });
});
module.exports = router;
