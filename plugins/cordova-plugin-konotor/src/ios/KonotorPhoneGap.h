//

#import <Cordova/CDV.h>
#import "Konotor.h"
#import "KonotorUI.h"

@interface KonotorPhoneGap : CDVPlugin <KonotorDelegate>

- (void) init:(CDVInvokedUrlCommand*)command;

- (void) launchFeedbackScreen:(CDVInvokedUrlCommand*)command;

- (void) setIdentifier:(CDVInvokedUrlCommand*)command;

- (void) setUserName:(CDVInvokedUrlCommand*)command;

- (void) setWelcomeMessage:(CDVInvokedUrlCommand*)command;

- (void) setUserEmail:(CDVInvokedUrlCommand*)command;

- (void) setUserMeta:(CDVInvokedUrlCommand*)command;

- (void) updateUnreadCount:(CDVInvokedUrlCommand*)command;

- (void) update:(CDVInvokedUrlCommand*)command;

- (void) registerUnreadCountChangedCallback:(CDVInvokedUrlCommand *)command;

@end
