# How to Add a New AI Tool

To add a new AI tool to this directory, please follow these steps:

1.  **Create a new HTML file:**
    *   The file name should be the name of the tool in lowercase, with spaces replaced by hyphens (e.g., `my-ai-tool.html`).
    *   Use an existing tool's HTML file as a template (e.g., `chatgpt.html`).
    *   Update the following in the new file:
        *   `<title>`: The name of the tool followed by "Tutorial".
        *   `<h1>`: The name of the tool followed by "Tutorial".
        *   Official Website link.
        *   "What is?" section with a description of the tool.
        *   "Common Use Cases" section.
        *   "Getting Started" section.
        *   "Tips for Effective Prompts" section.

2.  **Update `index.html`:**
    *   Add a new tool card to the `.tool-grid` div.
    *   The `data-tags` attribute should contain relevant tags for the tool.
    *   The `<h2>` should be the name of the tool.
    *   The link to the official website should be correct.
    *   The link to the tutorial file should point to the newly created HTML file.
    *   If there are new tags, add them to the `#tag-container` div.

3.  **Commit and Push:**
    *   Commit the changes with a descriptive message (e.g., "feat: Add [Tool Name] AI tool").
    *   Push the changes to the `main` branch.
