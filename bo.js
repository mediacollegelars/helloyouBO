const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function startStory() {
  console.log('Begin...');
  console.log('Je bent klaar van school, je hebt honger, maar je zit na te denken. Wat wil je doen?\n');

  console.log('(1) Direct naar het station gaan.');
  console.log('(2) Iets eten omdat je nog niets hebt gegeten en met vrienden naar Amsterdam gaan.\n');

  const choice1 = await prompt('Kies 1 of 2: ');

  if (choice1 === '1') {
    console.log('Je besluit om direct naar het station te gaan.\n');

    // Continue with the story after choosing not to do drugs
    console.log('(3) Je beslist om, als je thuis bent, naar de wc te gaan omdat het hier waarschijnlijk smerig is.');
    console.log(' Je wacht op je eten en eet het op. Je ziet iemand uit de wc gaan die er raar uitziet, maar je probeert niet gemeen te zijn en gaat je ding doen.');
    console.log(' Je gaat naar de wc, het is erg smerig, dus je probeert snel weg te gaan. Er is iemand raars in de wc, dus je gaat snel weg.');
    
    const choice6 = await prompt('Kies 3');
3
    if (choice6 === '3') {
      const choice6 = await prompt('Kies 3');

if (choice6 === '3' || choice6 === '4' || choice6 === '5') {
  console.log('Je hebt besluit om erna pas naar de wc te gaan, je wacht tot je eten klaar is en eet het op.\n');
  // Voeg hier de rest van het verhaal toe op basis van keuzes
} else {
  rl.close();
}

      rl.close();
    }

  } else if (choice1 === '2') {
    console.log('Je besluit met vrienden naar Amsterdam te gaan.\n');

    console.log('(1) Drugs proberen met je vrienden.');
    console.log('(2) Niet meedoen en je eigen weg gaan naar het station.\n');

    const choice2 = await prompt('Kies 1 of 2: ');

    if (choice2 === '1') {
      console.log('Je besluit drugs te proberen met je vrienden.\n');
      console.log("Je wordt een beetje high en dat voelt wel fijn, maar je bent nog wel ok. Wat wil je nu doen?");

      console.log("(1) Je gaat verder drugs doen met je vrienden.");
      console.log("(2) Je beslist om te stoppen met drugs.");

      const choice5 = await prompt('Kies 1 of 2: ');

      if (choice5 === '1') {
        console.log('Je gaat verder met drugs doen met je vrienden.\n');
        console.log("Terwijl je verder gaat, voel je je steeds slechter en raak je bewusteloos.");
        console.log("Je wordt wakker in een ambulance en beseft dat het geen goede keuze was.");
        console.log('Einde 1: Je bent high in een ambulance.');
        // Einde 1
      } else if (choice5 === '2') {
        console.log('Je besluit te stoppen met drugs.\n');
        // Continue with the options after choosing not to do drugs
        console.log('(3) Een andere optie na het stoppen met drugs.');
        const choiceAfterStoppingDrugs = await prompt('Kies 3: ');

        if (choiceAfterStoppingDrugs === '3') {
          console.log('Je gaat verder met het verhaal na het stoppen met drugs.\n');
          // Voeg hier de rest van het verhaal toe op basis van keuzes
        } else {
          rl.close();
        }
      } else {
        rl.close();
      }

    } else if (choice2 === '2') {
      console.log('Je besluit niet mee te doen en je eigen weg te gaan naar het station.\n');
      console.log('Je had dit niet van plan. Het is enorm slecht voor je. Je zegt nee tegen drugs.');
      console.log('Je vrienden vinden het jammer maar accepteren het.');
      console.log('Verder gingen jullie gewoon random dingen doen om de tijd te doorbreken.');
      console.log('Het wordt laat, jij en je vrienden gaan naar het station.\n');

      console.log('(1) Je kunt ervoor kiezen om hen te verlaten en zonder hen naar huis te gaan.');
      console.log('(2) Je blijft met je vrienden want je kan ze nu toch niet alleen laten?\n');

      const choice3 = await prompt('Kies 1 of 2: ');

      if (choice3 === '1') {
        console.log('Je besluit hen te verlaten en zonder hen naar huis te gaan.\n');
        console.log('Einde 2: Je hebt hen verlaten.');
        // Einde 2
      } else if (choice3 === '2') {
        console.log('Ze vinden het cool dat je met hen blijft en niet in de steek laat. Jij bent hier de enige die een beetje normaal is.\n');

        console.log('(1) Je familie komt je ophalen en je gaat veilig naar huis.');
        console.log('(2) Je besluit een Uber te bellen en komt veilig thuis.\n');

        const choice4 = await prompt('Kies 1 of 2: ');

        if (choice4 === '1') {
          console.log('Je familie komt je ophalen en je gaat veilig naar huis.\n');
          console.log('Einde 3: Je bent veilig thuisgekomen met je familie.');
          // Einde 3
        } else if (choice4 === '2') {
          console.log('Je besluit een Uber te bellen en komt veilig thuis.\n');
          console.log('Einde 3: Je bent veilig thuisgekomen met een Uber.');
          // Einde 3
        } else {
          rl.close();
        }

      } else {
        rl.close();
      }
    } else {
      rl.close();
    }

    // Continue with the story after choosing not to do drugs
    rl.close();
  } else {
    rl.close();
  }
}

startStory();
