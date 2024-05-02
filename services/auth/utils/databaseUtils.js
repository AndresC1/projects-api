async function filterData(select, data) {
    return select.reduce((acc, key) => {
        acc[key] = data[key];
        return acc;
    }, {});
}

module.exports = {
    filterData,
};