function decideResponse(intent) {
    // Core decision logic (your system brain)

    if (intent.device === "mobile") {
        return "lite";
    }

    if (intent.device === "desktop") {
        return "full";
    }

    if (intent.client !== "browser") {
        return "api";
    }

    return "default";
}

module.exports = decideResponse;