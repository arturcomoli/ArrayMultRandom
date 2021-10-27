function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function matrizRandom(n){
  let mat = [];
  for (let i = 0; i < n; i++) {
      mat[i] = new Array(n);
      for(let j = 0; j < n; j++){
        mat[j] = new Array(n);
        for (let i = 0; i < mat.length; i++){
            for(let j = 0; j < mat.length; j++){
                k = random(-100, 100)
                mat[i][j] = k;
            }
        }
      }
  }
  console.table(mat);
}