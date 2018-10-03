
var db = {
    messages: [{
        title: 'Title 1',
        message: 'This is message 1',
        likes: 0
    },
    {
        title: 'Title 2',
        message: 'This is message 2',
        likes: 0
    }],
    siteVisits: 0
}; 

module.exports = {
    getAllMessages: function() {
        return db.messages;
    },
    getMessagesByUser: function(user) {
        return db.messages.filter(name => name.nickname === user);
    },
    getSiteStats: function() {
        return {
            siteVisits: db.siteVisits,
            messages: db.messages.length
        };
    },
    postMessage: function(message) {
        db.messages.push(message);
        console.log('New message added');
    }
};