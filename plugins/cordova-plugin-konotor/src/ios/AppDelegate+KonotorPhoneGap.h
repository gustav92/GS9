#import "AppDelegate.h"

#import "Konotor.h"
#import "KonotorEventHandler.h"


@interface AppDelegate (notification)
- (void)applicationDidBecomeActive:(UIApplication *)application;
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo;

@end
