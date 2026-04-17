export default {
    "whatIs": "v0 is Vercel's AI UI generation tool that produces working React and Next.js components and full applications from text prompts. It generates clean, production-quality code using modern libraries like Tailwind CSS and shadcn/ui, and allows you to deploy directly to Vercel or copy the code into your existing project.",
    "useCases": [
        "<strong>UI Component Generation:</strong> Describe a UI component—like a pricing table, dashboard card, or login form—and get production-ready React code with Tailwind styling that you can drop into any project.",
        "<strong>Full Page & App Scaffolding:</strong> Generate complete page layouts and multi-page Next.js applications from a single prompt, with navigation, responsive design, and component structure included.",
        "<strong>Design to Code:</strong> Upload a screenshot or wireframe and ask v0 to generate the corresponding React code, bridging the gap between design mockups and working implementations.",
        "<strong>Prototyping & Demos:</strong> Rapidly prototype interactive UI concepts to share with stakeholders or test user flows before committing to full implementation."
    ],
    "gettingStarted": [
        "<strong>Go to v0.dev:</strong> Visit v0.dev in your browser and sign in with a Vercel account. New users get free credits to start generating.",
        "<strong>Write a UI Prompt:</strong> Describe the component or page you want in plain language. Be specific about functionality and style. Example: <code>'Create a responsive SaaS pricing page with three tiers (Free, Pro, Enterprise), monthly/annual toggle, and a highlighted recommended plan.'</code>",
        "<strong>Review Generated Output:</strong> v0 generates a live preview alongside the code. Click between the Preview and Code tabs to see both the visual result and the underlying React/Tailwind code.",
        "<strong>Iterate with Follow-Up Prompts:</strong> Use the chat to request changes: 'Make the button color blue,' 'Add a testimonials section,' or 'Make this mobile responsive.' v0 updates the code incrementally.",
        "<strong>Use the Code:</strong> Click 'Copy Code' to paste the component into your project, or 'Open in StackBlitz' to continue editing in a full development environment."
    ],
    "tips": [
        "<strong>Reference Design Systems:</strong> Mention specific design systems or component libraries in your prompt—v0 works particularly well with shadcn/ui, Radix UI, and Tailwind CSS since it generates code with these by default.",
        "<strong>Upload Screenshots for Inspiration:</strong> Attach a screenshot of a UI you like and ask v0 to recreate or adapt it. The vision model helps it match layout, spacing, and visual style.",
        "<strong>Deploy to Vercel Instantly:</strong> Connect your Vercel account and deploy generated apps to a live URL in one click—ideal for sharing prototypes with clients or getting user feedback quickly.",
        "<strong>Ask for Specific States:</strong> Request loading states, error states, and empty states explicitly. Well-rounded UI components handle all these edge cases and make for much more production-ready code."
    ]
};
