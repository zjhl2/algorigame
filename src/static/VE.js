export default {
    nodes: [
        { id: 0, x: 100, y: 100, r: 30 },
        { id: 1, x: 400, y: 100, r: 30 },
        { id: 2, x: 300, y: 200, r: 30 },
        { id: 3, x: 200, y: 300, r: 30 },
        { id: 4, x: 300, y: 400, r: 30 },
        { id: 5, x: 100, y: 400, r: 30 },
        { id: 6, x: 200, y: 500, r: 30 },
        { id: 7, x: 400, y: 300, r: 30 },
        { id: 8, x: 500, y: 500, r: 30 }
    ],
    edges: [
        { from: 0, to: 1, length: 10},
        { from: 1, to: 2, length: 10},
        { from: 0, to: 2, length: 10},

        { from: 2, to: 3, length: 5},
        { from: 3, to: 7, length: 10},
        { from: 3, to: 4, length: 10},

        { from: 5, to: 3, length: 5},
        { from: 4, to: 7, length: 9},
        { from: 4, to: 8, length: 10},
        { from: 6, to: 8, length: 5},
        { from: 0, to: 3, length: 9},
        { from: 5, to: 6, length: 10},
        { from: 0, to: 5, length: 5},
        { from: 2, to: 7, length: 9},
        { from: 5, to: 6, length: 10},
        { from: 1, to: 7, length: 3},

    ]
  }