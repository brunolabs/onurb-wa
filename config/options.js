module.exports = options = (headless, start) => {
    const options = {
        blockCrashLogs: false,
        disableSpins: false,
        hostNotificationLang: 'PT_BR',
        logConsole: false,
        popup: false,
        viewport: {
            width: 1920,
            height: 1200
        },
        popup: 3012,
        multiDevice: false,
        defaultViewport: null,
        sessionId: 'onurb-bot',
        headless: headless,
        qrTimeout: 0,
        authTimeout: 60,
        restartOnCrash: start,
        cacheEnabled: true,
        useChrome: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: true,
    }

    return options
}