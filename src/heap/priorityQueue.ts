interface IPriorityQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | null;
  peak(): T;
}

export class PriorityQueue<T = any> implements IPriorityQueue<T> {
  private elements: T[] = [null]; // elements[0] represent root
  public readonly size: number;
  private readonly compare: (a: T, b: T) => number;
  private heapify = (index: number): void => {
    // leaf
    if (index > ((this.elements.length - 1) >> 1)) {
      return;
    }
    let l = index << 1, r = (index << 1) + 1;
    let next = r > this.elements.length - 1 || this.compare(this.elements[l], this.elements[r]) > 0 ? l : r;
    if (this.compare(this.elements[next], this.elements[index]) > 0) {
      [this.elements[index], this.elements[next]] = [this.elements[next], this.elements[index]];
      this.heapify(next);
    }
  };
  // compare return 1, 0, -1
  constructor(compare: (a: T, b: T) => number, list?: T[]) {
    this.compare = compare;
    if (Array.isArray(list) && list.length > 0) {
      this.elements = [null, ...list];
      this.size = list.length;
      for (let i = (this.elements.length - 1) >> 1; i > 0; i--) {
        this.heapify(i);
      }
    }
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
    if (this.elements.length - 1 === 0) {
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
