// Create a function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop along the way

function knightMoves(start, end) {
  // initializing a queue
  // a set to keep track of visited squares
  // and an array of possible knight moves.
  const queue = [];
  const visited = new Set();
  const moves = [
    [1, 2],
    [2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [-1, 2],
    [-2, 1],
    [2, -1],
  ];

  // We add the starting square to the queue as a path containing only the starting square.
  queue.push([start]);

  // We loop through the queue while it is NOT empty. For each path in the queue, we get the current square by taking the last element of the path.
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    // If the current square is the same as the ending square, we return the path
    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((node) => console.log(node));
      return path;
    }

    // Otherwise, we loop through the possible knight moves and calculate the next square.
    // If the next square is within the bounds of the chessboard and has not been visited before, we add it to the visited set, create a new path by appending the next square to the current path, and add the new path to the queue.
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const next = [current[0] + move[0], current[1] + move[1]];

      if (
        next[0] >= 0 &&
        next[0] < 8 &&
        next[1] >= 0 &&
        next[1] < 8 &&
        !visited.has(`${next[0]},${next[1]}`)
      ) {
        visited.add(`${next[0]}, ${next[1]}`);
        const newPath = [...path, next];
        queue.push(newPath);
      }
    }
  }

  // If we have exhausted all possible paths in the queue and have not found the ending square, we return null to indicate that there is no path between the starting and ending squares.
  return null;
}

knightMoves([3, 3], [0, 0]);
