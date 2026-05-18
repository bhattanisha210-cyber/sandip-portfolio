# AI-Powered Candidate Ranking System Architecture

This document outlines the architecture for the resume processing and candidate ranking application based on the requested workflow. The system is designed to be scalable, separating the frontend dashboard, data storage, and the heavy Natural Language Processing (NLP) / Machine Learning (ML) workloads.

## High-Level Architecture Diagram

```mermaid
graph TD
    %% Define Nodes
    User([Recruiter / User])
    UI[Frontend Dashboard<br/>React / Next.js]
    API[API Gateway / Backend<br/>Node.js / Python FastAPI]
    
    Storage[(Blob Storage)<br/>Raw Resumes AWS S3]
    DB[(Database)<br/>PostgreSQL / MongoDB]
    
    DocParser[Document Parser<br/>PDF/Docx Extractor]
    NLPEngine[NLP Extraction Engine<br/>spaCy / HuggingFace]
    MatchEngine[ML Matching Engine<br/>Vector DB / Cosine Similarity]

    %% Connections
    User -->|1. Uploads Resumes & Job Desc| UI
    UI -->|API Requests| API
    
    API -->|Save Raw File| Storage
    API -->|2. Send for Parsing| DocParser
    DocParser -->|Extracted Text| API
    
    API -->|3. Send Text to NLP| NLPEngine
    NLPEngine -->|Parsed Skills & Exp| API
    API -->|Store Parsed Data| DB
    
    API -->|4. Compare Resume vs Job| MatchEngine
    MatchEngine -->|Similarity Score| API
    API -->|Store Scores| DB
    
    DB -->|5. Fetch Ranked List| API
    API -->|Ranked Candidates| UI
    UI -->|Display Dashboard| User
```

## Step-by-Step Data Flow

1. **Upload Phase**: 
   - The user interface provides a drag-and-drop zone to upload a batch of resumes (PDF, DOCX) and input the Job Description.
   - Files are securely stored in a Cloud Storage bucket (e.g., AWS S3).
   
2. **Text Extraction**:
   - The Document Parser reads the raw files and converts them into unformatted text using libraries like `PyMuPDF` (for PDFs) or `python-docx`.

3. **NLP Processing (Entity Extraction)**:
   - The extracted text is fed into the NLP Engine.
   - Named Entity Recognition (NER) models extract key entities such as **Skills, Years of Experience, Education, and Job Titles**.
   - The Job Description is also parsed to identify the required skills and constraints.

4. **Machine Learning Matching**:
   - The system generates dense vector embeddings for both the extracted resume features and the job description using LLMs or models like Sentence Transformers.
   - A similarity algorithm (like **Cosine Similarity**) calculates a match percentage between the applicant's profile and the job requirements.
   
5. **Ranking and Dashboard**:
   - Candidates are sorted based on their similarity scores.
   - The Backend API serves heavily paginated and sorted lists of candidates to the Frontend Dashboard, highlighting the matching skills and missing requirements for quick recruiter review.

## Component Breakdown

| Component | Recommended Technology Stack | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | React, Next.js, TailwindCSS | Provides the interactive dashboard, upload forms, and data visualization charts for scores. |
| **Backend API** | Python (FastAPI) | Acts as the orchestrator. Python is highly recommended here due to native integrations with ML libraries. |
| **Doc Parser** | PyMuPDF, pdfplumber, Textract | Accurately extracts text from complex document layouts without losing reading order. |
| **NLP Engine** | spaCy, NLTK, Custom NER Models | Identifies semantic meaning. Extracts "Java", "5 years", "B.Sc. Computer Science". |
| **ML Engine** | Sentence-Transformers, Pinecone / Qdrant | Converts text into mathematical vectors to compare semantic closeness rather than exact word matches. |
| **Storage** | PostgreSQL (Relational Data), S3 (Files) | Stores the organized structured data, user accounts, and the actual PDF files for later viewing. |

> [!TIP]
> **Performance Optimization**
> For handling hundreds of resumes simultaneously, consider using a message broker (like **RabbitMQ** or **Redis Celery**) between the API and the AI Processing Engines. This allows resumes to be processed asynchronously in the background, updating the UI via WebSockets or polling once scoring is complete.
