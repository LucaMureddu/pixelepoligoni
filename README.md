# 🎮 Pixel & Poligoni - Blog di Gaming Editoriale

> Design e sviluppo front-end di un magazine online moderno, incentrato sul gaming. [cite_start]L'interfaccia utilizza un tema dark mode, è ottimizzata per contenuti editoriali ad alta leggibilità e implementa un complesso layout a griglia. [cite: 39, 40, 41]

*(Nota: Inserisci qui uno screenshot della homepage)*

## 🚀 Live Demo

* [cite_start]**Guarda il sito live:** [https://pixelpoligoni.netlify.app/](https://pixelpoligoni.netlify.app/) [cite: 68]

## 🎯 Obiettivo del Progetto

[cite_start]L'obiettivo primario era dimostrare la capacità di creare un **design system visivo coerente** (dark mode con accento ciano) e un **layout editoriale complesso** in puro HTML e CSS. [cite: 44] [cite_start]Il progetto enfatizza l'esperienza utente (UX) per la lettura di articoli lunghi e la navigazione intuitiva su blog con molti contenuti. [cite: 45]

## 💻 Tecnologie Utilizzate

* [cite_start]**HTML5:** Struttura semantica multi-pagina (`index.html`, `guide.html`, `recensioni.html`, ecc.). [cite: 47]
* **CSS3 Avanzato:**
    * [cite_start]**Dark Theme Design:** Utilizzo di **Variabili CSS** (`:root`) per una gestione flessibile della palette. [cite: 49]
    * [cite_start]**Layout Magazine:** Uso combinato di **CSS Grid** e **Flexbox** per il layout complesso della homepage. [cite: 50]
    * [cite_start]**Design Responsive:** Media queries dettagliate per ottimizzare l'esperienza su tutti i dispositivi. [cite: 51]
* **JavaScript (Vanilla JS):**
    * [cite_start]**Interattività UI:** Implementazione del menu hamburger (toggle class) e di una funzionalità **Accordion FAQ**. [cite: 52]
    * [cite_start]**DOM Manipulation:** Logica per iniettare dinamicamente favicon e apple-touch-icon. [cite: 53]
* [cite_start]**Python Server:** Incluso un semplice server Python (`server.py`) per un test locale efficiente. [cite: 54]

## ✨ Caratteristiche Principali

* [cite_start]**Layout Editoriale Dinamico:** La homepage presenta una complessa griglia a 3 colonne per bilanciare i contenuti. [cite: 57]
* [cite_start]**Componenti Interattivi:** Pagina Contatti con modulo stilizzato e un **FAQ Accordion** funzionale. [cite: 58]
* [cite_start]**Organizzazione Contenuti:** Pagine Recensioni e Guide con schede ottimizzate per la lettura (inclusi metadati come difficoltà/durata). [cite: 59]
* [cite_start]**Accessibilità Mobile:** Menu hamburger funzionale con logica in JavaScript. [cite: 62]

## 🔧 Come Eseguirlo Localmente

1.  Clona il repository:
    ```bash
    git clone [URL_DEL_TUO_REPO]
    ```
2.  [cite_start]Avvia il server Python (richiede Python 3): [cite: 74]
    ```bash
    python3 server.py
    ```
3.  [cite_start]Apri `http://localhost:3000/` nel tuo browser. [cite: 75]

## 🧠 Lezioni Apprese

[cite_start]La sfida principale è stata orchestrare il complesso layout a griglia della homepage (`.latest-grid`) per farlo degradare in modo elegante su schermi più piccoli. [cite: 64] [cite_start]Ho imparato l'importanza della semantica del CSS Grid (`grid-template-areas`) per posizionare gli elementi in modo logico e garantire un design **veramente responsive** e manutenibile. [cite: 65]
