
// https://leetcode.com/problems/graph-valid-tree/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    let adjList = getAdjList(n, edges);
    let visited = new Array(n).fill(null);
    let parent = new Array(n).fill(null);
    let connected = 0
    for(let i = 0; i <n; i++) {
        if(!visited[i]) {
            connected++;
            if(connected > 1) {
                return false;
            }
            
            if(!bfs(adjList, i, visited, parent)) {
                return false;
            }
        }
    }
    return true;
};

const bfs = (list, start, visited, parent) =>{
    let qu = [start];
    parent[start] = null;
    visited[start] = 1;
    while(qu.length) {
        const node = qu.shift();
        let neighbours = list[node];
        for(let i=0 ; i <neighbours.length; i++) {
            const neigh = neighbours[i];
            if(!visited[neigh]) {
                visited[neigh] = 1;
                parent[neigh] = node;
                qu.push(neigh);
            } else {
                if (parent[node] !== neigh) {
                    return false
                }
            }
            
        }
        
        
    }
    return true;
}

const getAdjList = (n, edges) =>  {
    let list = new Array(n).fill(null).map(a => []);
    
    for(let [u, v] of edges) {
        list[u].push(v);
        list[v].push(u);
    }
    return list;
}