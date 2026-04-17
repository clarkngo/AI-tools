export default {
    "whatIs": "Stable Diffusion is an open-source AI image generation model developed by Stability AI. Unlike cloud-only tools, the model weights are publicly available, allowing developers and enthusiasts to run it locally on their own hardware or via various web platforms. This openness enables deep customization through fine-tuning, custom models (LoRAs), and integration into creative pipelines.",
    "useCases": [
        "<strong>Custom Model Fine-Tuning:</strong> Train the model on a specific art style, person, or product using techniques like DreamBooth or LoRA to generate highly personalized imagery.",
        "<strong>Concept Art & Illustration:</strong> Rapidly generate concept art, character designs, environment sketches, and illustration variants for games, films, and creative projects.",
        "<strong>Local Private Generation:</strong> Run Stable Diffusion entirely on your own machine for complete privacy—ideal for sensitive commercial projects or when you want full control without usage limits.",
        "<strong>API Integration:</strong> Use the Stability AI API to integrate image generation into apps, websites, and automated content pipelines at scale."
    ],
    "gettingStarted": [
        "<strong>Choose Your Access Method:</strong> Beginners should start with DreamStudio (dreamstudio.ai), Stability AI's official web interface. Advanced users can install AUTOMATIC1111 or ComfyUI locally.",
        "<strong>Sign Up for DreamStudio:</strong> Create a free account at dreamstudio.ai, which gives you a starting credit balance to generate images online without any local setup.",
        "<strong>Write a Prompt:</strong> Enter a detailed text prompt describing your image. Also fill in a negative prompt (what you do NOT want) to improve quality—common entries include <code>'blurry, low quality, extra limbs'</code>.",
        "<strong>Adjust Parameters:</strong> Experiment with settings like Steps (how long the AI refines the image), CFG Scale (how closely it follows your prompt), and image dimensions to control output quality.",
        "<strong>Download and Iterate:</strong> Download your generated images and refine your prompt based on the results. Small wording changes can dramatically shift the output."
    ],
    "tips": [
        "<strong>Use Negative Prompts:</strong> Always include a negative prompt to exclude common artifacts. A standard starting negative prompt is <code>'deformed, ugly, blurry, bad anatomy, low resolution'</code>.",
        "<strong>Explore Civitai:</strong> Visit civitai.com to discover thousands of community-trained models and LoRAs specialized in specific styles, characters, and aesthetics.",
        "<strong>Img2Img for Variations:</strong> Use the image-to-image mode to upload an existing image and generate stylistic variations while preserving the overall composition and structure.",
        "<strong>Seed Control:</strong> Save the seed number of a generation you like. Re-using the same seed with slight prompt variations lets you iterate on a consistent base image systematically."
    ]
};
