// console.log(_.identity(1));

const testData0 = ['a', 'b', 'c'];
const testData1 = [1, 2, 3];

function zipList(data0, data1) {
  const output = [];
  for (let i = 0; i < data0.length; i++) {
    output.push(data0[i]);
    output.push(data1[i]);
  }
  return output;
}

console.log(zipList(testData0, testData1));

function zipListTheSimpleWay(data0, data1) {
  return _.flatten(_.zip(data0, data1));
}

console.log(zipListTheSimpleWay(testData0, testData1));
