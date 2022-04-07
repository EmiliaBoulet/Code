function ucfirst(str) {
    if (str) {
            
    return str.charAt(0).toUpperCase() + str.slice(1);
}
return false;
}

const word = ucfirst();

console.log(word);

module.exports = ucfirst;

