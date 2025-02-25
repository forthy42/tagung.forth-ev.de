// tagung.forth-ev.de preis einstellungen

module.exports = {
    conference: "Forth Tagung",
    year: 2025,
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
            + `\nAddress: ${values.address}`
            + `\nTelephone: ${values.telephone}`
            + `\nMitgliedsnummer: ${values.memberNumber}`
            + `\nEmail: ${values.email}`
            + `\n\nEntourage: ${values.partner}\nName: ${values.partnerName}\nAdresse: ${values.partnerAddress}`
            + `\n\nPräsentation: ${values.presentationTitle} Länge: ${values.presentationLength}\n${values.presentationDescription}`
            + `\n\nAnmerkung: ${values.remark}`;
    },
    meeting: {
        openRegistration: "2025-01-23",
        start: "2025-04-25",
        partnerComplete: 220,
        partnerWithout0: 220,
    },
    hotels: [
        {
            header: "Forth Tagung im WIR-Projekt Tagungshaus (24.-27. April)",
            description: "Übernachten+Tagung im WIR-Projekt Tagungshaus",
            modes: [
                { name: "Übernachtung + Tagungsbeitrag:", value: "Bett+Tagung", complete: 295.00 },
            ]
        },
        {
            header: "Forth Tagung ohne Übernachtungen (24.-27. April)",
            description: "Tagung im WIR-Projekt Tagungshaus",
            modes: [
                { name: "Tagungsbeitrag:", value: "Tagung", complete: 220.00 },
            ]
        },
    ]
}
