module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'production-strapi',
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
    },
    //...
}