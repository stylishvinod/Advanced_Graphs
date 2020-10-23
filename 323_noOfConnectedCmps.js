

// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let list = buildAdjList(n,edges);
    let visited = new Array(n).fill(null);
    let connected = 0;
    console.log("list", list);
    for(let i=0; i < n; i++) {
    //    console.log("visited", visited);
        if(!visited[i]) {
            connected++;
            bfs(i, list, visited)
        }
    }
    return connected;
};


const bfs = (start, list, visited) => {
    let qu = [start];
    visited[start] = 1;
    while(qu.length) {
        let node = qu.shift();
        let adj = list[node];
        adj.forEach(neighbour => {
            if(!visited[neighbour]) {
                visited[neighbour] = 1;
                qu.push(neighbour);
                
            }
        })
        
    }
    
}


const buildAdjList = (n, edges) => {
    let adjList = new Array(n).fill(null).map(a => []);
    
    for(const [u,v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    return adjList;
    
}