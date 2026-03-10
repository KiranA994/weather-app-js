## Weather Forecast Dashboard

A simple web-based weather dashboard that displays the **current weather conditions** for a set of predefined locations using the **OpenWeatherMap** API. Cards are generated dynamically on page load and styled with a modern glassmorphism UI.

### Features

- **Multiple locations**: Shows weather for several cities (e.g., Trivandrum, Kollam, Ernakulam, etc.).
- **Current conditions**: Main forecast (Clear, Clouds, Rain, etc.), temperature, min/max, and "feels like".
- **Additional metrics**: Humidity, wind speed, and pressure for each location.
- **Human‑friendly date & time**: Localized date string based on each city’s timezone.
- **Responsive UI**: Uses Bootstrap 5 and custom CSS for a clean, responsive layout.

### Tech Stack

- **HTML** (`index.html`)
- **CSS** (`style.css`)
- **JavaScript** (`initial.js`)
- **Bootstrap 5** (via CDN)
- **Font Awesome** (for weather-related icons)
- **Google Fonts – Poppins**
- **OpenWeatherMap Current Weather API**

### Getting Started

1. **Clone or download** this project into a local folder:

2. **Open the app in a browser**:
   - Option 1: Double‑click `index.html` to open it directly in your default browser.
   - Option 2 (recommended): Serve it via a simple local HTTP server:

     ```bash
     # From inside the project folder
     # Using Python 3
     python -m http.server 8000
     # Then open http://localhost:8000/index.html
     ```

3. On first load, the app automatically calls `OnLoadFunction` with a predefined list of locations and renders a card for each one.

### Configuration

- **API Key**:
  - The OpenWeatherMap API key is defined in `initial.js`:
    ```js
    const API_KEY = '****************************';
    ```
  - For production use, you should **replace this with your own key** and avoid committing real keys to public repositories.

- **Default Locations**:
  - The list of locations is passed from the `body` tag in `index.html`:
    ```html
    <body onload="OnLoadFunction(['Trivandrum', 'Kollam', ...])">
    ```
  - You can add, remove, or rename cities in this array to customize which places are shown.

### Project Structure

- **`index.html`** – Base HTML document, includes Bootstrap, CSS, Font Awesome, and `initial.js`. Triggers the initial data load on `onload`.
- **`style.css`** – Custom styles for the layout and weather cards (glassmorphism background, grid layout, and icon styling).
- **`initial.js`** – Core logic:
  - Calls the OpenWeatherMap API for each location.
  - Converts UNIX timestamps to readable local dates.
  - Converts country codes to full names.
  - Dynamically injects weather cards into the `#sample` container.

### Notes & Limitations

- This is a **client-side demo**; API calls are made directly from the browser.
- There is **no search box or user input** for arbitrary cities yet; locations are defined statically.
- Network issues or invalid API keys will prevent data from loading; open the browser console to inspect errors.

### Possible Improvements

- Add a **search input** to allow users to type any city name.
- Add **error handling UI** when API calls fail.
- Show **loading indicators** while data is being fetched.
- Add support for **unit selection** (Celsius / Fahrenheit).
- Externalize configuration (API key, default cities) to a separate config file or environment‑like mechanism.

