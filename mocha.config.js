module.exports = {
    globals: ["expect"],
    sort: true,
    fullTrace: true,
    checkLeaks: true,
    exit: true,
    reporter: process.env.CI
        ? "mocha-junit-reporter"
        : "spec"
};
