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
});
