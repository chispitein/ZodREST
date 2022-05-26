"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidation = void 0;
const zod_1 = require("zod");
const schemaValidation = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            console.log(error);
            //return res.status(400).json('error.issues')
        }
        console.log(error);
        //return res.status(500).json({ Message: 'Internal server error' })
    }
    next();
};
exports.schemaValidation = schemaValidation;
//# sourceMappingURL=schemaValidator.middleware.js.map