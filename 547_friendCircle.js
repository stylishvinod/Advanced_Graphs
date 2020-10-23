// https://leetcode.com/problems/friend-circles/

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let connected = 0;
    for(let i = 0; i < M.length; i++) {
            if(M[i][i] === 1) {
                connected++;
                dfs(M, i, i);
            }
    }
    return connected;
};


const dfs = (M, i,j) => {
    M[i][j] = 0;
    M[i][i] = 0
    let friendList = getFriendList(M, i);
    
    for(let j of friendList) {
        M[i][j] = 0;
        dfs(M, j, i);
    }
    
}



const getFriendList = (M, i) => {
    let list = [];
    for(let j =0; j < M[0].length; j++) {
        if(j !== i && M[i][j] === 1) {
            list.push(j)
        }
    }
    return list;
}