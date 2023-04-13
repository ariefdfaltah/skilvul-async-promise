export function sorting_asc(strings) {
    for (let a = 0; a < strings.length; a++) {
        for (let b = a + 1; b < strings.length; b++) {
           if (strings[a].toLowerCase() > strings[b].toLowerCase()) {
              swap(a, b, strings)
           }
        }
    }
    return strings
}

function swap(index1, index2, strings) {
    let tempString = strings[index1];
    strings[index1] = strings[index2];
    strings[index2] = tempString;
 }