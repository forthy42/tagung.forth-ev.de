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
    bbbRooms: {
        conference: { name: "Konferenz",   type: "conference", rights: "attendee", layout: "PRESENTATION_FOCUS"},
        chair:      { name: "Vorsitzender",type: "conference", rights: "moderator",layout: "PRESENTATION_FOCUS", roomId: "conference" },
        salon:      { name: "Schloss",      type: "leisure",    rights: "moderator" },
        bar:        { name: "Bar",          type: "leisure",    rights: "moderator" },
        beach:      { name: "Strand",       type: "leisure",    rights: "moderator" },
        club:       { name: "Club",         type: "leisure",    rights: "moderator" },
        terrace:    { name: "Terrasse",     type: "leisure",    rights: "moderator" },
        cave:       { name: "Drachehöhle",  type: "leisure",    rights: "moderator" },
    },
    hotels: [
        {
            header: "Online - ForthTagung (12.-14. November)",
            description: "Voller Zugang",
            modes: [
                { name: "Einzelperson:",    value: "ForthTagung+Online",    complete: 0.00 },
            ]
        },
    ]
}
