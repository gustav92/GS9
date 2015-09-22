# Konotor PhoneGap/Cordova Plugin
### Platform Support

This plugin supports PhoneGap/Cordova apps with version 3.0.0 and above running on iOS and Android.

## Installation
#### Automatic Installation using PhoneGap/Cordova CLI (for iOS and Android)

1 a) Install this plugin using PhoneGap/Cordova CLI:

Cordova 5 and above

     cordova plugin add cordova-plugin-konotor --variable APP_ID="YOUR_APP_ID" --variable APP_KEY="YOUR_APP_KEY"

Others

        phonegap plugin add https://github.com/konotor/phonegap-sdk.git --variable APP_ID="YOUR_APP_ID" --variable APP_KEY="YOUR_APP_KEY"

                                    or

        cordova plugin add  https://github.com/konotor/phonegap-sdk.git --variable APP_ID="YOUR_APP_ID" --variable APP_KEY="YOUR_APP_KEY"

(Note that the Phonegap CLI didn't support --variable before version 3.6.3, so please use the Cordova CLI as shown above in case you're on an older version)

1 b) Alternately, configure for phonegap build in config.xml

    <gap:plugin name="cordova-plugin-konotor" source="npm" version="1.0.0">
        <param name="APP_ID" value="YOUR_APP_ID"/>
        <param name="APP_KEY" value="YOUR_APP_KEY"/>
    </gap:plugin>

2. Add onload="onLoad()" to body tag : 
        
        <body onload="onLoad()">

3. Add this script tag to your index.html:

        <input id="KonotorMenu" type="button" value="Talk To Us" onclick="konotor.launchKonotorScreen();"></input>

4. Include the following script to your index.html 
        
        <script type="text/javascript" charset="utf-8">
            function onLoad() {
                document.addEventListener("deviceready", onDeviceReady, false);
            }
        
            function onDeviceReady() {
                konotor.init();
            }
        </script>
