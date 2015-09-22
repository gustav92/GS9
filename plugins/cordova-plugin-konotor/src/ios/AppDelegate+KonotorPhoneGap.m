#import "AppDelegate+KonotorPhoneGap.h"
#import "KonotorPhoneGap.h"
#import <objc/runtime.h>

@implementation AppDelegate (notification)

- (id) getCommandInstance:(NSString*)className
{
    return [self.viewController getCommandInstance:className];
}

// its dangerous to override a method from within a category.
// Instead we will use method swizzling. we set this up in the load call.
+ (void)load
{
    Method original, swizzled;
    
    original = class_getInstanceMethod(self, @selector(init));
    swizzled = class_getInstanceMethod(self, @selector(swizzled_init));
    method_exchangeImplementations(original, swizzled);
}

- (AppDelegate *)swizzled_init
{
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(createNotificationChecker:)
                                                 name:@"UIApplicationDidFinishLaunchingNotification" object:nil];
    
    // This actually calls the original init method over in AppDelegate. Equivilent to calling super
    // on an overrided method, this is not recursive, although it appears that way. neat huh?
    return [self swizzled_init];
}

- (void)createNotificationChecker:(NSNotification *)notification
{
    NSDictionary *launchOptions = [notification userInfo];
    
    NSString *appId = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"AppId"];
    NSString *appKey = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"AppKey"];
    
    /* Initialize Konotor*/
    [Konotor InitWithAppID:appId AppKey:appKey withDelegate:[KonotorEventHandler sharedInstance]];
    
	/* Set welcome message as deemed fit */
	[Konotor setUnreadWelcomeMessage:@"Thanks for trying our app! Do reach out to us if you have any inputs or feedback, and we will respond to you as soon as we can!"];
	
	/* Enable remote notifications */
#if(__IPHONE_OS_VERSION_MAX_ALLOWED >=80000)
    if(SYSTEM_VERSION_GREATER_THAN_OR_EQUAL_TO(@"8.0")){
    	UIUserNotificationSettings *settings =
           [UIUserNotificationSettings settingsForTypes:UIUserNotificationTypeAlert |
            UIUserNotificationTypeBadge |
            UIUserNotificationTypeSound categories:nil];
        [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
		[[UIApplication sharedApplication] registerForRemoteNotifications];
	}
    else
#endif
        [[UIApplication sharedApplication] registerForRemoteNotificationTypes: (UIRemoteNotificationTypeBadge | UIRemoteNotificationTypeSound | UIRemoteNotificationTypeAlert)];
 
    // Auto-generated code from PhoneGap goes here

    [self.window makeKeyAndVisible]; // or similar code to set a visible view
 
	// Set your view before the following snippet executes 
	/* Handle remote notifications */
	NSDictionary* payload=[launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
	if(payload!=nil)
 	   [Konotor handleRemoteNotification:payload withShowScreen:YES];

	/* Any other code to be executed on app launch */

	/* Reset badge app count if so desired */
	[[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
     [Konotor newSession];
	 
	 /* Reset badge app count if so desired */
 	 [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    [Konotor addDeviceToken:deviceToken];
}

-(void) application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
{
    if([application applicationState]==UIApplicationStateActive)
        [Konotor handleRemoteNotification:userInfo withShowScreen:NO];
    else
        [Konotor handleRemoteNotification:userInfo withShowScreen:YES];
}

@end