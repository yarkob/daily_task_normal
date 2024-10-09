'use strict';

class PaginationHelper {
  /**
   * @param {string[]} collection
   * @param {number} itemsPerPage
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pages = [];

    let count = 0;

    for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
      const page = [];

      for (let j = i; j < Math.min(this.itemsPerPage * (count + 1), this.collection.length); j++) {
        page.push(this.collection[j]);
      }

      this.pages.push(page);
      count++;
    }
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (this.pages[pageIndex]) {
      return this.pages[pageIndex].length;
    }

    return -1;
  }

  pageIndex(itemIndex) {
    const item = this.collection[itemIndex];
    const result = this.pages.findIndex(page => page.includes(item));

    if (result === 0) {
      return result;
    }

    return result || -1;
  }
}

module.exports = {
  PaginationHelper,
};
