Template.chatroom.helpers({
    messages: function() {
        return Message.find();
    }
});

Template.chatBalloon.helpers({
    layoutBalloon: function(user){
        if (user == "Pon") {
            return "user-message";
        } else {
            return "they-message";
        }
    },
    // spacerSize: function(user) {
    //     console.log(user);
    //     if (user == "Pon") {
    //         return "col-md-8 col-lg-9";
    //     } else {
    //         return "";
    //     }
    // },
    // balloonSize: function(user) {
    //     console.log(user);
    //     if (user == "Pon") {
    //         return "col-md-4 col-lg-3 balloon-me";
    //     } else {
    //         return "col-md-12 col-lg-12 balloon-they";
    //     }
    // }
})
