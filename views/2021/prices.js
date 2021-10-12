// tagung.forth-ev.de preis einstellungen

module.exports = {
    conference: "Forth Tagung",
    year: 2021,
    registerButton: "Anmelden",
    myName: "meineTagung",
    operatorEmail: "gerald.wodni@gmail.com",
    operatorBankAccount: "HINWEIS: dieser Wert wird über eine Umgebungsvariable bereitgestellt",
    chatRegistration: "HINWEIS: dieser Wert wird über eine Umgebungsvariable bereitgestellt",
    meeting: {
        openRegistration: "2021-10-12",
        start: "2021-11-10"
    },
    hotels: [
        {
            header: "Online - ForthTagung (11.-14. November)",
            description: "Voller Zugang",
            modes: [
                { name: "Einzelperson:",    value: "ForthTagung+Online",    complete: 0.00 },
            ]
        },
        {
            header: "Online - Tag0 & ForthTagung (10.-14. September)",
            description: "Voller Zugang",
            modes: [
                { name: "Einzelperson",     value: "Tag0+ForthgTagung+Online",    complete: 0.0 },
            ]
        }
    ]
}
