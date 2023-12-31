"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Stockroom = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    username: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Stockroom', Stockroom, 'stockroom');
//# sourceMappingURL=stockroom.model.js.map