module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'staging-strapi',
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
    },
    //...
}