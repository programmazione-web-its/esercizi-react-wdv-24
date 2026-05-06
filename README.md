# Esercizi di ripasso

---

## Esercizio 1 — JSX, componenti e rendering di liste

Crea un componente `PizzaMenu` che riceve come prop un array di oggetti pizza:

```js
const pizzas = [
  { id: 1, name: 'Margherita',  price: 8.5, ingredients: ['pomodoro', 'mozzarella'], soldOut: false },
  { id: 2, name: 'Diavola',     price: 10,  ingredients: ['pomodoro', 'mozzarella', 'salame'], soldOut: true },
  { id: 3, name: 'Capricciosa', price: 11,  ingredients: ['pomodoro', 'mozzarella', 'prosciutto', 'funghi'], soldOut: false },
]
```

- Renderizza la lista con `map()` e la prop `key` sull'elemento radice.
- Per ogni pizza mostra nome, lista ingredienti e prezzo.
- Se `soldOut === true` applica `className="sold-out"` al wrapper e non mostrare il prezzo.
- Il componente è esportato come default e importato in `App`.

---

## Esercizio 2 — Props forwarding

Crea un componente `Button` riutilizzabile.

- Accetta le props esplicite `children` e `variant` (valori: `'primary'`, `'danger'`, `'ghost'`; default: `'primary'`).
- Tutte le altre props HTML native (`onClick`, `disabled`, `type`, `id`, ecc.) vengono inoltrate all'elemento `<button>` interno tramite il rest/spread operator.
- Il `className` finale è `btn btn--${variant}`, con l'aggiunta di `btn--disabled` se `disabled` è `true`.
- Dimostralo in `App` con almeno 3 utilizzi: un bottone primario con `onClick`, uno danger disabilitato, uno ghost con `type="submit"`.

---

## Esercizio 3 — Default props e tag HTML dinamici

Crea un componente `Heading` polimorfico.*

- Accetta la prop `level` (intero da 1 a 6, default: `2`) per determinare il tag HTML da renderizzare (`h1`…`h6`).
- Accetta la prop `color` (stringa CSS, default: `'inherit'`) applicata come inline style.
- Accetta `children` per il contenuto.
- Dimostralo con heading di livelli 1, 3 e 5, colori e testi diversi.

  * Un componente polimorfico è un componente che può renderizzare tag HTML (o componenti) diversi a seconda di una prop, mantenendo la stessa interfaccia esterna.


---

## Esercizio 4 — Controlled inputs e two-way binding

Crea un form di registrazione con i campi `username`, `email`, `password`.

- Ogni campo è un controlled component con `value` e `onChange`.
- Usa uno `useState` separato per ogni campo.
- Sotto il form, mostra in tempo reale un riquadro "Anteprima" con i valori attuali.
- Un bottone "Reset" svuota tutti e tre i campi.

---

## Esercizio 5 — Immutabilità dello stato con array di oggetti

Crea un componente `ShoppingCart` con questo stato iniziale:

```js
const initialItems = [
  { id: 1, name: 'Tastiera', quantity: 1, price: 89 },
  { id: 2, name: 'Monitor',  quantity: 1, price: 299 },
]
```

- `addItem(item)`: aggiunge un item senza mutare l'array originale.
- `removeItem(id)`: rimuove un item per id.
- `updateQuantity(id, delta)`: aggiorna la quantità; non scende mai sotto 1.
- Il totale è un valore derivato dallo stato, non uno stato separato.
- Aggiungi un bottone per aggiungere `{ id: 3, name: 'Cuffie', quantity: 1, price: 59 }`.

---

## Esercizio 6 — Rendering condizionale con quattro tecniche

Crea un componente `Dashboard` con uno stato booleano `isAdmin` e uno stato `loadingStatus` (`'idle'` | `'loading'` | `'error'` | `'success'`).

Usa quattro tecniche distinte di rendering condizionale, ciascuna per un elemento diverso dell'interfaccia:

1. **Operatore ternario** — titolo del pannello diverso in base a `isAdmin`.
2. **Operatore `&&`** — banner di avviso visibile solo se l'utente non è admin.
3. **Variabile intermedia** — blocco di contenuto preparato prima del return.
4. **Funzione di rendering** — `renderStatus()` che restituisce JSX diverso per ognuno dei 4 stati di loading.

Aggiungi bottoni per modificare `isAdmin` e `loadingStatus`.

---

## Esercizio 7 — Derived state

Crea un componente `TodoStats` che riceve come prop un array di task `{ id, text, status }` (status: `'pending'` | `'done'`).

Senza usare nessun `useState` aggiuntivo, calcola e mostra:

- Totale task
- Task completate e in sospeso
- Percentuale di completamento (1 decimale)
- Task con il testo più lungo

Dimostra che aggiungere task dal componente parent aggiorna automaticamente le statistiche.

---

## Esercizio 8 — Lifting State Up

Crea tre componenti: `App`, `SearchBar`, `FilteredList`.

- Lo stato `searchQuery` vive solo in `App`.
- `SearchBar` riceve `searchQuery` e `onSearch` come props; non gestisce stato interno.
- `FilteredList` riceve un array di 8 stringhe e `searchQuery`; filtra in modo case-insensitive.
- `App` gestisce anche uno stato `showOnlyShort` (booleano) che filtra ulteriormente gli item con meno di 6 caratteri; viene modificato da una checkbox in `SearchBar`.
- Mostra un contatore "Risultati: N" derivato dalla lista filtrata.

---

## Esercizio 9 — className condizionale

Crea un sistema di navigazione a tab con 5 voci.

- Il componente `Tab` riceve `label`, `isActive`, `onClick`, `hasNotification`.
- Il `className` è costruito dinamicamente: base `"tab"`, con `" tab--active"` se attiva e `" tab--notification"` se ha notifiche — senza librerie esterne.
- Lo stato `activeTab` in `TabNavigation` determina quale tab è attiva.
- Ogni tab mostra un contenuto diverso sotto la barra (rendering condizionale con variabile intermedia).
- Almeno 2 tab hanno `hasNotification={true}`.

---

## Esercizio 10 — Inline styles

Crea un componente `ThemePreview` con una palette di 6 colori.

- Ogni colore è un bottone rotondo stilato esclusivamente con inline styles (oggetto JS in camelCase).
- Selezionando un colore, mostra un rettangolo di anteprima con quel colore di sfondo e una transizione CSS.
- Il colore del testo sull'anteprima viene calcolato dinamicamente: implementa una funzione `isDark(hexColor)` che determina se il testo deve essere bianco o nero.

---

## Esercizio 11 — useRef per accesso al DOM

Crea un componente `TextEditor` con una `<textarea>`.

- Bottone "Focus": porta il focus sulla textarea.
- Bottone "Seleziona tutto": seleziona tutto il testo nella textarea.
- Bottone "Maiuscolo": converte il contenuto della textarea in maiuscolo e aggiorna anche uno stato separato `displayValue` che mostra il testo convertito fuori dalla textarea.
- Aggiungi un commento nel codice che spiega perché modificare `ref.current.value` direttamente non provoca un re-render.

---

## Esercizio 12 — useRef per valori persistenti: cronometro

Crea un cronometro `StopWatch`.

- `useState` tiene il tempo in millisecondi, mostrato nel formato `mm:ss.cc`.
- `useRef` memorizza l'ID dell'interval e il timestamp di partenza — questi valori non devono causare re-render quando cambiano.
- Bottoni: Start, Stop, Reset.
- Start è disabilitato se il timer è già in marcia; Stop è disabilitato se è fermo.

---

## Esercizio 13 — useEffect con event listener e cleanup

Crea un componente `MouseTracker` che mostra le coordinate del cursore in un overlay fisso.

- `useEffect` aggiunge un listener `mousemove` su `window`; la cleanup lo rimuove.
- Un secondo `useEffect` con array vuoto stampa in console un messaggio al mount e uno al cleanup.
- In `App` aggiungi un toggle che monta e smonta `<MouseTracker />`, così da verificare i messaggi in console.

---

## Esercizio 14 — useEffect con dipendenze e AbortController

Crea un componente `UserSearch` che cerca utenti su `https://jsonplaceholder.typicode.com/users?username_like={query}`.

- L'input di ricerca è un controlled component.
- Il fetch si attiva ogni volta che `query` cambia.
- Implementa la cleanup con `AbortController` per cancellare le richieste obsolete.
- Gestisci i tre stati: `isLoading`, `data`, `error`.
- Non fare il fetch se `query` è vuota.

---

## Esercizio 15 — useEffect con setInterval: countdown

Crea un componente `Countdown` che accetta una prop `initialSeconds`.

- Usa `useEffect` con `setInterval` per decrementare il contatore ogni secondo.
- Quando raggiunge 0 mostra "Tempo scaduto!" e smette di decrementare.
- Se `initialSeconds` cambia, il countdown riparte dal nuovo valore.
- Aggiungi un bottone Pausa/Riprendi.

---

## Esercizio 16 — Context API: sistema di tema

Implementa un tema chiaro/scuro con la Context API.

- Crea `ThemeContext` con un valore iniziale che include `theme` e `toggleTheme`.
- Lo stato `theme` vive in `App`; il provider espone sia il valore che la funzione di aggiornamento.
- Crea 3 componenti foglia che consumano il context con `useContext`, senza ricevere props:
  1. `Navbar` — mostra il tema corrente.
  2. `ThemeToggleButton` — bottone che chiama `toggleTheme`.
  3. `ThemedCard` — applica una className diversa in base al tema.

---

## Esercizio 17 — Context API con stato complesso

Crea un context `ShopContext` per un mini-carrello.

- Il valore espone `{ cartItems, addToCart, removeFromCart, totalPrice }`.
- `addToCart(product)`: se il prodotto è già nel carrello incrementa la quantity, altrimenti lo aggiunge.
- `removeFromCart(id)`: rimuove per id.
- `totalPrice` è un valore derivato calcolato nel provider, non uno stato separato.
- Crea 3 componenti consumer: `ProductList` (con bottone "Aggiungi"), `CartSummary` (items e totale), `CartBadge` (solo il conteggio).

---

## Esercizio 18 — Pattern Provider Component

Refactora l'esercizio 17 estraendo la logica in un Provider Component dedicato.

- Crea `src/store/shop-context.jsx` con: la definizione di `ShopContext` (export named), il componente `ShopContextProvider` (export named) con tutto lo stato e le funzioni, e un custom hook `useShop()` che wrappa `useContext(ShopContext)`.
- `App.jsx` importa solo `ShopContextProvider` e non contiene logica di stato.
- I componenti consumer importano `useShop` invece di chiamare `useContext` direttamente.

---

## Esercizio 19 — Prop Drilling vs Context

Crea una struttura a 4 livelli: `App > PageLayout > ArticleSection > CommentBox`.

**Parte A:** lo stato `currentUser = { name, role }` vive in `App` e viene passato come prop attraverso tutti i livelli. Solo `CommentBox` lo usa. Conta le righe extra necessarie nei componenti intermedi.

**Parte B:** refactora usando `UserContext` e un `UserProvider`. Rimuovi tutte le props intermedie; solo `CommentBox` chiama `useContext`. Aggiungi un commento con il numero di righe risparmiate.

---

## Esercizio 20 — Custom Hook: useDebounce

Crea un hook `useDebounce(value, delay)` che restituisce il valore dopo `delay` millisecondi dall'ultimo cambiamento.

- Usa `useState` e `useEffect` con `setTimeout` internamente; implementa la cleanup con `clearTimeout`.
- Esportalo da `src/hooks/useDebounce.js`.
- Usalo in un componente `DebouncedSearch`: mostra sia il valore istantaneo che quello ritardato, così che il debounce sia visibile a schermo.

---

## Esercizio 21 — Custom Hook: useFetch

Crea un hook `useFetch(url)` che gestisce internamente `data`, `isLoading` e `error`.

- Il fetch si attiva quando `url` cambia; implementa la cleanup con `AbortController`.
- Gestisce il caso in cui il componente si smonta prima che la richiesta termini.
- Restituisce `{ data, isLoading, error }`.
- Usalo in due componenti distinti: uno per `https://jsonplaceholder.typicode.com/posts?_limit=5`, uno per `https://jsonplaceholder.typicode.com/users`.

---

## Esercizio 22 — useReducer per carrello

Sostituisci la gestione dello stato dell'esercizio 5 con `useReducer`.

- La funzione `cartReducer(state, action)` è definita fuori dal componente e gestisce le azioni `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR_CART`.
- Il reducer non muta mai lo stato: usa spread, `map` e `filter`.
- `dispatch` viene passata come prop ai componenti figli `CartItem` e `CartControls`.
- Il totale è un valore derivato nel corpo del componente.

---

## Esercizio 23 — createPortal

Crea un componente `Modal` che usa `createPortal` da `react-dom`.

- Il contenuto della modale viene renderizzato direttamente in `document.body`, fuori da `#root`.
- `Modal` riceve `isOpen`, `onClose` e `children`; se `isOpen` è false, non renderizza nulla.
- Cliccando l'overlay si chiude la modale; il click sul contenuto interno non deve propagarsi all'overlay.
- Verifica con gli strumenti di sviluppo del browser che la modale sia un figlio diretto di `<body>`.

---

## Esercizio 24 — React Router: setup, Link e NavLink

Configura una SPA con `createBrowserRouter` e 4 route: `/`, `/about`, `/projects`, `/contact`.

- Avvolgi l'app con `<RouterProvider>`.
- Il componente `Navbar` usa `<Link>` per Home e Contact, e `<NavLink>` per About e Projects — questi ultimi con stile inline che cambia in base a `isActive`.
- Aggiungi un commento che spiega la differenza tra `<Link>` e `<a href>` in una SPA.

---

## Esercizio 25 — Nested Routes e Outlet

Aggiungi una sezione `/dashboard` al router dell'esercizio 24.

- La route `/dashboard` usa `DashboardLayout` come componente wrapper, con header e sidebar fissi.
- La sidebar contiene link a 4 sotto-pagine: index, `/profile`, `/settings`, `/notifications`.
- `<Outlet />` renderizza il contenuto della route figlia attiva.
- Navigando tra le sotto-pagine, header e sidebar rimangono stabili.

---

## Esercizio 26 — Route dinamiche e useParams

Crea una sezione prodotti con lista e pagina di dettaglio.

- Definisci un array di 6 prodotti `{ id, name, category, price, description }`.
- Configura la route dinamica `/products/:productId`.
- In `ProductList`, ogni prodotto è un `<Link>` alla pagina di dettaglio.
- In `ProductDetail`, leggi `productId` con `useParams`, cerca il prodotto nell'array e mostralo; se non esiste mostra un messaggio di errore.
- Aggiungi un link per tornare alla lista.

---

## Esercizio 27 — Navigazione programmatica e useLocation

Crea un flusso di login con reindirizzamento.

- Il form di login ha `username` e `password` come controlled inputs.
- Se le credenziali sono `admin` / `react2024` la navigazione porta a `/dashboard` con `replace: true` e uno stato `{ fromLogin: true, username }`.
- In `DashboardHome`, leggi `location.state` con `useLocation`: se `fromLogin` è true, mostra un banner di benvenuto per 3 secondi poi rimuovilo; se l'utente arriva direttamente, il banner non compare.

---

## Esercizio 28 — Pagina 404, hook usePageTitle e integrazione

**Parte A:** aggiungi una route `*` con il componente `NotFound`. La pagina mostra l'URL tentato (letto con `useLocation`) e un bottone che riporta alla home con `useNavigate`.

**Parte B:** crea l'hook `usePageTitle(title)` in `src/hooks/usePageTitle.js`. Aggiorna `document.title` ogni volta che `title` cambia e ripristina il titolo originale nella cleanup. Usalo in almeno 4 pagine.

**Parte C:** integra Context (esercizi 17–18) e React Router (esercizi 24–27) in un'unica app coerente. La `Navbar` mostra il numero di item nel carrello leggendo da `ShopContext` tramite il hook `useShop`.

---
