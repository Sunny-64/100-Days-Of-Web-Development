
module.exports.getDate = function(){
    const today = new Date(); 
    const options = {
        day : 'numeric', 
        month : 'long', 
        year : '2-digit'
    }
    return today.toLocaleDateString("en-IN", options);
}

module.exports.getWeekday = function(){
    const today = new Date(); 
    const options = {
        weekday : 'long'
    }
    return today.toLocaleDateString("en-IN", options);
}
