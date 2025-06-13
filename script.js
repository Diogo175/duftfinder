const calineDuftListe = [
  // Damen
  { name: "À la Vie", category: "Damen", notes: ["Blumig", "Fruchtig"] },
  { name: "Très Jolie", category: "Damen", notes: ["Blumig", "Orientalisch"] },
  { name: "Jour en Rose", category: "Damen", notes: ["Blumig", "Orientalisch"] },
  { name: "Mon Amour", category: "Damen", notes: ["Blumig", "Pudrig"] },
  { name: "Femme Florale", category: "Damen", notes: ["Blumig", "Orientalisch"] },
  { name: "Madame Chérie", category: "Damen", notes: ["Blumig", "Orientalisch"] },
  { name: "Fleur Noir", category: "Damen", notes: ["Orientalisch", "Gourmand"] },
  { name: "Rouge Intense", category: "Damen", notes: ["Orientalisch", "Gourmand"] },
  { name: "Chérie de Fleurs", category: "Damen", notes: ["Blumig"] },
  { name: "Belle Icône", category: "Damen", notes: ["Orientalisch"] },
  { name: "Mon Paradis", category: "Damen", notes: ["Blumig", "Pudrig"] },

  // Herren
  { name: "Xtra Pure", category: "Herren", notes: ["Fruchtig", "Holzig"] },
  { name: "Signature Steel", category: "Herren", notes: ["Holzig"] },
  { name: "Powerful Black", category: "Herren", notes: ["Orientalisch"] },
  { name: "Absolute Blue", category: "Herren", notes: ["Aromatisch", "Frisch"] },
  { name: "Intense Gold", category: "Herren", notes: ["Orientalisch"] },
  { name: "Infinite Navy", category: "Herren", notes: ["Orientalisch"] },
];

document.getElementById("duftForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const ausgewaehlt = Array.from(document.querySelectorAll('input[name="note"]:checked'))
    .map(cb => cb.value);

  const gefiltert = calineDuftListe.filter(parfum =>
    ausgewaehlt.some(note => parfum.notes.includes(note))
  );

  const ergebnisContainer = document.getElementById("ergebnisse");
  ergebnisContainer.innerHTML = "";

  if (gefiltert.length === 0) {
    ergebnisContainer.innerHTML = "<p>Keine passenden Düfte gefunden 😢</p>";
    return;
  }

  gefiltert.forEach(parfum => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${parfum.name}</h3>
      <p><strong>Typ:</strong> ${parfum.category}</p>
      <p><strong>Duftrichtung:</strong> ${parfum.notes.join(", ")}</p>
    `;
    ergebnisContainer.appendChild(div);
  });
});
