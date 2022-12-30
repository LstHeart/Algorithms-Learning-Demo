import { Queue } from "../src/queue";

it("instanceof Queue", () => {
  const queue = new Queue();
  expect(queue instanceof Queue).toBe(true);
});

it("add item", () => {
  const queue = new Queue();
  queue.addItem(1,2,3);
  expect(queue.length).toBe(3);
});


it('deleteItem',()=>{
    const queue = new Queue();
    queue.addItem(1,2,3);
    expect(queue.deleteItem()).toBe(1);
})
