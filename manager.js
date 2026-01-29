// manager.js
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const stringSimilarity = require('string-similarity');
const { format, isValid, parseISO, compareDesc } = require('date-fns');

const VIP_FILE_PATH = path.join(__dirname, 'vip.js');

const loadVipUsers = () => {
    const content = fs.readFileSync(VIP_FILE_PATH, 'utf-8');
    const match = content.match(/const vipUsers = \s*(\[\s*[\s\S]*?\])/);
    
    if (!match) {
        console.error("❌ No se pudo encontrar el array vipUsers en vip.js");
        process.exit(1);
    }

    try {
        return eval(match[1]); 
    } catch (e) {
        console.error("❌ Error parseando los datos de usuarios:", e);
        process.exit(1);
    }
};

const saveVipUsers = (users) => {
    users.sort((a, b) => {
        const dateA = parseISO(a.startDate);
        const dateB = parseISO(b.startDate);
        return compareDesc(dateA, dateB);
    });

    let content = fs.readFileSync(VIP_FILE_PATH, 'utf-8');
    
    const newArrayString = JSON.stringify(users, null, 4)
        .replace(/"name":/g, 'name:')
        .replace(/"startDate":/g, 'startDate:')
        .replace(/"plan":/g, 'plan:');

    const newContent = content.replace(
        /const vipUsers = \s*(\[\s*[\s\S]*?\])/,
        `const vipUsers = ${newArrayString}`
    );

    fs.writeFileSync(VIP_FILE_PATH, newContent, 'utf-8');
    console.log("✅ vip.js actualizado y reordenado correctamente (Nuevos arriba).");
};

const main = async () => {
    const users = loadVipUsers();
    console.log(`\n🔹 Usuarios actuales: ${users.length}\n`);

    const { inputName } = await inquirer.prompt([{
        type: 'input',
        name: 'inputName',
        message: '👤 Nombre del usuario:',
        validate: input => input ? true : "El nombre no puede estar vacío."
    }]);

    let targetUser = null;
    let isUpdate = false;

    if (users.length > 0) {
        const userNames = users.map(u => u.name);
        const matches = stringSimilarity.findBestMatch(inputName, userNames);
        const bestMatch = matches.bestMatch;
        
        if (bestMatch.rating > 0.6) {
            const { confirmMatch } = await inquirer.prompt([{
                type: 'confirm',
                name: 'confirmMatch',
                message: `⚠️ ¿Quisiste decir "${bestMatch.target}"? (Similitud: ${Math.round(bestMatch.rating * 100)}%)`,
                default: true
            }]);

            if (confirmMatch) {
                targetUser = users.find(u => u.name === bestMatch.target);
                isUpdate = true;
                console.log(`✏️ Modificando usuario existente: ${targetUser.name}`);
            }
        }
    }

    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'planDuration',
            message: '📅 ¿Qué plan tiene?',
            choices: [
                { name: '3 Meses (Standard)', value: 3 },
                { name: '1 Año (Promo)', value: 12 }
            ]
        },
        {
            type: 'input',
            name: 'customDate',
            message: '📆 Fecha de inicio (YYYY-MM-DD):',
            default: format(new Date(), 'yyyy-MM-dd'),
            validate: (input) => {
                if (isValid(parseISO(input)) && input.match(/^\d{4}-\d{2}-\d{2}$/)) {
                    return true;
                }
                return "❌ Formato inválido. Usa YYYY-MM-DD (Ej: 2026-01-20)";
            }
        }
    ]);

    const userData = {
        name: isUpdate ? targetUser.name : inputName,
        startDate: answers.customDate,
        plan: answers.planDuration
    };

    if (isUpdate) {
        const index = users.findIndex(u => u.name === targetUser.name);
        users[index] = userData;
    } else {
        users.push(userData);
    }

    saveVipUsers(users);
};

main();