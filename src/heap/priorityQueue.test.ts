import { PriorityQueue } from './priorityQueue'

describe('PriorityQueue', () => {
  describe('enqueue', () => {
    test('Maximum heap 1,2,3', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b);
      pq.enqueue(1);
      expect(pq.peak()).toBe(1);
      pq.enqueue(2);
      expect(pq.peak()).toBe(2);
      pq.enqueue(3);
      expect(pq.peak()).toBe(3);
    });
    test('Maximum heap 3,2,1', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b);
      pq.enqueue(3);
      expect(pq.peak()).toBe(3);
      pq.enqueue(2);
      expect(pq.peak()).toBe(3);
      pq.enqueue(1);
      expect(pq.peak()).toBe(3);
    });
    test('Minimum heap 1,2,3,4,5', () => {
      const pq = new PriorityQueue<number>((a, b) => b - a);
      pq.enqueue(1);
      expect(pq.peak()).toBe(1);
      pq.enqueue(2);
      expect(pq.peak()).toBe(1);
      pq.enqueue(3);
      expect(pq.peak()).toBe(1);
      pq.enqueue(4);
      expect(pq.peak()).toBe(1);
      pq.enqueue(5);
      expect(pq.peak()).toBe(1);
    });
    test('Minimum heap 5,4,3,2,1', () => {
      const pq = new PriorityQueue<number>((a, b) => b - a);
      pq.enqueue(5);
      expect(pq.peak()).toBe(5);
      pq.enqueue(4);
      expect(pq.peak()).toBe(4);
      pq.enqueue(3);
      expect(pq.peak()).toBe(3);
      pq.enqueue(2);
      expect(pq.peak()).toBe(2);
      pq.enqueue(1);
      expect(pq.peak()).toBe(1);
    });
  });
  describe('dequeue', () => {
    test('empty queue', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b);
      expect(pq.dequeue()).toBeNull();
    });
    test('Maximum heap 1,3,2,4', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b);
      pq.enqueue(1);
      expect(pq.peak()).toBe(1);
      pq.enqueue(3);
      expect(pq.peak()).toBe(3);
      pq.enqueue(2);
      expect(pq.peak()).toBe(3);
      pq.enqueue(4);
      expect(pq.peak()).toBe(4);
      expect(pq.dequeue()).toBe(4);
      expect(pq.dequeue()).toBe(3);
      expect(pq.dequeue()).toBe(2);
      expect(pq.dequeue()).toBe(1);
    });
    test('Minimum heap 1,3,2,4,5,6,7', () => {
      const pq = new PriorityQueue<number>((a, b) => b - a, [1, 3, 2, 4, 5, 6, 7]);
      expect(pq.dequeue()).toBe(1);
      expect(pq.dequeue()).toBe(2);
      expect(pq.dequeue()).toBe(3);
      expect(pq.dequeue()).toBe(4);
      expect(pq.dequeue()).toBe(5);
      expect(pq.dequeue()).toBe(6);
      expect(pq.dequeue()).toBe(7);
    });
  });

  describe('construct', () => {
    test('Maximum heap 2,1,4,5,3,6', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b, [2, 1, 4, 5, 3, 6]);
      expect(pq.dequeue()).toBe(6);
      expect(pq.dequeue()).toBe(5);
      expect(pq.dequeue()).toBe(4);
      expect(pq.dequeue()).toBe(3);
      expect(pq.dequeue()).toBe(2);
      expect(pq.dequeue()).toBe(1);
    });
    test('Maximum heap 2,1,7,4,8,5,9,3,6', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b, [2, 1, 7, 4, 8, 5, 9, 3, 6]);
      expect(pq.dequeue()).toBe(9);
      expect(pq.dequeue()).toBe(8);
      expect(pq.dequeue()).toBe(7);
      expect(pq.dequeue()).toBe(6);
      expect(pq.dequeue()).toBe(5);
      expect(pq.dequeue()).toBe(4);
      expect(pq.dequeue()).toBe(3);
      expect(pq.dequeue()).toBe(2);
      expect(pq.dequeue()).toBe(1);
    });
  });
  describe('size', () => {
    test('construct', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b, [2, 1, 4, 5, 3, 6]);
      expect(pq.size).toBe(6);
    });
    test('enqueue and dequeue', () => {
      const pq = new PriorityQueue<number>((a, b) => a - b);
      expect(pq.size).toBe(0);
      pq.enqueue(1);
      expect(pq.size).toBe(1);
      pq.enqueue(4);
      expect(pq.size).toBe(2);
      pq.dequeue();
      expect(pq.size).toBe(1);
      pq.enqueue(5);
      expect(pq.size).toBe(2);
      pq.enqueue(6);
      expect(pq.size).toBe(3);
    });
  })
});
