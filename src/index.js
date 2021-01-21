//start task
module.exports = function reverse (n) {
  if(n < 0){
    n*=(-1);
  }
  let numb = '';
n.toString().split('').reverse().forEach(elem =>{
numb += elem;
});
return +numb;
};
