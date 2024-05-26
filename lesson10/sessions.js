let sessionsData = JSON.parse(localStorage.getItem('sessions'))
let now = new Date();
const dateEnd = now.toLocaleDateString();
const timeEnd = now.toLocaleTimeString();

sessionsData.forEach(session => {
    let infoDateSession = document.createElement('div')
    infoDateSession.innerHTML = `Date Start Session: <strong>${session.date}</strong> - Date End Session: <strong>${dateEnd}</strong>`;
    let infoTimeSession = document.createElement('div')
    infoTimeSession.innerHTML = `Time Start Session: <strong>${session.time}</strong> - Time End Session: <strong>${timeEnd}</strong>`;

    document.body.append(infoDateSession, infoTimeSession);
})