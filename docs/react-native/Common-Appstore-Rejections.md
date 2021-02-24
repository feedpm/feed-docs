---
id: common-appstore-rejections
title: Common Appstore Rejections
sidebar_label: Common Appstore Rejections
---

import EditedBy from '../../src/components/EditedBy'

- Only IAP should be used for app feature upgrade or subscriptions. Any alternate payment option should be removed.
- Cash rewards for virtual activities are against the policies of Apple.
- Smoke test the build with the live APIs before upload.
- Increment the build number before every upload.
- If using Expo, enable support for tablet in app.json even if you dont support tablet.
- Ensure screenshots are of required size & OS version.
- Don't use android screenshots for iOS
- Provide details for conditional screens screenshots if available.
- App icon should be added with the build.
- There shouldn't be any App crash.
- Replace UIWebView with latest WKWebView.
- Provide specific messages in plist for permissions. e.g. MyApp require camera permission to take profile photo.
- Handle Dark mode for iOS 13+.
- Restore purchase option is mandatory.
- Use latest XCode versions to upload builds.
- Http URL usage should be mentioned in info.plist.
- Provide sign in with Apple if any social login are used in the app.
- Do not force user to provide personal informations such as email if using sign in with Apple.
- Use facebook developer account for login with Instagram.
- Provide working login information or any other resources such as QR code that might be requird to review your app.
- Internal usage apps do not require login informations or sign in with Apple.

<EditedBy name="Firoz Ahmed" date="05/06/2020" />
