function getEditDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    var matrix = [];
    var i, j;
  
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
  
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            Math.min(matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1) // deletion
          );
        }
      }
    }
  
    return matrix[b.length][a.length];
  }

function levenshteinDistance (name1, name2) {
    var distance = getEditDistance(name1, name2);
    console.log("Levenshtein distance: " + distance);

    // --------------------------- Extra to calculate the similarity percentage -------------------------
    var longestName = name1.length > name2.length ? name1 : name2;
    const score = (1-(distance/longestName.length)) * 100
    console.log("Levenshtein similarity score : ",score.toFixed(2), "%")    
}

module.exports = { levenshteinDistance };