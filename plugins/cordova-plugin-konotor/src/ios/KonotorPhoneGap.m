//

#import "KonotorPhoneGap.h"
#import "Konotor.h"

@implementation KonotorPhoneGap


static id  unreadCountObserver = nil;
static int prevUnreadCount = -1;


- (void)init:(CDVInvokedUrlCommand*)command {
    NSString* appID = [command.arguments objectAtIndex:0];
    NSString* appKey = [command.arguments objectAtIndex:1];
    [self.commandDelegate runInBackground:^{
        [Konotor InitWithAppID:appID AppKey:appKey withDelegate:[KonotorEventHandler sharedInstance]];
    }];
}

- (void) launchFeedbackScreen:(CDVInvokedUrlCommand *)command {
    [KonotorFeedbackScreen showFeedbackScreen];
}

- (void) setIdentifier:(CDVInvokedUrlCommand *)command {
    NSString* identifier = [command.arguments objectAtIndex:0];
    [Konotor setUserIdentifier:identifier];
}

- (void) setUserName:(CDVInvokedUrlCommand *)command {
    NSString* name = [command.arguments objectAtIndex:0];
    [Konotor setUserName:name];
}

- (void) setWelcomeMessage:(CDVInvokedUrlCommand *)command {
    NSString* message = [command.arguments objectAtIndex:0];
    [Konotor setUnreadWelcomeMessage:message];
}
- (void) setUserEmail:(CDVInvokedUrlCommand *)command {
    NSString* email = [command.arguments objectAtIndex:0];
    [Konotor setUserEmail:email];
}

- (void) setUserMeta:(CDVInvokedUrlCommand *)command {
    NSString* key = [command.arguments objectAtIndex:0];
    NSString* value= [command.arguments objectAtIndex:1];
    [Konotor setCustomUserProperty:value forKey:key];
}

- (void) registerUnreadCountChangedCallback:(CDVInvokedUrlCommand *)command {
    if(unreadCountObserver)
    [[NSNotificationCenter defaultCenter] removeObserver:unreadCountObserver];
    
    int unreadCount = [Konotor getUnreadMessagesCount];
    [self.webView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat:@"Konotor.setUnreadCount(%d)",unreadCount]];
    
    if(unreadCount != prevUnreadCount)
    {
        prevUnreadCount = unreadCount;
        [self.webView performSelectorOnMainThread:@selector(stringByEvaluatingJavaScriptFromString:) withObject:@"Konotor.unreadCountChanged()" waitUntilDone:NO];
    }
     
    
    unreadCountObserver = [[NSNotificationCenter defaultCenter] addObserverForName:@"KonotorUnreadMessagesCount" object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification *note)
                           {
                            //   [self.webView stringByEvaluatingJavaScriptFromString:@"alert('hey hey')"];
                               int unreadCount = [Konotor getUnreadMessagesCount];
                               [self.webView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat:@"Konotor.setUnreadCount(%d)",unreadCount]];
                               
                               if(unreadCount != prevUnreadCount)
                               {
                                   prevUnreadCount = unreadCount;
                                   [self.webView performSelectorOnMainThread:@selector(stringByEvaluatingJavaScriptFromString:) withObject:@"Konotor.unreadCountChanged()" waitUntilDone:NO]; 
                               }
                           }];

}


- (void) updateUnreadCount:(CDVInvokedUrlCommand *)command {
    int count= [Konotor getUnreadMessagesCount];
    CDVPluginResult *result=[CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:count];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void) update:(CDVInvokedUrlCommand *)command {
    return;
}



@end
