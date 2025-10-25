
import chatgpt from './tutorials/chatgpt.js';
import gemini from './tutorials/gemini.js';
import grok from './tutorials/grok.js';
import perplexityAi from './tutorials/perplexity-ai.js';
import notebooklm from './tutorials/notebooklm.js';
import gamma from './tutorials/gamma.js';
import napkin from './tutorials/napkin.js';
import beautifulAi from './tutorials/beautiful.ai.js';
import explainPaper from './tutorials/explain-paper.js';
import goblinTools from './tutorials/goblin-tools.js';
import mapify from './tutorials/mapify.js';
import histographyAi from './tutorials/histography-ai.js';
import chemequations from './tutorials/chemequations.js';
import gauth from './tutorials/gauth.js';
import teachableMachine from './tutorials/teachable-machine.js';
import githubCopilot from './tutorials/github-copilot.js';
import cursor from './tutorials/cursor.js';
import windsurf from './tutorials/windsurf.js';
import midjourney from './tutorials/midjourney.js';
import claude from './tutorials/claude.js';
import suno from './tutorials/suno.js';
import runwayml from './tutorials/runwayml.js';
import topazLabs from './tutorials/topaz-labs.js';
import otterAi from './tutorials/otter.ai.js';
import consensus from './tutorials/consensus.js';
import dalle from './tutorials/dall-e.js';
import imagen from './tutorials/imagen.js';
import leonardoAi from './tutorials/leonardo-ai.js';
import ludoAi from './tutorials/ludo.ai.js';
import scenario from './tutorials/scenario.js';
import myai101 from './tutorials/myai101.js';
import recall from './tutorials/recall.js';
import anki from './tutorials/anki.js';
import flashtutor from './tutorials/flashtutor.js';
import gradiance from './tutorials/gradiance.js';
import gptScrambler from './tutorials/gpt-scrambler.js';
import taskratchet from './tutorials/taskratchet.js';
import quillbot from './tutorials/quillbot.js';
import synthesia from './tutorials/synthesia.js';
import magicschoolai from './tutorials/magicschoolai.js';
import sasWritingReviser from './tutorials/sas-writing-reviser.js';
import scribbr from './tutorials/scribbr.js';
import socrative from './tutorials/socrative.js';
import edpuzzle from './tutorials/edpuzzle.js';
import nearpod from './tutorials/nearpod.js';

export const tools = [
    {
        "tags": "writing coding conversation summarization",
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "description": "Your versatile partner for conversation, content creation, and coding.",
        "tutorial": chatgpt
    },
    {
        "tags": "multimodal writing coding conversation google summarization image-analysis",
        "name": "Gemini",
        "url": "https://gemini.google.com",
        "description": "Google's multimodal AI for understanding text, images, code, and video.",
        "tutorial": gemini
    },
    {
        "tags": "real-time social-media writing news",
        "name": "Grok",
        "url": "https://grok.x.ai",
        "description": "Real-time insights and a bit of wit from the X (formerly Twitter) platform.",
        "tutorial": grok
    },
    {
        "tags": "research writing search summarization",
        "name": "Perplexity AI",
        "url": "https://www.perplexity.ai",
        "description": "An AI-powered answer engine that provides sourced, citation-backed results.",
        "tutorial": perplexityAi
    },
    {
        "tags": "research writing notes summarization",
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "description": "An expert in your own documents for targeted research and analysis.",
        "tutorial": notebooklm
    },
    {
        "tags": "presentation design writing",
        "name": "Gamma",
        "url": "https://gamma.app",
        "description": "Create beautiful presentations, documents, and webpages from a simple text prompt.",
        "tutorial": gamma
    },
    {
        "tags": "notes ideas writing",
        "name": "Napkin",
        "url": "https://www.napkin.one",
        "description": "Surfaces surprising connections and insights between your notes and ideas.",
        "tutorial": napkin
    },
    {
        "tags": "presentation design",
        "name": "Beautiful.ai",
        "url": "https://www.beautiful.ai",
        "description": "An AI presentation designer that makes every slide look polished and professional.",
        "tutorial": beautifulAi
    },
    {
        "tags": "research education",
        "name": "Explain Paper",
        "url": "https://www.explainpaper.com",
        "description": "Simplifies dense academic papers so you can read and understand them faster.",
        "tutorial": explainPaper
    },
    {
        "tags": "productivity accessibility",
        "name": "Goblin Tools",
        "url": "https://goblin.tools",
        "description": "A set of simple, single-task tools to help break down tasks and manage projects.",
        "tutorial": goblinTools
    },
    {
        "tags": "design world-building maps",
        "name": "Mapify",
        "url": "https://mapify.so",
        "description": "Generates visual maps from text descriptions for stories, games, and more.",
        "tutorial": mapify
    },
    {
        "tags": "design education history",
        "name": "Histography AI",
        "url": "http://histography.io",
        "description": "Creates visual timelines and historical infographics automatically from data.",
        "tutorial": histographyAi
    },
    {
        "tags": "education science",
        "name": "Chemequations",
        "url": "https://www.chemequations.com",
        "description": "Instantly balances chemical equations for students and professionals.",
        "tutorial": chemequations
    },
    {
        "tags": "education math",
        "name": "Gauth",
        "url": "https://www.gauthmath.com/",
        "description": "An AI-powered math problem solver that provides step-by-step solutions to math problems.",
        "tutorial": gauth
    },
    {
        "tags": "education machine-learning google",
        "name": "Teachable Machine",
        "url": "https://teachablemachine.withgoogle.com/",
        "description": "A web-based tool to create machine learning models without code.",
        "tutorial": teachableMachine
    },
    {
        "tags": "coding development productivity",
        "name": "GitHub Copilot",
        "url": "https://github.com/features/copilot",
        "description": "An AI pair programmer that suggests code and entire functions in real-time from your editor.",
        "tutorial": githubCopilot
    },
    {
        "tags": "coding code-editor development",
        "name": "Cursor",
        "url": "https://cursor.sh/",
        "description": "An AI-powered code editor designed for pair-programming with a powerful AI.",
        "tutorial": cursor
    },
    {
        "tags": "coding development",
        "name": "Windsurf",
        "url": "https://windsurf.com/",
        "description": "An AI coding assistant designed to help developers write, understand, and fix code more efficiently.",
        "tutorial": windsurf
    },
    {
        "tags": "images design art",
        "name": "Midjourney",
        "url": "https://www.midjourney.com",
        "description": "An AI image generator that creates highly artistic and detailed images from text prompts.",
        "tutorial": midjourney
    },
    {
        "tags": "writing conversation research",
        "name": "Claude",
        "url": "https://claude.ai",
        "description": "A conversational AI focused on helpful, harmless, and honest interactions.",
        "tutorial": claude
    },
    {
        "tags": "music audio creative",
        "name": "Suno",
        "url": "https://suno.com",
        "description": "An AI music generator that creates original songs, complete with vocals and instruments.",
        "tutorial": suno
    },
    {
        "tags": "video creative design",
        "name": "RunwayML",
        "url": "https://runwayml.com",
        "description": "A suite of AI magic tools for video, including text-to-video generation and background removal.",
        "tutorial": runwayml
    },
    {
        "tags": "images video design",
        "name": "Topaz Labs",
        "url": "https://www.topazlabs.com/",
        "description": "AI-powered software that enhances photos and videos.",
        "tutorial": topazLabs
    },
    {
        "tags": "transcription productivity meetings",
        "name": "Otter.ai",
        "url": "https://otter.ai",
        "description": "An AI meeting assistant that records, transcribes, and summarizes your conversations.",
        "tutorial": otterAi
    },
    {
        "tags": "research search science",
        "name": "Consensus",
        "url": "https://consensus.app",
        "description": "An AI search engine for science that extracts findings directly from published research.",
        "tutorial": consensus
    },
    {
        "tags": "images art openai",
        "name": "DALL-E",
        "url": "https://openai.com/dall-e-3",
        "description": "Generate images from text descriptions using OpenAI's powerful model.",
        "tutorial": dalle
    },
    {
        "tags": "images art google",
        "name": "Imagen",
        "url": "https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview",
        "description": "Google's text-to-image diffusion model for photorealistic image generation.",
        "tutorial": imagen
    },
    {
        "tags": "images art design",
        "name": "Leonardo AI",
        "url": "https://leonardo.ai/",
        "description": "A platform for generating high-quality art and assets for creative projects.",
        "tutorial": leonardoAi
    },
    {
        "tags": "game-dev research design",
        "name": "Ludo.ai",
        "url": "https://ludo.ai/",
        "description": "AI-powered platform for game ideation, research, and concept development.",
        "tutorial": ludoAi
    },
    {
        "tags": "images design game-dev",
        "name": "Scenario",
        "url": "https://www.scenario.com/",
        "description": "Generate consistent, high-quality game assets with AI.",
        "tutorial": scenario
    },
    {
        "tags": "education machine-learning",
        "name": "myai101",
        "url": "https://myai101.com/",
        "description": "Interactive, bite-sized AI learning lessons",
        "tutorial": myai101
    },
    {
        "tags": "research productivity notes",
        "name": "Recall",
        "url": "https://getrecall.ai/",
        "description": "Upload notes, PDFs, slides, etc., chat with your content",
        "tutorial": recall
    },
    {
        "tags": "education productivity",
        "name": "Anki",
        "url": "https://apps.ankiweb.net/",
        "description": "Flashcard and spaced repetition platform",
        "tutorial": anki
    },
    {
        "tags": "education productivity",
        "name": "FlashTutor",
        "url": "#",
        "description": "AI-powered study buddy for quizzes/flashcards",
        "tutorial": flashtutor
    },
    {
        "tags": "education productivity",
        "name": "Gradiance",
        "url": "https://gradiance.ai/",
        "description": "AI grading tool for teachers",
        "tutorial": gradiance
    },
    {
        "tags": "writing productivity",
        "name": "GPT Scrambler",
        "url": "https://gptscrambler.com/en",
        "description": "Refines and humanizes AI-generated drafts",
        "tutorial": gptScrambler
    },
    {
        "tags": "productivity",
        "name": "TaskRatchet",
        "url": "https://www.taskratchet.com/",
        "description": "AI-powered project/task manager",
        "tutorial": taskratchet
    },
    {
        "tags": "writing productivity",
        "name": "Quillbot",
        "url": "https://quillbot.com/",
        "description": "Advanced paraphrasing and writing tool",
        "tutorial": quillbot
    },
    {
        "tags": "video design productivity",
        "name": "Synthesia",
        "url": "https://www.synthesia.io/",
        "description": "AI-generated explainer videos",
        "tutorial": synthesia
    },
    {
        "tags": "education productivity",
        "name": "MagicSchoolAI",
        "url": "https://www.magicschool.ai/",
        "description": "Instantly generate MCQs, lesson plans, slides",
        "tutorial": magicschoolai
    },
    {
        "tags": "writing productivity",
        "name": "SAS Writing Reviser",
        "url": "https://appsource.microsoft.com/pt-br/product/saas/wa104381774?tab=overview",
        "description": "AI suggestions to improve writing",
        "tutorial": sasWritingReviser
    },
    {
        "tags": "writing productivity",
        "name": "Scribbr",
        "url": "https://www.scribbr.com/",
        "description": "AI-powered proofreading/editing",
        "tutorial": scribbr
    },
    {
        "tags": "education productivity",
        "name": "Socrative",
        "url": "https://www.socrative.com/",
        "description": "Personalized learning/question platform",
        "tutorial": socrative
    },
    {
        "tags": "education video",
        "name": "Edpuzzle",
        "url": "https://edpuzzle.com/",
        "description": "Video learning with assessment tools",
        "tutorial": edpuzzle
    },
    {
        "tags": "education productivity",
        "name": "Nearpod",
        "url": "https://www.nearpod.com/",
        "description": "Real-time classroom interaction/assessment",
        "tutorial": nearpod
    }
    ,
    {
        "tags": "productivity automation workflow",
        "name": "Wispr Flow",
        "url": "https://wisprflow.ai/",
        "description": "Visual automation platform that connects AI to apps and automates workflows.",
        "emoji": "🔁"
    }
]
