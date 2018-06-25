const { expect } = require("chai");
const sort = require('../src/sort.js');


describe('Validate that arrays are sorted using:', () => {
  it('Heap Sort', () => {
    const result = sort.heap([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); // returns an array thats not altered
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]); // check that the array is sorted
  });

  it('Quick Sort', () => {
    const result = sort.quick([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);       
  });

  it('Merge sort', () => {
    const result = sort.merge([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);        
  });

  it('Selection Sort', () => {
    const result = sort.selection([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);        
  });

  it('Bubble Sort', () => {
    const result = sort.bubble([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);        
  });

  it('Shell Sort', () => {
    const result = sort.shell([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);         
  });
  
  it('Insertion Sort', () => {
    const result = sort.insertion([-11,8,14,3,6,2,7]);
    console.log(result)
    expect(result).to.be.an('array').that.includes.members([-11, 2, 3, 6, 7, 8, 14]); 
    expect(result).eql([-11, 2, 3, 6, 7, 8, 14]);        
  });
});