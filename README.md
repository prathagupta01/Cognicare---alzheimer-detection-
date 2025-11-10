# CogniCare AI — Listen. Understand. Prevent.
Create a voice-based AI app that listens to short speech tests, analyzes speech + language patterns, and predicts early Alzheimer’s risk (Low / Medium / High).

# What It Does (In Simple Steps)

User presses Start Test → speaks into mic.
App records voice (15–30 sec).

AI extracts:

Speech features: pauses, pitch, fluency
Text features: word richness, coherence
Simple ML model predicts cognitive risk level.

Result appears:

Risk: 🟢 Low / 🟡 Moderate / 🔴 High

Why: “Long pauses” / “Low word variety”

Recommendation: “Retest or consult doctor.”

# Tech Stack (Fast to Build)
Layer	Tools
Frontend	Streamlit (UI + mic input)
Backend	Flask / FastAPI
Speech-to-Text	Whisper (or Vosk for offline)
Audio Features	Librosa
Language Features	DistilBERT
ML Model	Scikit-learn (Random Forest)
Database (Optional)	SQLite
Hosting	Streamlit Cloud / Render
🖥️ UI Plan

Clean blue–violet gradient background

Big microphone button (“Start Test”)
Progress bar during recording
Result card shows risk & explanation
Icons for AI Brain, Voice, Report
Clear disclaimer: “Screening tool, not diagnosis.”

# Architecture Flow

🎙️ Voice → 🧠 Whisper (STT) → 🎼 Librosa + DistilBERT (features) → 📊 ML model → 💡 Result Dashboard
🚀 MVP in 1 Hour
Streamlit page + mic input (10 min)
Whisper STT + mock features (15 min)
Simple rule/ML model (15 min)
Result UI with color-coded risk (15 min)
Test with sample audio & finalize (5 min)

# Unique Selling Points (USP)

✅ Non-invasive (no scans)
✅ Works offline / low-cost
✅ Multilingual (English, Hindi)
✅ Explainable results (why the score)
✅ Real-time demo-ready

# Social Impact

Detects Alzheimer’s early in rural India

Can be used by families or clinics

Supports doctors with digital pre-screening

# Summary

“We built CogniCare AI, a voice-based assistant that listens to your speech, analyzes fluency and word use, and detects early signs of Alzheimer’s — all through a simple conversation. It’s affordable, multilingual, and helps millions in rural India get screened early. CogniCare AI — Listen. Understand. Prevent.”
