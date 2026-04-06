function logRequest(req, intent, decision) {
    console.log({
        method: req.method,
        url: req.url,
        intent,
        decision,
        time: new Date().toISOString()
    });
}

module.exports = logRequest;