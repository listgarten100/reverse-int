//start task
module.exports = function reverse (n) {
  let numb = '';

  if(n < 0) n*=(-1); 

  let arr = n.toString().split('').reverse();
  arr.forEach(elem =>{
    numb += elem;
  });
  
  return +numb;
};
