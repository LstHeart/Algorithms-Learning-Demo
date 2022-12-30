export class Stack {
  private data: any[];
  length: number;
  constructor() {
    this.create();
  }

  private create() {
    this.data = new Array();
    Object.defineProperty(this,'length',{
      get(){
        return this.data.length;
      }
    })
  }

  addItem(...items: any[]) {
    return this.data.push(...items);
  }

  deleteItem() {
    if (this.data.length) return this.data.pop();
  }
}
