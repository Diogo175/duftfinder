const calineDuftListe = [
  {
    name: "CALINE Sweet Vanilla",
    notes: ["Vanille", "Blumig", "Orientalisch"],
  },
  {
    name: "CALINE Citrus Dream",
    notes: ["Zitrus", "Grün", "Blumig"],
  },
  {
    name: "CALINE Mystic Oud",
    notes: ["Orientalisch", "Vanille"],
  },
];

document.getElementById("duftForm").addEventListener("submit", function(e) {
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
    div.innerHTML = `<h3>${parfum.name}</h3><p>Duftrichtung: ${parfum.notes.join(", ")}</p>`;
    ergebnisContainer.appendChild(div);
  });
});
