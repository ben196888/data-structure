interface IPriorityQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | null;
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
  dequeue(): T | null {
    if (this.elements.length === 1) {
      return null;
    }
    const result = this.elements[1];
    // move last element to top
    this.elements[1] = this.elements.pop();
    // 1 -> 2, 3
    // 2 -> 4, 5
    // 3 -> 6, 7
    let i = 1;
    while (i <= (this.elements.length >> 1)) {
      let l = i << 1, r = (i << 1) + 1;
      let next = this.compare(this.elements[l], this.elements[r]) > 0 ? l : r;
      if (this.compare(this.elements[next], this.elements[i]) > 0) {
        [this.elements[i], this.elements[next]] = [this.elements[next], this.elements[i]];
        i = next;
      } else {
        break;
      }
    }
    return result;
  }
  peak(): T {
    return this.elements[1];
  }
}
