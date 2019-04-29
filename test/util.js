module.exports.addNameMeta = (obj, pref) => {
    Reflect.ownKeys(obj).forEach(k => {
        const value = `${pref || ''}${k}`;
        Reflect.defineProperty(obj[k], '__NAME__', { value });
    });

    return obj;
};

module.exports.xhrStart = page => new Promise(rez => {
    page.on('request', req => {
        req.resourceType() === 'xhr' && rez();
    });
});

module.exports.xhrEnd = page => new Promise(rez => {
    page.on('requestfinished', req => {
        req.resourceType() === 'xhr' && rez();
    });
});