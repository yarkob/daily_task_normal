'use strict';

const { PaginationHelper } = require('./PaginationHelper');

describe('', () => {
  describe(`Class 'PaginationHelper'`, () => {
    it(`should be declared`, () => {
      expect(PaginationHelper).toBeInstanceOf(Function);
    });

    it(`can be used as a constructor`, () => {
      const pagination = new PaginationHelper(
        ['a', 'b', 'c', 'd', 'e', 'f'],
        3,
      );

      expect(pagination).toBeInstanceOf(PaginationHelper);
    });

    it(`should have a 'itemCount' method`, () => {
      expect(PaginationHelper.prototype.itemCount).toBeInstanceOf(Function);
    });

    it(`should have a 'pageCount' method`, () => {
      expect(PaginationHelper.prototype.pageCount).toBeInstanceOf(Function);
    });

    it(`should have a 'pageItemCount' method`, () => {
      expect(PaginationHelper.prototype.pageItemCount).toBeInstanceOf(Function);
    });

    it(`should have a 'pageIndex' method`, () => {
      expect(PaginationHelper.prototype.pageIndex).toBeInstanceOf(Function);
    });
  });

  describe(`Method 'itemCount'`, () => {
    it(`should return the number of items in collection`, () => {
      const pagination = new PaginationHelper(['q', 'w', 'e', 'r'], 2);

      expect(pagination.itemCount()).toBe(4);
    });

    it(`should return 0 if collection is empty`, () => {
      const pagination = new PaginationHelper([], 5);

      expect(pagination.itemCount()).toBe(0);
    });
  });

  describe(`Method 'pageCount'`, () => {
    it(`should return the number of pages if collection.length is divisible by itemsPerPage`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'],
        4,
      );

      expect(pagination.pageCount()).toBe(2);
    });

    it(`should return the number of pages if collection.length is not divisible by itemsPerPage`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        3,
      );

      expect(pagination.pageCount()).toBe(4);
    });

    it(`should return 1 if collection.length = itemsPerPage`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u'],
        7,
      );

      expect(pagination.pageCount()).toBe(1);
    });

    it(`should return 1 if collection.length is less than itemsPerPage`, () => {
      const pagination = new PaginationHelper(['q', 'w', 'e'], 5);

      expect(pagination.pageCount()).toBe(1);
    });

    it(`should return 0 if collection is empty`, () => {
      const pagination = new PaginationHelper([], 3);

      expect(pagination.pageCount()).toBe(0);
    });
  });

  describe(`Method 'pageItemCount'`, () => {
    it(`should return the number of items on the first page if it is fully filled`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y'],
        3,
      );

      expect(pagination.pageItemCount(0)).toBe(3);
    });

    it(`should return the number of items on the last page if it is fully filled`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        5,
      );

      expect(pagination.pageItemCount(1)).toBe(5);
    });

    it(`should return the number of items on the first page if it is not fully filled`, () => {
      const pagination = new PaginationHelper(['q', 'w', 'e'], 6);

      expect(pagination.pageItemCount(0)).toBe(3);
    });

    it(`should return the number of items on the last page if it is not fully filled`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'],
        3,
      );

      expect(pagination.pageItemCount(2)).toBe(2);
    });

    it(`should return -1 if the page doesn't exist`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u'],
        2,
      );

      expect(pagination.pageItemCount(4)).toBe(-1);
    });

    it(`should return -1 if collection is empty`, () => {
      const pagination = new PaginationHelper([], 4);

      expect(pagination.pageItemCount(0)).toBe(-1);
    });
  });

  describe(`Method 'pageIndex'`, () => {
    it(`should return the index of the page for the first item`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y'],
        3,
      );

      expect(pagination.pageIndex(0)).toBe(0);
    });

    it(`should return the index of the page for the last item`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o'],
        4,
      );

      expect(pagination.pageIndex(8)).toBe(2);
    });

    it(`should return index of the page for the item in the middle`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y', 'u'],
        2,
      );

      expect(pagination.pageIndex(3)).toBe(1);
    });

    it(`should return -1 if the item index is invalid`, () => {
      const pagination = new PaginationHelper(
        ['q', 'w', 'e', 'r', 't', 'y'],
        3,
      );

      expect(pagination.pageIndex(6)).toBe(-1);
    });

    it(`should return -1 if collection is empty`, () => {
      const pagination = new PaginationHelper([], 3);

      expect(pagination.pageIndex(0)).toBe(-1);
    });
  });
});
