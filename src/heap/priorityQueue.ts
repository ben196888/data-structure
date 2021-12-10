interface IPriorityQueue<T> {
  enqueue(element: T): void;
  peak(): T;
}

export class PriorityQueue<T = any> implements IPriorityQueue<T> {
  private elements: T[] = [null]; // elements[0] represent size
  private readonly compare: (a: T, b: T) => number;
  // compare return 1, 0, -1
  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
  }
  enqueue(element: T): void {
    // append in the end of the list
    this.elements.push(element);
    // 1 -> 2, 3
    // 2 -> 4, 5
    // 3 -> 6, 7
    // swap
    for (let i = this.elements.length - 1; i > 1; i >>= 1) {
      if (this.compare(this.elements[i], this.elements[i >> 1]) > 0) {
        [this.elements[i], this.elements[i >> 1]] = [this.elements[i >> 1], this.elements[i]];
      } else {
        // stop swapping
        break;
      }
    }
  }
  peak(): T {
    return this.elements[1];
  }
}
