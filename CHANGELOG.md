# Changelog

## 2025-10-16

### Changed

*   Updated header layout in `MainPage.jsx` to include tagline "Unleash Your Potential with Curated AI Tools"
*   Improved typography for "AI Tools Directory" title with modern font stack, increased font weight, and tighter letter spacing
*   Updated color scheme from Bootstrap blue (#007bff) to electric cyan (#00d4ff) for better contrast and modern tech aesthetic
*   Changed active tag button text color to black for improved readability against bright cyan background
*   Reorganized header layout in `App.css` to use vertical flexbox layout for better visual hierarchy
*   Improved website centering using flexbox on body element
*   Enhanced tag container with flexbox and gap for better spacing
*   Added responsive design for mobile devices with collapsible tag section

### Added

*   Logo image (`ai-tools.png`) now properly imported and displayed in header
*   "Show More/Less" toggle button for tags on small screens (≤768px)
*   Media queries for tablet (≤768px) and mobile (≤480px) breakpoints
*   Automatic tag collapse on small screens with expandable functionality

### Fixed

*   Fixed Total Tools display line in stats section
*   Fixed logo image path for GitHub Pages deployment by using ES module import
*   Fixed website alignment issue - content now properly centered instead of left-aligned

## 2025-10-16

### Added

*   `FUTURE-IDEAS.md` to track future ideas and features.
*   Display of total tool count and count per tag on the main page.

### Changed

*   Refactored tutorial files from JSON to JavaScript modules.
*   Updated `data.js` to import and use the new tutorial modules.
*   Updated `MainPage.jsx` and `TagBar.jsx` to display tool counts.

### Fixed

*   Fixed a syntax error in `imagen.js` caused by unescaped double quotes.

## 2025-10-16

### Changed

*   Converted all `.json` tutorial files in `src/tutorials/` to `.js` files.
*   Standardized tutorial file names to a consistent kebab-case format (e.g., `Explain Paper.json` became `explain-paper.js`).
*   Modified the content of each new `.js` file to export the data as a JavaScript module.

### Reasoning and Benefits

*   **Browser-Only Compatibility:** The project is intended to be a browser-only JavaScript application. Using `.js` files with ES module exports (`export default`) is the standard and most efficient way to handle data in such an environment. It eliminates the need for runtime JSON parsing via `fetch` or other methods.
*   **Improved Naming Convention:** The new kebab-case file naming convention is a standard practice that improves readability and consistency. It also prevents potential issues with spaces and special characters in file paths.
*   **Better Development Experience:** Using JavaScript modules for data makes the codebase more modular and easier to maintain. It allows for better integration with modern JavaScript tooling and frameworks.

## 2025-10-16

### Added

*   `CHANGELOG.md` to track changes to the project.
*   Instructions to `GEMINI.md` for adding tags to new AI tools.
*   A section in `GEMINI.md` to track the total number of AI tools and the number of tools per tag.
*   A section in `GEMINI.md` instructing to update the changelog when committing changes.

### Changed

*   Moved `GEMINI.md` from `/reference` to the project root.

### Reasoning and Benefits

*   **`CHANGELOG.md`:** Provides a clear and organized history of project changes, making it easier for developers and users to understand the evolution of the project.
*   **Tagging Instructions:** Standardizes the process of adding new tools, ensuring that all tools are properly categorized and discoverable. This improves the user experience by allowing users to easily filter and find tools based on their needs.
*   **Tool Count:** Offers a quick overview of the project's scale and the distribution of tools across different categories. This can help identify areas where more tools are needed.
*   **`GEMINI.md` Location:** Moving `GEMINI.md` to the root directory makes it more visible and accessible to developers, ensuring that the guidelines are followed.
