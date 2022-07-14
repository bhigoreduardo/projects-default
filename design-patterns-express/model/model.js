module.exports = {
  values: [
    { id: "0", chave: "valor-0", date: "06/6/2022" },
    { id: "1", chave: "valor-1", date: "06/6/2022" },
    { id: "2", chave: "valor-2", date: "06/6/2022" },
    { id: "3", chave: "valor-3", date: "06/6/2022" },
    { id: "4", chave: "valor-4", date: "06/6/2022" },
  ],

  searchValue(target) {
    return this.values.filter((value) => {
      return value.chave == target;
    });
  },

  allValues() {
    return this.values;
  },

  insertValue(id, chave, date) {
    this.values.push({ id, chave, date });
  },
};
