module.exports = function check(str, bracketsConfig) {
  let dictionary = [];
  
  bracketsConfig.forEach(x => {
    dictionary[x[0]] = x[1];
  });
  
  let result = str.split('').reduce((story, current) => {
    let lastElement = story[story.length - 1];
    
    if(dictionary[lastElement] === current) {
      story.pop();
    } else {
      story.push(current);
    }

    return story;    
  }, []);

  return !result.length;
}
