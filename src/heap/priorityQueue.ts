interface IPriorityQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | null;
  peak(): T;
  readonly size: number;
}

export class PriorityQueue<T = any> implements IPriorityQueue<T> {
  private elements: T[] = [null]; // elements[0] represent root
  private _size: number = 0;
  private readonly compare: (a: T, b: T) => number;
  private swapWithChildren = (index: number): number => {
    // leaf
    if (index > (this._size >> 1)) {
      return -1;
    }
    let l = index << 1, r = (index << 1) + 1;
    let next = r > this._size || this.compare(this.elements[l], this.elements[r]) > 0 ? l : r;
    if (this.compare(this.elements[next], this.elements[index]) > 0) {
      [this.elements[index], this.elements[next]] = [this.elements[next], this.elements[index]];
      return next;
    }
    return -1;
  };
  // compare return 1, 0, -1
  constructor(compare: (a: T, b: T) => number, list?: T[]) {
    this.compare = compare;
    if (Array.isArray(list) && list.length > 0) {
      this.elements = [null, ...list];
      this._size = list.length;
      // heapify
      for (let i = this._size >> 1; i > 0; i--) {
        let curr = i;
        while (curr > 0) {
          curr = this.swapWithChildren(curr);
        }
      }
    }
  }
  enqueue(element: T): void {
    // append in the end of the list
    this.elements.push(element);
    this._size++;
    // 1 -> 2, 3
    // 2 -> 4, 5
    // 3 -> 6, 7
    // swap
    for (let i = this._size; i > 1; i >>= 1) {
      if (this.compare(this.elements[i], this.elements[i >> 1]) > 0) {
        [this.elements[i], this.elements[i >> 1]] = [this.elements[i >> 1], this.elements[i]];
      } else {
        // stop swapping
        break;
      }
    }
  }
  dequeue(): T | null {
    if (this._size === 0) {
      return null;
    }
    const result = this.elements[1];
    // move last element to top
    this.elements[1] = this.elements.pop();
    this._size--;
    // 1 -> 2, 3
    // 2 -> 4, 5
    // 3 -> 6, 7
    let i = 1;
    while (i <= (this._size >> 1)) {
      i = this.swapWithChildren(i);
      if (i < 0) {
        break;
      }
    }
    return result;
  }
  peak(): T {
    return this.elements[1];
  }
  get size(): number {
    return this._size;
  }
}
