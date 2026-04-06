const express = require("express");
const router = express.Router();

const logRequest = require("../utils/logger");
const buildIntent = require("../core/intentEngine");
const decideResponse = require("../core/decisionEngine");

router.get("/", (req, res) => {
    const intent = buildIntent(req);
    const decision = decideResponse(intent);

    logRequest(req, intent, decision);

    if (decision === "lite") {
        return res.sendFile(require("path").resolve("public/lite.html"));
    }

    if (decision === "full") {
        return res.sendFile(require("path").resolve("public/full.html"));
    }

    if (decision === "api") {
        return res.json({
            message: "IXS-01 API Mode",
            intent
        });
    }

    return res.send("IXS-01 Default Mode");
});

module.exports = router;