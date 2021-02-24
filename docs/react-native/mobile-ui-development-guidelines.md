---
id: mobile-ui-development-guidelines
title: Mobile UI development guidelines
sidebar_label: Mobile UI development guidelines
---

import EditedBy from '../../src/components/EditedBy'

- All touchables should have a minimum of 45x45px width and height. It doesn’t mean that you have to scale up the inner icon/image, just allocate the space for touchable.
- Every UI element at the edge should have a minimum margin of 5px towards the edge. This should be more on the top edge considering notch and status bar.
- When developing, go for a screen with lower resolution (say a 5 inch screen) and make sure everything fits perfectly and then test it on higher resolutions.
- Giving color to the status bar according to the application’s theme will be a good UX.
- According to the application’s scope [landscape, portrait, tablet, iPad etc.,] specific width and height should be defined globally that is accessible for UI elements.
- Content quality should be maintained across various resolutions. Verify this in devices with both extreme resolution that comes under the application’s scope.
- Texts in the application should be consistent. So, make sure the font sizes specified are well-functioning.
- Images/graphics should maintain the quality on all devices.
- Size and color matters. It helps in readability of texts and icons.
- Feedback for user interactions - when the user taps over a button or while fetching data etc.,
- Keyboard displayed should be feature specific - for fields expecting email, number, etc.,

<EditedBy name="George T Kurian" date="20/05/2020" />
