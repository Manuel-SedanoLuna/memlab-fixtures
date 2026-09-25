# memlab-fixtures

PÃ¡ginas pÃºblicas y escenarios para probar el agente de memlab.

| Escenario | `scenarioPath` | Resultado esperado |
|---|---|---|
| Limpio, es el default | `memlab/scenario.js` | El scan termina sin fugas |
| Fuga a propÃ³sito | `memlab/scenario-leak.js` | El scan encuentra objetos retenidos |
| Escenario roto | `memlab/scenario-broken.js` | memlab falla antes de medir |

Las pÃ¡ginas viven en GitHub Pages:

- https://manuel-sedanoluna.github.io/memlab-fixtures/pages/clean.html
- https://manuel-sedanoluna.github.io/memlab-fixtures/pages/leak.html
