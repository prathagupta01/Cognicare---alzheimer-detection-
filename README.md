# CogniCare AI — Listen. Understand. Prevent.
Create a voice-based AI app that listens to short speech tests, analyzes speech + language patterns, and predicts early Alzheimer’s risk (Low/Medium/High).

# What It Does (In Simple Steps)
User presses Start Test → speaks into mic.<br>
App records voice (15–30 sec).

AI extracts:

Speech features: pauses, pitch, fluency<br>
Text features: word richness, coherence<br>
Simple ML model predicts cognitive risk level.<br>

Result appears:

Risk: 🟢 Low /🟡 Moderate /🔴 High<br>

Why: “Long pauses”/“Low word variety”<br>

Recommendation: “Retest or consult doctor.”<br>

# Tech Stack (Fast to Build)
Layer Tools<br>
Frontend	Streamlit (UI + mic input)<br>
Backend	Flask / FastAPI<br>
Speech-to-Text	Whisper (or Vosk for offline)<br>
Audio Features	Librosa<br>
Language Features	DistilBERT<br>
ML Model	Scikit-learn (Random Forest)<br>
Database (Optional)	SQLite<br>
Hosting	Streamlit Cloud / Render<br>

 ## Website Interface
 
 Here are some screenshots of the website UI:
 
 ### Home Page
 
 ![Home Page](images/homepage.png)
 
 ### Analysis Page
 
 ![Analysis Page](images/analysis.png)
 
 ### Results Page
 
 ![Results Page](images/result.png)
 
## UI Plan

Clean blue–violet gradient background<br>
Big microphone button (“Start Test”)<br>
Progress bar during recording<br>
Result card shows risk & explanation<br>
Icons for AI Brain, Voice, Report<br>
Clear disclaimer: “Screening tool, not diagnosis.”<br>

# Architecture Flow

🎙️ Voice → 🧠 Whisper (STT) → 🎼 Librosa + DistilBERT (features) → 📊 ML model → 💡 Result Dashboard<br>
🚀 MVP in 1 Hour<br>
Streamlit page + mic input (10 min)<br>
Whisper STT + mock features (15 min)<br>
Simple rule/ML model (15 min)<br>
Result UI with color-coded risk (15 min)<br>
Test with sample audio & finalize (5 min)<br>

# Unique Selling Points (USP)

✅ Non-invasive (no scans)<br>
✅ Works offline / low-cost<br>
✅ Multilingual (English, Hindi)<br>
✅ Explainable results (why the score)<br>
✅ Real-time demo-ready<br>

# Social Impact

Detects Alzheimer’s early in rural India<br>
Can be used by families or clinics<Br>
Supports doctors with digital pre-screening<br>

# Summary

“We built CogniCare AI, a voice-based assistant that listens to your speech, analyzes fluency and word use, and detects early signs of Alzheimer’s — all through a simple conversation. It’s affordable, multilingual, and helps millions in rural India get screened early. CogniCare AI — Listen. Understand. Prevent.”
