$(document).ready(function () {
    $.cookieBar({
        message: 'Denne hjemmeside bruger cookies for at forbedre din oplevelse med siden. Vi håber, at det er ok og ellers kan du altid slå cookies fra.',
        acceptText: 'Accepter',
        policyButton: true,
        policyText: 'Læs mere',
        policyURL: '/betingelser/',
        bottom: true,
        element: '.body-bottom'
    });
});
