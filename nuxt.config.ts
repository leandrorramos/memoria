// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:[
        'vuetify/lib/styles/main.sass',
        '@mdi/font/scss/materialdesignicons.scss',
    ],
    build:{
        transpile:[
            "vuetify",
            "mdi",
        ]
    },
    vite:{
        define:{
            "process.env.DEBUG": false
        }
    },
})
