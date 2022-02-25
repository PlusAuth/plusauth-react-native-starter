module.exports = {
  issuer: 'https://<PLUSAUTH_TENANT_ID>.plusauth.com',
  clientId: '<PLUSAUTH_CLIENT_ID>',
  redirectUrl: 'com.plusauth.reactnativeexample:/oauthredirect/login',
  postLogoutRedirectUrl: 'com.plusauth.reactnativeexample:/',
  scopes: ['openid', 'profile', 'email', 'offline_access']
}
