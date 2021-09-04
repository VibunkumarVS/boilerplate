module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    roots: ["./tests"],
    coverageReporters: ["text", "text-summary", "html"]
}
