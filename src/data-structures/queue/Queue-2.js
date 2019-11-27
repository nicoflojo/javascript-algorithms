// ES5 Queue Implementation

export default class Queue {
  constructor(props) {
    this.dataStore = [];
    this.dequeue = props.dequeue;
    this.enqueue = props.enqueue;
    this.front = props.front;
    this.back = props.back;
    this.empty = props.empty;
  }
  
  static enqueue = element => {
    dataStore.push(element);
  }

  static dequeue = () => {
    return this.dataStore.shift();
  }

  static front = () => {
    return this.dataStore[0];
  }

  static back = () => {
    return this.dataStore[this.dataStore.length - 1];
  }

  static empty = () => {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
