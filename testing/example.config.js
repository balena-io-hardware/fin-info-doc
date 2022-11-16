module.exports = [
    {
        // Device under test (DUT) name goes here
        deviceType: "fin-cm3",
        // SUITE NAME GOES HERE
        suite: `${__dirname}/manufacturing`,
        config: {

            // Network configuration for the DUT 
            networkWired: true,
            networkWireless: true,

            // balenaOS version that is downloaded using fetchOS helper. Default: latest
            downloadVersion: 'latest',

            // Needed the provision the DUT to a balenaCloud fleet
            balenaApiKey: process.env.BALENA_CLOUD_API_KEY,
            balenaApiUrl: 'balena-cloud.com',
            organization: process.env.BALENA_CLOUD_ORG,
        },

        // If you don't want to upload an image, set the image property to false
        // To run the e2e test suite, you won't need to upload an image
        image: false,

        // Worker configuration: Pointing to a Fleet
        // https://balena-os.github.io/leviathan/pages/Getting-Started/config-reference.html#different-workers-configurations-available
        workers: {
            balenaApplication: 'fin-qa',
            apiKey: process.env.BALENA_CLOUD_API_KEY
        }
    }
]