Meteor.publish("messages", function() {
    if (!this.userId) {
      console.log('User not found... no publish');
        return [];
    } else {
      console.log('Publish data to user: ' + this.userId);
        return Message.find();
    }
});




Meteor.methods({
    commitMessage: function(message) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Message.insert({
            text: message,
            createdAt: new Date(),
            userId: Meteor.userId()
        });
    }
});
