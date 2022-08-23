export const gotoGcal = () => {
    const url = "https://calendar.google.com/calendar/r/eventedit?text=Community+Cleanup&dates=20220828T120000Z/20220829T140000Z&details=Clean+up&location=Leeds"
    window.open(url, '_blank', 'noopener,noreferrer');
}