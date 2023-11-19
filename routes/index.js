module.exports = function (app) {
    require('./offer')(app);
    require('./student')(app);
    require('./teacher')(app);
}