Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://' + 
    encodeURIComponent(Meteor.settings.emailUsername) + ':' +
    encodeURIComponent(Meteor.settings.emailPassword) + '@' +
    encodeURIComponent(Meteor.settings.emailServer) + ':'  +
    Meteor.settings.emailPort;
  
  Accounts.emailTemplates.siteName = '808 Mix';

  Accounts.emailTemplates.verifyEmail.subject = function() {
    return '808Mix Admin <davey@ktuh.org>';
  };

  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address for 808 Mix';
  };

  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Hi, ' + user.username + ',\n\n'
      + 'Mahalo for registering for the 808 Mix app. Please click on the '
      + 'following link to verify your email address: \r\n\n' + url
      + '\n\n';
  };

  Accounts.config({
    sendVerificationEmail: true
  });

  // Accounts.validateLoginAttempt(function(type) {
  //   if (type.user && type.user.emails && !type.user.emails[0].verified )
  //       if (type.user && type.user.firstLogin == true) {
  //         type.user.firstLogin = false;
  //         return true;
  //       } else {
  //         throw new Meteor.Error(100002, "To log in, please verify email address." );
  //       }

  //   return true;
  // });
});