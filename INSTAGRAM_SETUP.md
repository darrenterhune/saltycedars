### Option 1: Instagram Basic Display API (Recommended)

This is the most reliable and official way to pull Instagram posts.

#### Setup Steps:

1. **Create a Facebook Developer Account**

   - Go to [developers.facebook.com](https://developers.facebook.com)
   - Create a new app
   - Add Instagram Basic Display product

2. **Configure Instagram Basic Display**

   - Add your Instagram account
   - Generate access tokens
   - Get your user ID

3. **Update the JavaScript**
   - Replace the placeholder feed with real API calls
   - Add your access token and user ID

#### Example API Call:

```javascript
const response = await fetch(
  `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN`,
);
```
