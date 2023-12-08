import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let hoverProvider = vscode.languages.registerHoverProvider('slede8', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            // Define your hover messages here
            let message = '';
            if (word === 'SETT') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`SETT rB, rA`: Skriv verdien i rB til rA.\n\n");
                hoverText.appendMarkdown("`SETT r1, VALUE`: Skriv verdien til register rA. Verdier skrives på formen 0xNN eller NN.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'NOPE') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`NOPE`: Ikke gjør noe som helst.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'STOPP') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`STOPP`: Avslutt programmet.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'OG') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`OG rA, rB`: rA = rA & rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'ELLER') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`ELLER rA, rB`: rA = rA | rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'XELLER') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`XELLER rA, rB`: rA = rA ^ rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'VSKIFT') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`VSKIFT rA, rB`: rA = rA << rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'HSKIFT') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`HSKIFT rA, rB`: rA = rA >> rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'PLUSS') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`ELLER rA, rB`: rA = rA + rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'MINUS') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`ELLER rA, rB`: rA = rA - rB\n\n");
                hoverText.appendMarkdown("Aritmetiske operasjoner er modulo 0x100.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'LIK') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LIK rA, rB`: rA == rB => flag = 0 (false)\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'ULIK') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`ULIK rA, rB`: rA != rB => flag = 1 (true)\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'ME') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`ME rA, rB`: rA <  rB => flag = 1 (true)\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText); 
            }
            else if(word === 'MEL') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`MEL rA, rB`: rA <= rB => flag = 1 (true)`\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'SE') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LIK rA, rB`: rA >  rB => flag = 0 (false)\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'SEL') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LIK rA, rB`: rA >= rB => flag = 0 (false)\n\n");
                hoverText.appendMarkdown("Sammenligningsoperasjon.\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'HOPP') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`HOPP addresse`: hopper til den valgte adressen.\n\n");
                hoverText.appendMarkdown("`HOPP merkelapp`: hopper til den valgte merkelappen.\n\n");
                hoverText.appendMarkdown("Merk: En merkelapp er kun en referanse til en adresse, og vil derfor bli erstattet med en adresse i den monterte binærfila. Det kan likevel være enklere som utvikler å forholde seg til merkelapper.\n\n");
                hoverText.appendMarkdown("Merk: Man kan hoppe både oppover og nedover i koden.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'BHOPP') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`HOPP addresse`: hopper til den valgte adressen hvis `flag` er satt til 1 etter tidligere sammenligningsoperasjon.\n\n");
                hoverText.appendMarkdown("`HOPP merkelapp`: hopper til den valgte merkelappen hvis `flag` er satt til 1 etter tidligere sammenligningsoperasjon.\n\n");
                hoverText.appendMarkdown("Merk: En merkelapp er kun en referanse til en adresse, og vil derfor bli erstattet med en adresse i den monterte binærfila. Det kan likevel være enklere som utvikler å forholde seg til merkelapper.\n\n");
                hoverText.appendMarkdown("Merk: Man kan hoppe både oppover og nedover i koden.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'LES') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LES rN`: Dette flytter første ikke-konsumerte byte med føde inn i det valgte registeret, men forutsetter at det er føde igjen. Programmet slutter å samarbeide hvis det oppdager at det har gått tom for føde.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'SKRIV') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`SKRIV rN`: Verdien i det valgte registeret blir spyttet ut.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'FINN') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`FINN <merkelapp | adresse>`: Skriv adressen til merkelappen til r0 og r1. Mest signifikante bit (msb) skrives til r1, og minst signifikante bit (msb) skrives til r0. Hvis addressen er `0xABC` blir dermed `r0` satt til `0xBC` og `r1` til `0x0A`.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'LAST') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LAST rN`: Skriv verdien fra addressen `((r1 << 8) | r0) & 0x0FFF` til registeret `rN`.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'LAGR') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`LAGR rN`: Skriv verdien i registeret rN til addressen `((r1 << 8) | r0) & 0x0FFF`.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'TUR') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`TUR rN`: Man kan ta en tur til en adresse eller merkelapp.\n\n");
                return new vscode.Hover(hoverText);
            }
            else if(word === 'RETUR') {
                const hoverText = new vscode.MarkdownString();
                hoverText.appendMarkdown("`RETUR`: Når man er lei av å være på tur kan man returnere til avreiseadressen.\n\n");
                return new vscode.Hover(hoverText);
            }

            return new vscode.Hover(message);
        }
    });

    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}
