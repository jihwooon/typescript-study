class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    this.adjacencyList[value] = [];
  }

  addEdge(key, value) {
    this.adjacencyList[key].push(value);
    this.adjacencyList[key].push(value);
  }

  removeEdge(key, value) {
    this.adjacencyList[key] = this.adjacencyList[
      key
    ].filter((v) => v !== value);

    this.adjacencyList[key] = this.adjacencyList[
      key
    ].filter((v) => v !== value);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex =
        this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex('tokyo');
g.addVertex('San Francisco');
g.addVertex('Aspen');

g.addEdge('tokyo', 'Dallas');
g.addEdge('tokyo', 'Korean');

g.removeEdge('tokyo', 'Dallas');

g.removeVertex('tokyo');

console.log(g);
