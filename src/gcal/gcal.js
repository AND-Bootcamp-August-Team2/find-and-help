export const gotoGcal = (opportunity) => {
    return function () {
        const title = (opportunity.title).replace(/\s/g, '+')
        const date = (opportunity.dateFrom).replace(/-/g, '')
        const description = (opportunity.description).replace(/\s/g, '+')
        const location = (opportunity.location).replace(/\s/g, '+')
        const url = "https://calendar.google.com/calendar/u/0/r/eventedit?text="+title+"&dates="+date+"T090000ZGB/"+date+"T170000ZGB&details="+description+"&location="+location
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}