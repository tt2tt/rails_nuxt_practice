export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  auth: {
  redirect: {
      login: '/users/login',
      logout: '/',
      callback: false,
      home: '/users/profile',
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/v1/auth/login', method: 'post', propertyName: 'token' },
        logout: { url: '/api/v1/auth/logout', method: 'post' },
        user: false,
      },
    }
  }
},

  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
