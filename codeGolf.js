// File filled with answers to code golf problems

// recursive function which creates a
// triangle of the parameter
// example:
// f('first')
// f
// fi
// fir
// firs
// first
// firs
// fir
// fi
// f
// prettier-ignore
f=([c,...r],s=`
`)=>c?s+f(r,s+c)+s:s;

//expanded verison
const youTubeComment = function([character, ...remainder], string = "\n") {
  if (character) {
    return string + youTubeComment(remainder, string + character) + string;
  } else {
    return string;
  }
};
