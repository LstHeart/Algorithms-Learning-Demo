import { Stack } from "../src/stack";

it("instanceof Stack", () => {
  const stack = new Stack();
  expect(stack instanceof Stack).toBe(true);
});

it("add item", () => {
  const stack = new Stack();
  const addItems = [1, 2, 3];
  stack.addItem(...addItems);
//   expect(stack.getLength()).toBe(3);
  expect(stack.length).toBe(3);
});


it('deleteItem',()=>{
    const stack = new Stack();
    stack.addItem(1,2,3);
    expect(stack.deleteItem()).toBe(3);
})
