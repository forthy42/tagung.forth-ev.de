// tagung.forth-ev.de preis einstellungen

module.exports = {
    conference: "Forth Tagung",
    year: 2021,
    registerButton: "Anmelden",
    myName: "meineTagung",
    operatorEmail: "gerald.wodni@gmail.com",
    operatorBankAccount: "HINWEIS: dieser Wert wird über eine Umgebungsvariable bereitgestellt",
    chatRegistration: "HINWEIS: dieser Wert wird über eine Umgebungsvariable bereitgestellt",

    /* message to show after successful registration */
    successTemplate: function _successTemplate( { price } ) {
        return `Danke für Ihre Anmeldung!`
            //+ `\n Bitte überweisen Sie €${price} auf das Konto welches Sie in der Email finden.`
            + `\n In der Email finden Sie auch Ihren persönlichen 'meineTagung'-Link. Bitte speichern Sie diesen gleich als Bookmark,`
            + `\n denn mit ihm können Sie an der Tagung teilnehmen und Ihre Präsentationsdetails überarbeiten.`
            + `\n Die Email erhalten Sie von: ${process.env.SMTP_EMAIL}.`;
    },
    /* registration email text body */
    emailTemplate: function _emailTemplate( { prices, values, price, website } ) {
        return `Hotel: ${values.hotel}\nExtra Tage: ${values.extraDays}\nPreis (gesamt): ${price}`
            + ( price > 0 ? `\nBitte transferieren Sie den vollen Eurobetrag an:\n${prices.operatorBankAccount}` : '' )
            + ( prices.chatRegistration ? `\n\n${process.env.CHAT_REGISTRATION}` : '' )
            + `\n\nUm an der Konferenz teilzunehmen, und  Ihre Präsentation(en) selbst zu editieren verwenden Sie bitte folgendem Link: https://${website}/${prices.myName}/${values.editHash}`
            + `\n\nName: ${values.name}`
            //+ `\nAddress: ${values.address}`
            //+ `\nTelephone: ${values.telephone}`
            + `\nMitgliedsnummer: ${values.memberNumber}`
            + `\nEmail: ${values.email}`
            //+ `\n\nEntourage: ${values.partner}\nName: ${values.partnerName}\nAdresse: ${values.partnerAddress}`
            + `\n\nPräsentation: ${values.presentationTitle} Länge: ${values.presentationLength}\n${values.presentationDescription}`
            + `\n\nAnmerkung: ${values.remark}`;
    },
    meeting: {
        openRegistration: "2021-10-12",
        start: "2021-11-14"
    },
    bbbRooms: {
        cave:       { name: "Swaps Lair",   type: "leisure",    rights: "moderator" },
        conference: { name: "Konferenz",   type: "conference", rights: "attendee", layout: "PRESENTATION_FOCUS"},
        chair:      { name: "Vorsitzender",type: "conference", rights: "moderator",layout: "PRESENTATION_FOCUS", roomId: "conference" },
        salon:      { name: "Schloss",      type: "leisure",    rights: "moderator" },
        bar:        { name: "Bar",          type: "leisure",    rights: "moderator" },
        beach:      { name: "Strand",       type: "leisure",    rights: "moderator" },
        club:       { name: "Club",         type: "leisure",    rights: "moderator" },
        terrace:    { name: "Terrasse",     type: "leisure",    rights: "moderator" },
        waxeneck:   { name: "Waxeneck",     type: "leisure",    rights: "moderator" },
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
