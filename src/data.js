
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
import wisprflow from './tutorials/wisprflow.js';
import magicschoolai from './tutorials/magicschoolai.js';
import sasWritingReviser from './tutorials/sas-writing-reviser.js';
import scribbr from './tutorials/scribbr.js';
import socrative from './tutorials/socrative.js';
import edpuzzle from './tutorials/edpuzzle.js';
import nearpod from './tutorials/nearpod.js';
import rememberQuick from './tutorials/rememberquick.js';
import quizGecko from './tutorials/quizgecko.js';
import jotformQuizGenerator from './tutorials/jotform-quiz-generator.js';
import quizzFoundry from './tutorials/quizzfoundry.js';
import cuizAi from './tutorials/cuiz-ai.js';

export const tools = [
    {
        "tags": "writing coding conversation summarization",
        "name": "ChatGPT",
        "url": "https://chatgpt.com",
        "description": "Your versatile partner for conversation, content creation, and coding.",
        "emoji": "💬",
        "tutorial": chatgpt,
        "audience": ["Developers", "Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "multimodal writing coding conversation google summarization image-analysis",
        "name": "Gemini",
        "url": "https://gemini.google.com",
        "description": "Google's multimodal AI for understanding text, images, code, and video.",
        "emoji": "🤖",
        "tutorial": gemini,
        "audience": ["AI Enthusiasts", "Developers", "Creatives"]
    },
    {
        "tags": "real-time social-media writing news",
        "name": "Grok",
        "url": "https://grok.x.ai",
        "description": "Real-time insights and a bit of wit from the X (formerly Twitter) platform.",
        "emoji": "🧠",
        "tutorial": grok,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "research writing search summarization",
        "name": "Perplexity AI",
        "url": "https://www.perplexity.ai",
        "description": "An AI-powered answer engine that provides sourced, citation-backed results.",
        "emoji": "🔎",
        "tutorial": perplexityAi,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "research writing notes summarization",
        "name": "NotebookLM",
        "url": "https://notebooklm.google.com",
        "description": "An expert in your own documents for targeted research and analysis.",
        "emoji": "📚",
        "tutorial": notebooklm,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "presentation design writing",
        "name": "Gamma",
        "url": "https://gamma.app",
        "description": "Create beautiful presentations, documents, and webpages from a simple text prompt.",
        "emoji": "📊",
        "tutorial": gamma,
        "audience": ["Business Professionals", "Entrepreneurs", "AI Enthusiasts"]
    },
    {
        "tags": "notes ideas writing",
        "name": "Napkin",
        "url": "https://www.napkin.one",
        "description": "Surfaces surprising connections and insights between your notes and ideas.",
        "emoji": "💡",
        "tutorial": napkin,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "presentation design",
        "name": "Beautiful.ai",
        "url": "https://www.beautiful.ai",
        "description": "An AI presentation designer that makes every slide look polished and professional.",
        "emoji": "🎨",
        "tutorial": beautifulAi,
        "audience": ["Business Professionals", "Creatives", "Entrepreneurs"]
    },
    {
        "tags": "research education",
        "name": "Explain Paper",
        "url": "https://www.explainpaper.com",
        "description": "Simplifies dense academic papers so you can read and understand them faster.",
        "emoji": "📖",
        "tutorial": explainPaper
    },
    {
        "tags": "productivity accessibility",
        "name": "Goblin Tools",
        "url": "https://goblin.tools",
        "description": "A set of simple, single-task tools to help break down tasks and manage projects.",
        "emoji": "🧰",
        "tutorial": goblinTools,
        "audience": ["Business Professionals", "Entrepreneurs"]
    },
    {
        "tags": "design world-building maps",
        "name": "Mapify",
        "url": "https://mapify.so",
        "description": "Generates visual maps from text descriptions for stories, games, and more.",
        "emoji": "🗺️",
        "tutorial": mapify,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "design education history",
        "name": "Histography AI",
        "url": "http://histography.io",
        "description": "Creates visual timelines and historical infographics automatically from data.",
        "emoji": "🕰️",
        "tutorial": histographyAi,
        "audience": ["Creatives", "Business Professionals"]
    },
    {
        "tags": "education science",
        "name": "Chemequations",
        "url": "https://www.chemequations.com",
        "description": "Instantly balances chemical equations for students and professionals.",
        "emoji": "⚗️",
        "tutorial": chemequations,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education math",
        "name": "Gauth",
        "url": "https://www.gauthmath.com/",
        "description": "An AI-powered math problem solver that provides step-by-step solutions to math problems.",
        "emoji": "🧮",
        "tutorial": gauth,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education machine-learning google",
        "name": "Teachable Machine",
        "url": "https://teachablemachine.withgoogle.com/",
        "description": "A web-based tool to create machine learning models without code.",
        "emoji": "🧪",
        "tutorial": teachableMachine,
        "audience": ["AI Enthusiasts", "Developers"]
    },
    {
        "tags": "coding development productivity",
        "name": "GitHub Copilot",
        "url": "https://github.com/features/copilot",
        "description": "An AI pair programmer that suggests code and entire functions in real-time from your editor.",
        "emoji": "👨‍💻",
        "tutorial": githubCopilot,
        "audience": ["Developers", "AI Enthusiasts"]
    },
    {
        "tags": "coding code-editor development",
        "name": "Cursor",
        "url": "https://cursor.sh/",
        "description": "An AI-powered code editor designed for pair-programming with a powerful AI.",
        "emoji": "💻",
        "tutorial": cursor,
        "audience": ["Developers"]
    },
    {
        "tags": "coding development",
        "name": "Windsurf",
        "url": "https://windsurf.com/",
        "description": "An AI coding assistant designed to help developers write, understand, and fix code more efficiently.",
        "emoji": "⚙️",
        "tutorial": windsurf,
        "audience": ["Developers"]
    },
    {
        "tags": "images design art",
        "name": "Midjourney",
        "url": "https://www.midjourney.com",
        "description": "An AI image generator that creates highly artistic and detailed images from text prompts.",
        "emoji": "🖼️",
        "tutorial": midjourney,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "writing conversation research",
        "name": "Claude",
        "url": "https://claude.ai",
        "description": "A conversational AI focused on helpful, harmless, and honest interactions.",
        "emoji": "🗨️",
        "tutorial": claude,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "music audio creative",
        "name": "Suno",
        "url": "https://suno.com",
        "description": "An AI music generator that creates original songs, complete with vocals and instruments.",
        "emoji": "🎵",
        "tutorial": suno,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "video creative design",
        "name": "RunwayML",
        "url": "https://runwayml.com",
        "description": "A suite of AI magic tools for video, including text-to-video generation and background removal.",
        "emoji": "🎬",
        "tutorial": runwayml,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "images video design",
        "name": "Topaz Labs",
        "url": "https://www.topazlabs.com/",
        "description": "AI-powered software that enhances photos and videos.",
        "emoji": "🛠️",
        "tutorial": topazLabs,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "transcription productivity meetings",
        "name": "Otter.ai",
        "url": "https://otter.ai",
        "description": "An AI meeting assistant that records, transcribes, and summarizes your conversations.",
        "emoji": "📝",
        "tutorial": otterAi,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "research search science",
        "name": "Consensus",
        "url": "https://consensus.app",
        "description": "An AI search engine for science that extracts findings directly from published research.",
        "emoji": "🔬",
        "tutorial": consensus,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "images art openai",
        "name": "DALL-E",
        "url": "https://openai.com/dall-e-3",
        "description": "Generate images from text descriptions using OpenAI's powerful model.",
        "emoji": "🖼️",
        "tutorial": dalle,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "images art google",
        "name": "Imagen",
        "url": "https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview",
        "description": "Google's text-to-image diffusion model for photorealistic image generation.",
        "emoji": "🖼️",
        "tutorial": imagen,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "images art design",
        "name": "Leonardo AI",
        "url": "https://leonardo.ai/",
        "description": "A platform for generating high-quality art and assets for creative projects.",
        "emoji": "🖌️",
        "tutorial": leonardoAi,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "game-dev research design",
        "name": "Ludo.ai",
        "url": "https://ludo.ai/",
        "description": "AI-powered platform for game ideation, research, and concept development.",
        "emoji": "🎮",
        "tutorial": ludoAi,
        "audience": ["Creatives", "Developers"]
    },
    {
        "tags": "images design game-dev",
        "name": "Scenario",
        "url": "https://www.scenario.com/",
        "description": "Generate consistent, high-quality game assets with AI.",
        "emoji": "🎮",
        "tutorial": scenario,
        "audience": ["Creatives", "AI Enthusiasts"]
    },
    {
        "tags": "education machine-learning",
        "name": "myai101",
        "url": "https://myai101.com/",
        "description": "Interactive, bite-sized AI learning lessons",
        "emoji": "🎓",
        "tutorial": myai101,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "research productivity notes",
        "name": "Recall",
        "url": "https://getrecall.ai/",
        "description": "Upload notes, PDFs, slides, etc., chat with your content",
        "emoji": "🧠",
        "tutorial": recall,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "education productivity",
        "name": "Anki",
        "url": "https://apps.ankiweb.net/",
        "description": "Flashcard and spaced repetition platform",
        "emoji": "🧠",
        "tutorial": anki,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education productivity",
        "name": "FlashTutor",
        "url": "#",
        "description": "AI-powered study buddy for quizzes/flashcards",
        "emoji": "✏️",
        "tutorial": flashtutor,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education productivity",
        "name": "Gradiance",
        "url": "https://gradiance.ai/",
        "description": "AI grading tool for teachers",
        "emoji": "🧑‍🏫",
        "tutorial": gradiance,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "writing productivity",
        "name": "GPT Scrambler",
        "url": "https://gptscrambler.com/en",
        "description": "Refines and humanizes AI-generated drafts",
        "emoji": "🔀",
        "tutorial": gptScrambler,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "productivity",
        "name": "TaskRatchet",
        "url": "https://www.taskratchet.com/",
        "description": "AI-powered project/task manager",
        "emoji": "✅",
        "tutorial": taskratchet,
        "audience": ["Business Professionals", "Entrepreneurs"]
    },
    {
        "tags": "writing productivity",
        "name": "Quillbot",
        "url": "https://quillbot.com/",
        "description": "Advanced paraphrasing and writing tool",
        "emoji": "✍️",
        "tutorial": quillbot,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "video design productivity",
        "name": "Synthesia",
        "url": "https://www.synthesia.io/",
        "description": "AI-generated explainer videos",
        "emoji": "🎥",
        "tutorial": synthesia,
        "audience": ["Creatives", "Business Professionals"]
    },
    {
        "tags": "education productivity",
        "name": "MagicSchoolAI",
        "url": "https://www.magicschool.ai/",
        "description": "Instantly generate MCQs, lesson plans, slides",
        "emoji": "🏫",
        "tutorial": magicschoolai,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "writing productivity",
        "name": "SAS Writing Reviser",
        "url": "https://appsource.microsoft.com/pt-br/product/saas/wa104381774?tab=overview",
        "description": "AI suggestions to improve writing",
        "emoji": "📝",
        "tutorial": sasWritingReviser,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "writing productivity",
        "name": "Scribbr",
        "url": "https://www.scribbr.com/",
        "description": "AI-powered proofreading/editing",
        "emoji": "📝",
        "tutorial": scribbr,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "education productivity",
        "name": "Socrative",
        "url": "https://www.socrative.com/",
        "description": "Personalized learning/question platform",
        "emoji": "🧑‍🏫",
        "tutorial": socrative,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education video",
        "name": "Edpuzzle",
        "url": "https://edpuzzle.com/",
        "description": "Video learning with assessment tools",
        "emoji": "▶️",
        "tutorial": edpuzzle,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "education productivity",
        "name": "Nearpod",
        "url": "https://www.nearpod.com/",
        "description": "Real-time classroom interaction/assessment",
        "emoji": "📡",
        "tutorial": nearpod,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    }
    ,
    {
        "tags": "transcription audio productivity voice-to-text",
        "name": "Wispr Flow",
        "url": "https://wisprflow.ai/",
        "description": "Wispr Flow is a voice-to-text AI that provides real-time transcription, meeting integration, and easy export of transcripts and summaries.",
        "emoji": "🎙️",
        "tutorial": wisprflow,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "productivity notes memory",
        "name": "RememberQuick",
        "url": "https://www.rememberquick.com/",
        "description": "Lightweight AI-powered note and memory tool for quick captures and searchable personal memories.",
        "emoji": "🧠",
        "tutorial": rememberQuick,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "education quizzes assessment",
        "name": "QuizGecko",
        "url": "https://quizgecko.com/",
        "description": "AI-assisted quiz builder that generates question sets from source material and supports LMS export.",
        "emoji": "🦎",
        "tutorial": quizGecko,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education quizzes form builder",
        "name": "Jotform AI Quiz Generator",
        "url": "https://www.jotform.com/ai/quiz-generator/",
        "description": "Jotform's AI tool to convert content into quizzes using the Jotform form builder.",
        "emoji": "🧾",
        "tutorial": jotformQuizGenerator,
        "audience": ["Business Professionals", "AI Enthusiasts"]
    },
    {
        "tags": "education quizzes assessment",
        "name": "QuizzFoundry",
        "url": "https://quizzfoundry.com/",
        "description": "AI-enabled quiz maker focused on quick authoring and exportable assessments.",
        "emoji": "🧪",
        "tutorial": quizzFoundry,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    },
    {
        "tags": "education quizzes assessment",
        "name": "Cuiz AI",
        "url": "https://www.cuiz-ai.com/",
        "description": "AI quiz assistant for creating interactive quizzes and assessments from prompts or content.",
        "emoji": "🧩",
        "tutorial": cuizAi,
        "audience": ["AI Enthusiasts", "Business Professionals"]
    }
]
