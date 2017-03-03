

const parseNote = function(str){
  // returns a note object (e.g. {pitch: "C#", beats: 2})
  // If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.
  let newStr = str.split("*");
  let note = {};

    note.pitch = newStr[0];

    if(isNaN(newStr[1])){
        newStr[1] = 1;
    }

    note.beats = newStr[1];
   return note;

};
// console.log(parseNote("cc"));


/////////////

const parseSong = function(str){
  let newStr = str.split(" ");
  let result = [];
  for(let item of newStr){
      result.push(parseNote(item));
  }
  return result;
};
