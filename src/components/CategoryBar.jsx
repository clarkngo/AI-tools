import React from 'react';

export const CATEGORIES = [
  { label: 'All',             emoji: '✨', tags: null },
  { label: 'Writing',         emoji: '✍️',  tags: ['writing', 'grammar', 'editing', 'marketing', 'translation', 'content-creation', 'brand-voice', 'proofreading', 'paraphrasing', 'language'] },
  { label: 'Coding',          emoji: '💻', tags: ['coding', 'development', 'code-editor', 'app-building', 'full-stack', 'no-code', 'ui-generation', 'react', 'ide', 'enterprise', 'privacy'] },
  { label: 'Images',          emoji: '🖼️', tags: ['images', 'image-generation', 'design', 'art', 'generative-ai', 'open-source', 'adobe', 'social-media', 'presentation'] },
  { label: 'Video',           emoji: '🎬', tags: ['video', 'animation', 'text-to-video', 'image-to-video', 'avatars', 'lip-sync', 'podcast'] },
  { label: 'Audio & Music',   emoji: '🎵', tags: ['music', 'audio', 'voice', 'text-to-speech', 'voice-cloning', 'royalty-free', 'vocals', 'transcription', 'meetings', 'dubbing'] },
  { label: 'Education',       emoji: '🎓', tags: ['education', 'tutoring', 'assessment', 'quizzes', 'lesson-planning', 'grading', 'k-12', 'machine-learning', 'science', 'math', 'history', 'research'] },
  { label: 'Productivity',    emoji: '⚡', tags: ['productivity', 'notes', 'automation', 'documents', 'summarization', 'collaboration', 'brainstorming', 'visual-thinking', 'memory', 'search'] },
  { label: 'First Responder', emoji: '🚨', tags: ['police', 'fire', 'ems', 'dispatch', '911', 'law-enforcement', 'paramedic', 'wildfire', 'emergency', 'body-camera', 'gunshot-detection', 'satellite', 'acoustic'] },
];

const CategoryBar = ({ selectedCategory, onSelectCategory, categoryCounts }) => {
  return (
    <div className="category-bar">
      {CATEGORIES.map(cat => {
        const count = cat.label === 'All' ? categoryCounts['All'] : (categoryCounts[cat.label] || 0);
        const isActive = selectedCategory === cat.label;
        return (
          <button
            key={cat.label}
            className={`category-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.label)}
          >
            <span className="cat-emoji">{cat.emoji}</span>
            <span className="cat-label">{cat.label}</span>
            <span className="cat-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryBar;
