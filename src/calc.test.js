import { sum } from "./calc";

test ('adding 2 + 3 should give me 5', () => {
    expect(sum(2, 3)).toBe(5);
})