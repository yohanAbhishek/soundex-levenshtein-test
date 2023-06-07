function soundex(name) {
  let s = [];
  let si = 1;
  let c;
  let mappings = "01230120022455012623010202";
  s[0] = name[0].toUpperCase();

  for (let i = 1, l = name.length; i < l; i++) {
    c = (name[i].toUpperCase()).charCodeAt(0) - 65;

    if (c >= 0 && c <= 25) {
      if (mappings[c] !== '0') {
        if (mappings[c] !== mappings[c - 1]) {
          s[si] = mappings[c];
          si++;
        }
      }
    }

    if (si > 3) {
      break;
    }
  }

  while (si <= 3) {
    s[si] = '0';
    si++;
  }

  return s.join('');
}

function countNonMatchingCharacters(name1, name2) {
  let nonMatchingCount = 0;
  const minLength = Math.min(name1.length, name2.length);

  for (let i = 0; i < minLength; i++) {
    if (name1[i] !== name2[i]) {
      nonMatchingCount++;
    }
  }

  nonMatchingCount += Math.abs(name1.length - name2.length);

  return nonMatchingCount;
}


function soundexAlgo (name1, name2) {
  const soundex1 = soundex(name1);
  const soundex2 = soundex(name2);

  console.log("Soundex for", name1, ":", soundex1);
  console.log("Soundex for", name2, ":", soundex2);

  // ------ Extra to calculate a similarity perecentage -----
  const nonMatchingCount = countNonMatchingCharacters(soundex1, soundex2);
  const score = (1 - (nonMatchingCount/4)) * 100
  console.log("Similarity score : ",score.toFixed(2), "%")
}

module.exports = { soundexAlgo };