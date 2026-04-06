function detectDevice(userAgent) {
    if (!userAgent) return "unknown";

    const ua = userAgent.toLowerCase();

    if (ua.includes("mobile")) return "mobile";
    if (ua.includes("tablet")) return "tablet";
    return "desktop";
}

function detectTime() {
    const hour = new Date().getHours();

    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
}

function detectClient(userAgent) {
    if (!userAgent) return "unknown";

    if (userAgent.includes("Mozilla")) return "browser";
    return "other";
}

function buildIntent(req) {
    const userAgent = req.headers["user-agent"];

    return {
        device: detectDevice(userAgent),
        time: detectTime(),
        client: detectClient(userAgent)
    };
}

module.exports = buildIntent;