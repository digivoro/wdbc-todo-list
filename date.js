exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options); // es-419: Spanish for LA&Caribbean
}

exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options); // es-419: Spanish for LA&Caribbean
}