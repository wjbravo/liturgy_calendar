# Liturgy Calendar

A digital implementation of the Roman Catholic liturgical calendar and related resources from the *Missale Romanum*.

This repository contains the calendar interface, Missal navigation, liturgical indexes, readings, saints, common texts, prefaces, Eucharistic prayers, preferences, and the supporting code used to connect these resources.

The project was built primarily with HTML and JavaScript and includes support for a Cordova-based application environment.

---

## Why this project exists

Representing the liturgical year in software is more complicated than simply associating a celebration with a date.

The Roman Rite includes movable celebrations, liturgical seasons, saints, proper and common texts, readings, and other elements that need to remain connected correctly throughout the year.

This repository preserves an implementation of that work in a form that developers can inspect and continue improving.

It can also serve as a reference for anyone building Catholic applications, parish tools, educational projects, digital Missals, or other software that needs access to structured liturgical information.

---

## Why it matters

Liturgical software belongs to a relatively small technical niche, which also means that many developers who need this information end up rebuilding the same foundations independently.

Keeping these foundations publicly available has several benefits:

* existing work does not have to be recreated from scratch;
* liturgical logic can be inspected and corrected;
* older implementations can be preserved instead of disappearing with an application;
* developers can study how liturgical information has been structured;
* the project can gradually be modernized without losing its original knowledge;
* Catholic software projects can share a common technical foundation.

For applications that rely on liturgical information, this kind of code can become a small but critical part of the system.

The goal of keeping this repository public is therefore not only to preserve an application, but also to preserve the work behind it.

---

## Current contents

The project currently includes resources for areas such as:

* Liturgical calendar
* Roman Missal
* Temporal cycle
* Calendar of saints
* Commons
* Scripture readings
* Prefaces
* Eucharistic prayers
* Application preferences
* Help and navigation
* Images and interface resources

The main application entry point is `index.html`.

From there, the interface provides access to the main Missal, an alternate Missal configuration, the current liturgical calendar, help, and user preferences.

---

## Project structure

```text
liturgy_calendar/
│
├── index.html
├── applicationPreferences.js
├── preferencias.html
├── ayuda.html
├── ayudaweb.html
│
├── misal/
│   ├── ordinario/
│   ├── indice_tiempos.html
│   ├── indice_santos.html
│   ├── indice_comunes.html
│   ├── indice_lecturas.html
│   ├── indice_prefacios.html
│   ├── indice_pleg_euc.html
│   ├── feria_actual.html
│   └── ...
│
├── images/
├── plugins/
│
├── jquery.js
├── jquery.mobile-1.4.2.js
├── jquery.mobile.css
├── cordova.js
└── other interface resources
```

Some parts of the project follow the structure of the original mobile application, so the repository contains both application logic and interface assets.

---

## Technology

The current codebase is based mainly on:

* HTML
* CSS
* JavaScript
* jQuery
* jQuery Mobile
* Apache Cordova
* `localStorage` for application preferences and navigation state

This reflects the environment in which the application was originally developed.

One of the long-term opportunities for this project is to progressively separate the liturgical data and calculation logic from the original user interface so that the underlying information can be reused more easily by modern applications.

---

## Running the project

Clone the repository:

```bash
git clone https://github.com/wjbravo/liturgy_calendar.git
cd liturgy_calendar
```

For basic browser testing, the project can be served using any local HTTP server.

For example, with Python:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Some functionality was designed for a Cordova environment and may therefore behave differently when the project is opened directly in a desktop browser.

---

## Using the project as a reference

The repository can be useful even if you do not intend to use the original interface.

Developers may be particularly interested in the organization of:

```text
Liturgical seasons
        ↓
Celebrations
        ↓
Saints / Commons
        ↓
Readings
        ↓
Missal texts
        ↓
Prefaces / Eucharistic Prayers
```

A future goal is to make these relationships easier to consume independently from the legacy interface.

This would make it possible to reuse the underlying liturgical system in projects such as:

* Android or iOS applications
* websites
* parish software
* digital Missals
* educational tools
* liturgical calendars
* APIs
* desktop applications
* other Catholic open-source projects

---

## Preserving legacy software

Part of the purpose of this repository is preservation.

Software changes quickly. Frameworks become obsolete, mobile platforms change, and applications eventually need to be rewritten.

The liturgical knowledge represented by the software, however, remains valuable.

Instead of discarding an older implementation simply because its original framework is no longer modern, this repository keeps that work available so it can be understood, corrected, extracted, and eventually rebuilt with newer technologies.

Legacy code can still contain valuable knowledge.

---

## Contributions

Contributions are welcome.

Useful contributions may include:

* corrections to liturgical information;
* bug fixes;
* documentation improvements;
* code cleanup;
* accessibility improvements;
* modernization of legacy JavaScript;
* separation of liturgical data from presentation logic;
* tests for liturgical calculations;
* improved support for modern browsers;
* tools for validating calendar data.

If you find an error, please open an issue describing:

1. the affected date or celebration;
2. the expected result;
3. the current result;
4. the liturgical source supporting the correction, when applicable.

For liturgical software, corrections should preferably be supported by reliable liturgical sources rather than by another calendar application.

---

## Long-term direction

There is a lot of valuable information in this repository, but much of it still reflects the architecture of the original application.

A possible long-term direction is to gradually transform the project into a reusable liturgical engine with a clearer separation between:

```text
Liturgical data
        +
Calendar rules
        +
Calculation engine
        +
Presentation layer
```

This would allow the same liturgical foundation to power multiple applications without duplicating the underlying logic.

Other possible improvements include:

* structured liturgical data;
* documented calendar rules;
* automated tests;
* modern JavaScript modules;
* API-friendly output;
* JSON representations;
* improved internationalization;
* easier integration with external projects;
* documentation of original liturgical sources.

These changes do not need to happen all at once.

Preserving the existing implementation is already the first step.

---

## Liturgical accuracy

Liturgical calendars can vary according to country, diocese, religious community, edition of the Roman Missal, and decisions of competent ecclesiastical authorities.

For this reason, developers using this project in production should independently verify liturgical information against the official sources applicable to their territory.

If you identify an error or an outdated rule, contributions and documented corrections are welcome.

---

## Open source and preservation

One of the main reasons for publishing this project is to make the work available beyond the lifetime of a single application.

A liturgical implementation represents much more than source code. It contains decisions about dates, celebrations, relationships between texts, navigation, and years of accumulated work.

By preserving that work publicly, future developers have something they can study and build upon instead of beginning again from an empty project.

That is the spirit in which this repository is maintained.

---

## License

The repository is publicly available, but an explicit open-source license should be included before the project is treated as reusable open-source software by third parties.

A suitable license will be added to clearly define how the source code may be used, modified, and redistributed.

---

## Author

**Wilson J. Bravo**

GitHub: [@wjbravo](https://github.com/wjbravo)

---

> Software eventually changes. The knowledge behind it should not have to disappear with it.
