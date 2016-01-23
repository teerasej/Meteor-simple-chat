Template.messagebox.events({
    "click #js-send-message-btn": function(event, template) {
        // Prevent default browser form submit


        // Get value from form element
        var input = template.find("#js-messagebox");
        // console.log('Got message: ');
        // console.log(input.value);

        Message.insert({
            text: input.value,
            userId: Meteor.userId(),
            createdAt: new Date()
        });

        template.find("#js-messagebox").value = "";
    }
});
