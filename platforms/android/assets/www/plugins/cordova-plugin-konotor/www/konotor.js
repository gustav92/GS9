cordova.define("cordova-plugin-konotor.konotor", function(require, exports, module) { /*
 *  konotor.js
 *  PhoneGap native plugin for Konotor version 0.1
 *
 *  Copyright (c) 2013 Demach,Inc., All rights reserved.
 */

var Konotor_newMessageCallback = 0;
var Konotor_unreadCountValue=0;

module.exports = {
    // On Resume
    resume:function() {
        cordova.exec(null, null, "KonotorPhoneGap", "init", []);
    },

    // Initialize Konotor SDK
    init:function(appId, apiKey) {
        cordova.exec(null, null, "KonotorPhoneGap", "init", [appId, apiKey]);
    },

    // Launch the Feedback UI
    launchKonotorScreen:function() {
        cordova.exec(null, null, "KonotorPhoneGap", "launchFeedbackScreen", []);
    },


    setIdentifier:function(identifier) {
        if (identifier && typeof identifier === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setIdentifier", [identifier]);
        }
    },

    setUserName:function(username) {
        if (username && typeof username === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setUserName", [username]);
        }
    },

    setWelcomeMessage:function(welcomeString) {
        if (welcomeString && typeof welcomeString === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setWelcomeMessage", [welcomeString]);
        }
    },

    setUserEmail:function(useremail) {
        if (useremail && typeof useremail === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setUserEmail", [useremail]);
        }
    },

    setSupportName:function(supportname) {
        if (supportname && typeof supportname === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setSupportName", [supportname]);
        }
    },

    setFeedbackScreenTitle:function(feedbacktitlescreen) {
        if (feedbacktitlescreen && typeof feedbacktitlescreen === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setFeedbackScreenTitle", [feedbacktitlescreen]);
        }
    },

    setNoAudioRecording:function(audiorecording) {
        if (audiorecording && typeof audiorecording === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setNoAudioRecording", [audiorecording]);
        }
    },

    setNoPictureMessaging:function(picturemessaging) {
        if (picturemessaging && typeof picturemessaging === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setNoPictureMessaging", [picturemessaging]);
        }
    },

    setUserMeta:function(key,value) {
        if (key && typeof key === "string") {
            cordova.exec(null, null, "KonotorPhoneGap", "setUserMeta", [key,value]);
        }
    },

    getUnreadCount:function(){
        module.exports.updateUnreadCount();
        return Konotor_unreadCountValue;
    },

    updateUnreadCount:function() {
        cordova.exec(module.exports.setUnreadCount, null, "KonotorPhoneGap", "getUnreadCount", []);
    },

    setUnreadCount:function(unreadCountParameter){
        Konotor_unreadCountValue=unreadCountParameter;
    },

    registerUnreadCountChangedCallback:function(callbackFunction){
        Konotor_newMessageCallback=callbackFunction;
        cordova.exec(null, null, "KonotorPhoneGap", "registerUnreadCountChangedCallback", []);
    },
    unregisterUnreadCountChangedCallback:function(){
        newMessageCallback=null;
    },

    unreadCountChanged:function(){
        if(Konotor_newMessageCallback!=0){
            Konotor_newMessageCallback();
        }
    },
    update:function(){
        cordova.exec(null,null,"KonotorPhoneGap","update",[]);
    },

};


});
