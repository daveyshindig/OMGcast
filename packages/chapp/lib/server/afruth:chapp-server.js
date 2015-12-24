Meteor.methods({
    enterChat: function(chatText,chatDoc,chatUser) {
        check(chatText, String);
        check(chatDoc, Match.Any);
        check(chatUser, Match.Any);

        if (!chatDoc)
            chatDoc = ChappOptions.defaultDocId;

        if (!chatUser)
            chatUser = ChappOptions.defaultUserName;

        Chapps.insert({
            chatText: chatText,
            chatDoc: chatDoc,
            chatUserName: chatUser,
            chatDate: new Date()
        });
    }
});

Meteor.publish("chapps", function(docId, dateNow) {
    check(docId, Match.Any);
    check(dateNow, Date);

    if (!docId)
        docId = ChappOptions.defaultDocId;

    var query = {
        chatDoc: docId
    };

    if (dateNow){
        query.chatDate = {
            $gte: dateNow
        }
    }

    return Chapps.find(query,{
        sort: {
            chatDate: 1
        },
        limit: 50
    });
});