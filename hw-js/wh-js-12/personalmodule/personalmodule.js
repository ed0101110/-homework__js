function getGreetingMessage(username) {
    const currentHour = new Date().getHours();

    let greetingMessage = "";

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = `Good morning, ${username}!`;
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = `Good afternoon, ${username}!`;
    } else {
        greetingMessage = `Good evening, ${username}!`;
    }

    return greetingMessage;
}

module.exports = {
    getGreetingMessage: getGreetingMessage
};